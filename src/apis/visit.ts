import { axiosInstance } from '@apis/axiosInstance.ts';
import type { BaseResponse } from '@/types/baseResponse.ts';
import type { DailyVisit, VisitResponse, WeeklyVisit } from "@/types/visit.ts";

export const getVisits = async (page: number, size: number) => {
  const res = await axiosInstance.get<BaseResponse<VisitResponse>>(
    '/stamps/logs',
    {
      params: { page, size },
    },
  );
  return res.data;
};

export const getDailyVisits = async () => {
  const response = await axiosInstance.get<BaseResponse<DailyVisit[]>>("/stamps/me/visit-trends/daily");
  return response.data;
};

export const getWeeklyVisits = async () => {
  const response = await axiosInstance.get<BaseResponse<WeeklyVisit[]>>("/stamps/me/visit-trends/weekly");
  return response.data;
};
