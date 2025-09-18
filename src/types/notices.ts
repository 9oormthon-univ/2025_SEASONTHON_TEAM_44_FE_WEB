export const receiverOptions = [
  { value: 'ALL', label: '전체' },
  { value: 'BASIC', label: '일반 단골(10회 미만)' },
  { value: 'CERTIFIED', label: '인증 단골(10회 이상)' },
];

export const receiverType = [
  { value: 'ALL', label: '전체' },
  { value: 'BASIC', label: '단골' },
  { value: 'CERTIFIED', label: '인증 단골' },
];

export type ReceiverOption = "ALL" | "BASIC" | "CERTIFIED";

export interface NoticeRequest {
  title: string;
  content: string;
  target: "ALL" | "BASIC" | "CERTIFIED";
}

export interface NoticeItem {
  id: number;
  title: string;
  target: string;
  targetCount: number;
  readCount: number;
  createdAt: string;
  content: string;
}

export interface NoticeResponse {
  content: NoticeItem[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}
