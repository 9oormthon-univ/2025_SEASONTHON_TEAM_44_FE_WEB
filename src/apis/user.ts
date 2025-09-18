import { axiosInstance } from "@apis/axiosInstance.ts";
import type { BaseResponse } from "@/types/baseResponse.ts";

interface SimpleUserInfo {
  name: string;
  profileImage: string | undefined;
  region: string;
}

/* api 없어진듯? */
export const getSimpleUserInfo = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<SimpleUserInfo>>("/users/me/simple");
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};
