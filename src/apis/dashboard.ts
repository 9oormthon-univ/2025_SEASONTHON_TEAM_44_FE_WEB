import { axiosInstance } from "@apis/axiosInstance.ts";
import type { BaseResponse } from "@/types/baseResponse.ts";
import type { DashboardResponse } from "@/types/dashboard.ts";

export const getDashboard = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<DashboardResponse>>("/stores/me/summary");
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};


