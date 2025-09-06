import { axiosInstance } from "@apis/axiosInstance.ts";
import type { BaseResponse } from "@/types/baseResponse.ts";

export interface QrCodeResponse {
  qrImage: string;
}

export const generateQrCode = async (url: string) => {
  try {
    const qrURL = "https://ds-customer-frontend.vercel.app/main" + `/${url}`
    const response = await axiosInstance.get<BaseResponse<QrCodeResponse>>("/owner/qr", {
      params: { url: qrURL },
    });

    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};
