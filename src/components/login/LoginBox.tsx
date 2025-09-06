import IcLogo from "@icon/ic-logo.svg";
import ImgLoginMain from "@img/img-login-main.png";
import styled from "@emotion/styled";
import { useAuthStore } from "@stores/useAuthStore.ts";
import { useNavigate } from "react-router";

const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlblR5cGUiOiJhY2Nlc3NUb2tlbiIsInN1YiI6IjIiLCJpYXQiOjE3NTcxNTg4MjksImV4cCI6MTc1OTc1MDgyOX0.GTMBxl8H7NygnZ0lhNKPKmGoukH270ts2PqfXFbf92T6LZ_8NgcaIXtOUBdn4BjIrJdWokW3ZpK1qW874BpF9Q";
const refreshToken = "eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlblR5cGUiOiJyZWZyZXNoVG9rZW4iLCJzdWIiOiIyIiwiaWF0IjoxNzU3MTU1ODM2LCJleHAiOjE3NTc3NjA2MzZ9.WByFvVUZLfiLafU8ZTq-r7bnpYoozEiH1XhL6dLXxFei433H6IU4E2LCUBC7HGgzH6DMFG66GFfCZdeMRiVUtw";

const LoginBox = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${import.meta.env.VITE_KAKAO_ID}&redirect_uri=${import.meta.env.VITE_API_URL}/callback`;
    login({ accessToken, refreshToken });
    navigate("/sign-up");
  };
  return (
    <LoginBoxContainer>
      <LoginBoxInner>
        <LoginBoxInner2>
          <LoginBoxLastInner>
            <LoginMainSection>
              <LoginInnerTitle>{'오늘도 다시 찾아온 손님\n단골을 만드는 가장 따뜻한 방법'}</LoginInnerTitle>
              <img src={IcLogo} alt="" />
              <img src={ImgLoginMain} alt="" style={{ width: "249px", height: "249px" }} />
              <LoginButton onClick={handleKakaoLogin}>카카오 로그인</LoginButton>
              <LoginInnerDescription>[사장님 전용]카카오로 로그인하고 매장을 시작해보세요</LoginInnerDescription>
            </LoginMainSection>
          </LoginBoxLastInner>
        </LoginBoxInner2>
      </LoginBoxInner>
    </LoginBoxContainer>
  );
};

export default LoginBox;

const LoginBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  min-width: 732px;
  min-height: 732px;
  border-radius: 732px;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 4px 30px 0 rgba(255, 126, 119, 0.07) inset;
`;

const LoginBoxInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 562px;
  min-height: 562px;
  border-radius: 562px;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 4px 30px 0 rgba(255, 126, 119, 0.09) inset;
`;

const LoginBoxInner2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 402px;
  min-height: 402px;
  border-radius: 402px;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 4px 30px 0 rgba(255, 126, 119, 0.11) inset;
`;

const LoginBoxLastInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 306px;
  min-height: 306px;
  border-radius: 306px;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 4px 30px 0 rgba(255, 126, 119, 0.21) inset;
`;

const LoginInnerTitle = styled.div`
  white-space: pre-wrap;
  text-align: center;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayScale.gray600};
`;

const LoginMainSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;

  img {
    margin-top: 20px;
  }
`;

const LoginButton = styled.button`
  padding: 17px 137px;
  font: ${({ theme }) => theme.fonts.button1};
  color: #181600;
  border-radius: 12px;
  background-color: #FEE500;
`;

const LoginInnerDescription = styled.div`
  margin-top: 15px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.primary.primary400};
`;
