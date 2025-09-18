import styled from "@emotion/styled";

const CouponFormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CouponInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CouponInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font: ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.black};
  }

  input {
    padding: 20px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.grayScale.gray30};
    border: 1px solid transparent;
    outline: none;
    font: ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.black};

    &::placeholder {
      font: ${({ theme }) => theme.fonts.body1};
      color: ${({ theme }) => theme.colors.grayScale.gray200};
    }

    &:hover {
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
      border: 1px solid ${({ theme }) => theme.colors.primary.primary500};
    }

    &:focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
      border: 1px solid ${({ theme }) => theme.colors.primary.primary500};
    }
  }
`;

const CouponButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 1300px) {
    margin-top: 20px;
  }
`;

const CouponButton = styled.button<{ buttonType: "cancel" | "save" }>`
  width: 100%;
  padding: 17px 0;
  border-radius: 12px;
  background-color: ${({ theme, buttonType }) =>
  buttonType === "cancel" ? theme.colors.primary.primary50 : theme.colors.primary.primary500};
  border: none;
  font: ${({ theme }) => theme.fonts.button1};
  color: ${({ theme, buttonType }) => buttonType === "cancel" ? theme.colors.black : theme.colors.white};
  cursor: pointer;
`;

export { CouponFormContainer, CouponInputGroup, CouponInputWrapper, CouponButtonGroup, CouponButton };
