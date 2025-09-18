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
