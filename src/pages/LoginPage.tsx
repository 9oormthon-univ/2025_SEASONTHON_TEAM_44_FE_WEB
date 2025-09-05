import styled from "@emotion/styled";
import LoginBox from "@components/login/LoginBox.tsx";

const LoginPage = () => {
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
