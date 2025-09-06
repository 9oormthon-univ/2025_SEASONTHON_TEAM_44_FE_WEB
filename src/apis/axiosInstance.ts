import axios from "axios";

const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlblR5cGUiOiJhY2Nlc3NUb2tlbiIsInN1YiI6IjIiLCJpYXQiOjE3NTcxNTg4MjksImV4cCI6MTc1OTc1MDgyOX0.GTMBxl8H7NygnZ0lhNKPKmGoukH270ts2PqfXFbf92T6LZ_8NgcaIXtOUBdn4BjIrJdWokW3ZpK1qW874BpF9Q";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    authorization: "Bearer " + accessToken,
  },
});
