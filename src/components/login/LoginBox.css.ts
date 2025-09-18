import styled from "@emotion/styled";

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

export { LoginBoxContainer, LoginBoxInner, LoginBoxInner2, LoginBoxLastInner, LoginInnerTitle, LoginMainSection, LoginButton, LoginInnerDescription };
