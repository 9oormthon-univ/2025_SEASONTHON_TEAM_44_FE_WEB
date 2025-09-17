import { useQuery } from "@tanstack/react-query";
import { getWeeklyVisits } from "@apis/visit.ts";

export const useGetWeeklyVisitors = () => {
  return useQuery({
    queryKey: ["weeklyVisitors"],
    queryFn: () => getWeeklyVisits(),
    staleTime: 30_000,
  })
};
