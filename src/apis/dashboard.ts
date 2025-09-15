import { axiosInstance } from "@apis/axiosInstance.ts";
import type { BaseResponse } from "@/types/baseResponse.ts";

export interface DashboardResponse {
  totalVisits: number;
  todaySummary: {
    visitors: number;
    diffVisitors: number;
    newRegulars: number;
    diffNewRegulars: number;
    revisitRegulars: number;
    diffRevisitRegulars: number;
  };
  regionRatios: {
    region: string;
    ratio: number;
  }[];
  notiResponse: {
    notiId: number;
    title: string;
    confirmedCount: number;
    unconfirmedCount: number;
  };
}

export const getDashboard = async () => {
  try {
    const response = await axiosInstance.get<BaseResponse<DashboardResponse>>("/stores/me/summary");
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};


