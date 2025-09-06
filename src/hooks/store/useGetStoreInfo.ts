import { useQuery } from "@tanstack/react-query";
import { getStoreInfo } from "@apis/store.ts";

export const useGetStoreInfo = () => {
  return useQuery({
    queryKey: ["store-info"],
    queryFn: () => getStoreInfo(),
  })
}
