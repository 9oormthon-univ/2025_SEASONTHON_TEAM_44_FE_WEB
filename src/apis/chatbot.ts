import { axiosInstanceChatbot } from './axiosInstance';
import { z } from 'zod';

export const chatRequestSchema = z.object({
  session_id: z.string(),
  message: z.string(),
});

const chatResponseSchema = z.object({
  detail: z.array(
    z.object({
      loc: z.array(z.union([z.string(), z.number()])),
      msg: z.string(),
      type: z.string(),
    }),
  ),
});

export type ChatRequestType = z.infer<typeof chatRequestSchema>;
export type ChatResponseType = z.infer<typeof chatResponseSchema>;

export const postChat = async (request: ChatRequestType) => {
  const response = await axiosInstanceChatbot.post('/chat', request);
  return chatResponseSchema.parse(response.data);
};
