import styled from "@emotion/styled";
import SignUpForm from "@components/login/SignUpForm.tsx";

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <SignUpForm />
    </SignUpContainer>
  );
};

export default SignUpPage;

const SignUpContainer = styled.div`
  width: 100vw;
  height: 100%;
  padding-top: 8%;
  padding-bottom: 16%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
  
  @media (max-width: 440px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
