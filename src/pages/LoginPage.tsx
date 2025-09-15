import styled from "@emotion/styled";
import LoginBox from "@components/login/LoginBox.tsx";
import { useQuery } from "@tanstack/react-query";
import { existsStore } from "@apis/store.ts";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@stores/useAuthStore.ts";

const LoginPage = () => {
  const { isLoggedIn } = useAuthStore();
  const { data, isSuccess } = useQuery({
    queryKey: ["auth", "check"],
    queryFn: () => existsStore(),
  })

  if (isSuccess && data) {
    if (isLoggedIn && data.response === true) {
      return <Navigate to="/dashboard" replace />;
    } else if (isLoggedIn && data.response === false) {
      return <Navigate to="/sign-up" replace />;
    }
  }
  return (
    <LoginContainer>
      <LoginBox />
    </LoginContainer>
  );
};

export default LoginPage;

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #FFF -2.06%, #FFECE9 102.12%), #FEFCFB;
`;
