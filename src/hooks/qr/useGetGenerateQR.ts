import { useMutation } from "@tanstack/react-query";
import { generateQrCode } from "@apis/qr.ts";

export const useGetGenerateQR = () => {
  return useMutation({
    mutationFn: (url: string) => generateQrCode(url),
  });
};
