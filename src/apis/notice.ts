import { axiosInstance } from "@apis/axiosInstance.ts";
import type { BaseResponse } from "@/types/baseResponse.ts";
import type { NoticeRequest, NoticeResponse } from "@/types/notices.ts";

export const postNotice = async (request: NoticeRequest) => {
  try {
    const response = await axiosInstance.post("/notis", request);
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};

export const getNotices = async (page: number, size: number): Promise<NoticeResponse> => {
  try {
    const response = await axiosInstance.get<BaseResponse<NoticeResponse>>(
      '/notis/logs',
      { params: { page, size } }
    );

    // API 규격에 따라 response.data.data / response.data.response 중 확인
    const payload = response.data.response;
    if (!payload) {
      throw new Error('Empty response from /owner/noti/logs');
    }
    return payload;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

