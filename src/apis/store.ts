import { axiosInstance } from "@apis/axiosInstance.ts";
import type { BaseResponse } from "@/types/baseResponse.ts";

export interface StoreInfoResponse {
  id: number;
  name: string;
  imageUrl: string;
  introduction: string;
  phone: string;
  address: string;
  detailAddress: string;
  open: number;
  close: number;
}

export const getStoreInfo = async () => {
  try {
    const response = await axiosInstance.get<StoreInfoResponse>("/owner/store/me");
    console.log(response.data);
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};

export const existsStore = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<boolean>>("/owner/store/exists");
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};
