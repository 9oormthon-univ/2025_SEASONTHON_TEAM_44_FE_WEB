import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getVisits } from "@apis/visit.ts";

// getVisits는 반드시 Promise<VisitResponse>를 반환하도록 작성해줘야 함
export const useGetVisits = (page: number, size = 9) => {
  return useQuery({
    queryKey: ['visits', page, size] as const,
    queryFn: () => getVisits(page, size),   // Promise<VisitResponse>
    placeholderData: keepPreviousData,      // v5 방식
    staleTime: 30_000,
  });
};
