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
  const res = await axiosInstance.get<BaseResponse<VisitResponse>>("/owner/stamp/logs", {
    params: { page, size },
  });
  return res.data;
};
