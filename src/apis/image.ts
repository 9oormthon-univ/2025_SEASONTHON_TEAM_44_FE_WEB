import { axiosInstance } from "@apis/axiosInstance.ts";
import type { ImageUploadResponse } from "@/types/image.ts";

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
