import { useMutation } from "@tanstack/react-query";
import { postNotice } from "@apis/notice.ts";
import type { NoticeRequest } from "@/types/notices.ts";

export const usePostNotice = () => {
  return useMutation({
    mutationFn: (request: NoticeRequest) => postNotice(request),
  });
};
