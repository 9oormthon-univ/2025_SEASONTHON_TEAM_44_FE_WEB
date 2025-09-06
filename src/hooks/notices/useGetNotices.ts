import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getNotices, type NoticeItem, type NoticeResponse } from '@apis/notice.ts';


// select로 가공한 최종 타입
type NoticesSelected = {
  items: NoticeItem[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  hasPrev: boolean;
  hasNext: boolean;
};

export const useGetNotices = (page: number, size = 9) => {
  return useQuery<NoticeResponse, Error, NoticesSelected>({
    queryKey: ['notices', page, size] as const,
    queryFn: () => getNotices(page, size), // 반드시 Promise<NoticeResponse> 반환
    placeholderData: keepPreviousData,     // v5에서 이전 데이터 유지
    staleTime: 30_000,
    select: (data): NoticesSelected => ({
      items: data.content,
      page: data.page,
      size: data.size,
      totalPages: data.totalPages,
      totalElements: data.totalElements,
      first: data.first,
      last: data.last,
      hasPrev: !data.first,
      hasNext: !data.last,
    }),
  });
};
