import { useMutation } from '@tanstack/react-query';
import { postChat, type ChatRequestType } from '@apis/chatbot';

export const usePostChat = () => {
  return useMutation({
    mutationFn: (request: ChatRequestType) => postChat(request),
    retry: false,
    gcTime: 0,
  });
};
