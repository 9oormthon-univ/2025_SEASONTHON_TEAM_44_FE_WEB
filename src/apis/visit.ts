import { axiosInstance } from "@apis/axiosInstance.ts";
import type { BaseResponse } from "@/types/baseResponse.ts";

export interface VisitItem {
  dateTime: string;      // ISO Date string
  customerName: string;  // 고객명
  action: string;        // 행동 유형
  cumulative: number;    // 누적 방문 수
  note: string;          // 비고
}

// 페이징 응답
export interface VisitResponse {
  content: VisitItem[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

// 화면 표시용
export interface VisitListItem {
  id: number;
  visitDate: string;
  name: string;
  type: string;
  count: number;
  etc: string;
}

export const getVisits = async (page: number, size: number) => {
  const res = await axiosInstance.get<BaseResponse<VisitResponse>>("/stamps/logs", {
    params: { page, size },
  });
  return res.data;
};

export interface DailyVisit {
  startHour: number;
  endHour: number;
  totalVisitors: number;
  newVisitors: number;
  revisits: number;
}

export const getDailyVisits = async () => {
  const response = await axiosInstance.get<BaseResponse<DailyVisit[]>>("/stamps/me/visit-trends/daily");
  return response.data;
};

export interface WeeklyVisit {
  date: string;
  totalVisitors: number;
  newVisitors: number;
  revisits: number;
}

export const getWeeklyVisits = async () => {
  const response = await axiosInstance.get<BaseResponse<WeeklyVisit[]>>("/stamps/me/visit-trends/weekly");
  return response.data;
};
