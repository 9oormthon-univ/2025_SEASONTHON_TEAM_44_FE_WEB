import { useMutation } from "@tanstack/react-query";
import { type NoticeRequest, postNotice } from "@apis/notice.ts";

export const usePostNotice = () => {
  return useMutation({
    mutationFn: (request: NoticeRequest) => postNotice(request),
  });
};
