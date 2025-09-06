// apis/imageUpload.ts
import axios from "axios";                    // S3 PUT은 깨끗한 axios/fetch 권장
import { axiosInstance } from "@apis/axiosInstance";

export interface ImageUploadResponse {
  key: string;
  url: string;        // presigned PUT URL
  expiresAt: number;
}

export type UploadedImage = { key: string; fileUrl: string };

export async function uploadImageToS3(file: File): Promise<UploadedImage> {
  // 1) presign
  const { data: pre } = await axiosInstance.post<ImageUploadResponse>(
    "/owner/file/presign",
    { fileName: file.name, contentType: file.type }
  );

  // 2) S3 PUT (body는 파일 그 자체)
  const putRes = await axios.put(pre.url, file, {
    headers: { "Content-Type": file.type },   // presign과 동일
  });
  if (putRes.status !== 200) {
    throw new Error(`S3 업로드 실패: ${putRes.status}`);
  }

  // 3) 업로드된 파일 URL (public 버킷이면 바로 접근 가능)
  return { key: pre.key, fileUrl: pre.url.split("?")[0] };
}
