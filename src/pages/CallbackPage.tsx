import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@apis/axiosInstance.ts";
import type { BaseResponse } from "@/types/baseResponse.ts";
import { useAuthStore } from "@stores/useAuthStore.ts";
import { useNavigate } from "react-router";

interface KakaoTokenResponse {
  accessToken: string;
  refreshToken: string;
}

const exchangeCode = async (code: string) => {
  const response = await axiosInstance.get<BaseResponse<KakaoTokenResponse>>("/auth/kakao/exchange", {
    params: { code },
  });
  return response.data;
};

const CallbackPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const { data } = useQuery({
    queryKey: ["kakao", code],
    queryFn: () => exchangeCode(code!),
  });

  if (data) {
    login({ accessToken: data.response.accessToken, refreshToken: data.response.refreshToken });
    navigate('/', { replace: true });
  }

  return <div></div>;
};

export default CallbackPage;
