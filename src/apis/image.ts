import { axiosInstance } from "@apis/axiosInstance.ts";

interface ImageUploadResponse {
  key: string;
  url: string;
  expiresAt: number;
}

export const uploadImage = async (file: File) => {
  try {
    const response = await axiosInstance.post<ImageUploadResponse>("api/files/presign", {
      fileName: file.name,
      contentType: file.type,
    });
    return response.data;
  } catch ( error ) {
    console.log(error);
  }
};
