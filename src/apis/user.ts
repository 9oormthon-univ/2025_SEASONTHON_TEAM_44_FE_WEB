import { axiosInstance } from "@apis/axiosInstance.ts";
import type { BaseResponse } from "@/types/baseResponse.ts";
import type { SimpleUserInfo } from "@/types/user.ts";

export const getSimpleUserInfo = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<SimpleUserInfo>>("/users/me/simple");
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};
