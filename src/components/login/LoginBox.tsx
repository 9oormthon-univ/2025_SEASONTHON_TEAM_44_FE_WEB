import IcLogo from "@icon/ic-logo.svg";
import ImgLoginMain from "@img/img-login-main.png";
import * as S from "@components/login/LoginBox.css.ts";

const LoginBox = () => {
  const handleKakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
      import.meta.env.VITE_KAKAO_ID
    }&redirect_uri=${encodeURIComponent(window.location.origin + '/login')}`;
  };

  return (
    <S.LoginBoxContainer>
      <S.LoginBoxInner>
        <S.LoginBoxInner2>
          <S.LoginBoxLastInner>
            <S.LoginMainSection>
              <S.LoginInnerTitle>{'오늘도 다시 찾아온 손님\n단골을 만드는 가장 따뜻한 방법'}</S.LoginInnerTitle>
              <img src={IcLogo} alt="" />
              <img src={ImgLoginMain} alt="" style={{ width: "249px", height: "249px" }} />
              <S.LoginButton onClick={handleKakaoLogin}>카카오 로그인</S.LoginButton>
              <S.LoginInnerDescription>[사장님 전용]카카오로 로그인하고 매장을 시작해보세요</S.LoginInnerDescription>
            </S.LoginMainSection>
          </S.LoginBoxLastInner>
        </S.LoginBoxInner2>
      </S.LoginBoxInner>
    </S.LoginBoxContainer>
  );
};

export default LoginBox;
