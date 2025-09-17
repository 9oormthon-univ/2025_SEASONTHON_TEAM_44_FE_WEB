import axios from 'axios';
import { useAuthStore } from '@stores/useAuthStore.ts';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터: 토큰 주입
axiosInstance.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers = config.headers ?? {};
    (config.headers as Record<string, string>)[
      'Authorization'
    ] = `Bearer ${accessToken}`;
  }
  return config;
});

export const axiosInstanceChatbot = axios.create({
  baseURL: import.meta.env.VITE_AI_API_URL,
  timeout: 120000, // 2분 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
});
