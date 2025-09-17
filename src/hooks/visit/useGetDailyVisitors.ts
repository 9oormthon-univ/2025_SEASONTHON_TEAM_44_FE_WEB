import { useQuery } from "@tanstack/react-query";
import { getDailyVisits } from "@apis/visit.ts";

export const useGetDailyVisitors = () => {
  return useQuery({
    queryKey: ["dailyVisitors"],
    queryFn: () => getDailyVisits(),
    staleTime: 30_000,
  })
};
