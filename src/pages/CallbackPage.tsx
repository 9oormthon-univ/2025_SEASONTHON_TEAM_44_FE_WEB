import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@apis/axiosInstance";
import { useAuthStore } from "@stores/useAuthStore";
import { useEffect } from "react";

interface KakaoTokenResponse {
  accessToken: string;
  refreshToken: string;
}

interface BaseResponse<T> {
  success: boolean;
  response: T;
}

const exchangeCode = async (code: string) => {
  const req = { code, role: "OWNER" };
  const res = await axiosInstance.post<BaseResponse<KakaoTokenResponse>>("/auth/kakao/login", req);
  return res.data;
};

const CallbackPage = () => {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["kakao", code],
    queryFn: () => exchangeCode(code!),
    enabled: !!code,     // code 없을 때 호출 막기
    retry: 0,
  });

  // ✅ 렌더 밖에서 처리
  useEffect(() => {
    if (!isSuccess || !data) return;
    login({
      accessToken: data.response.accessToken,
      refreshToken: data.response.refreshToken,
    });
    navigate("/", { replace: true });
  }, [isSuccess, data, login, navigate]);

  if (isLoading) return <div></div>;
  if (isError) return <div></div>;
  return null;
};

export default CallbackPage;
