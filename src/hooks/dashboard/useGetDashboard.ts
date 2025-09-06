import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "@apis/dashboard.ts";

export const useGetDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashboard(),
  })
};
