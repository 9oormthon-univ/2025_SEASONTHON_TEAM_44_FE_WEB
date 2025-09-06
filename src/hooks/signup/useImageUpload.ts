// hooks/signup/useImageUpload.ts
import { useMutation } from "@tanstack/react-query";
import { type UploadedImage, uploadImageToS3 } from "@hooks/signup/useUploadToS3.ts";

export function useImageUpload() {
  return useMutation<UploadedImage, Error, File>({
    mutationFn: (file) => uploadImageToS3(file),
  });
}
