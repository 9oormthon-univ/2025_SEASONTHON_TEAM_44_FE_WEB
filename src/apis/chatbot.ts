import { axiosInstanceChatbot } from './axiosInstance';
import { z } from 'zod';

export const chatRequestSchema = z.object({
  session_id: z.string(),
  message: z.string(),
});

export type ChatRequestType = z.infer<typeof chatRequestSchema>;

export const postChat = async (request: ChatRequestType) => {
  const response = await axiosInstanceChatbot.post('/chat', request);
  return response.data;
};
