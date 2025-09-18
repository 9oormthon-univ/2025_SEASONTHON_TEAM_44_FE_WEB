import { axiosInstance } from '@apis/axiosInstance.ts';
import type { BaseResponse } from '@/types/baseResponse.ts';

export interface StoreInfoResponse {
  id: number;
  name: string;
  storeImageUrl: string;
  introduction: string;
  category: string;
  phone: string;
  address: string;
  detailAddress: string;
  open: number;
  close: number;
  menuImageUrls: string[]
}

export const getStoreInfo = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<StoreInfoResponse>>(
      '/stores/me',
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const existsStore = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<boolean>>(
      '/stores/me/exists',
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postStoresInsight = async () => {
  const response = await axiosInstance.post('/api/stores/insight');
  return response.data;
};
