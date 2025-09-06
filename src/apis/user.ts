import { axiosInstance } from "@apis/axiosInstance.ts";
import type { BaseResponse } from "@/types/baseResponse.ts";

interface SimpleUserInfo {
  name: string;
  profileImage: string | undefined;
  region: string;
}

export const getSimpleUserInfo = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<SimpleUserInfo>>("/user/me/simple");
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};
