import { useQuery } from "@tanstack/react-query";
import { getSimpleUserInfo } from "@apis/user.ts";

export const useGetSimpleUserInfo = () => {
  return useQuery({
    queryKey: ["simpleUserInfo"],
    queryFn: () => getSimpleUserInfo(),
  });
};
