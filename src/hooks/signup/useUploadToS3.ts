// apis/imageUpload.ts
import axios from "axios";                    // S3 PUT은 깨끗한 axios/fetch 권장
import { axiosInstance } from "@apis/axiosInstance";
import type { BaseResponse } from "@/types/baseResponse.ts";

export interface ImageUploadResponse {
  key: string;
  url: string;        // presigned PUT URL
  expiresAt: number;
}

export type UploadedImage = { key: string; fileUrl: string };

export async function uploadImageToS3(file: File): Promise<UploadedImage> {
  // 1) presign
  const { data: res } = await axiosInstance.post<BaseResponse<ImageUploadResponse>>(
    "/files/presign",
    { fileName: file.name, contentType: file.type }
  );

  const pre = res.response;

  console.log(pre.url);
  const putRes = await axios.put(pre.url, file, {
    headers: { "Content-Type": file.type },   // presign과 동일
  });
  if (putRes.status !== 200) {
    throw new Error(`S3 업로드 실패: ${putRes.status}`);
  }

  // 3) 업로드된 파일 URL (public 버킷이면 바로 접근 가능)
  return { key: pre.key, fileUrl: pre.url.split("?")[0] };
}
