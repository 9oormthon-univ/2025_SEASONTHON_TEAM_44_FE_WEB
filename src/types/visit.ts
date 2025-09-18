export interface VisitItem {
  dateTime: string; // ISO Date string
  customerName: string; // 고객명
  action: string; // 행동 유형
  cumulative: number; // 누적 방문 수
  note: string; // 비고
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

export interface DailyVisit {
  startHour: number;
  endHour: number;
  totalVisitors: number;
  newVisitors: number;
  revisits: number;
}

export interface WeeklyVisit {
  date: string;
  totalVisitors: number;
  newVisitors: number;
  revisits: number;
}
