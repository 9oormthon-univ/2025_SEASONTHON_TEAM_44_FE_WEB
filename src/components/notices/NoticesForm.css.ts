import styled from "@emotion/styled";

const NoticesFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const NoticesFormInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NoticesFormInputLabel = styled.label`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.black};
`;

const NoticesFormInput = styled.input`
  padding: 20px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};;
  border: none;
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray200};
  }

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
    outline: none;
  }

  &:focus-visible {
    outline: none;
    border: none;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
  }

  transition: box-shadow 0.15s ease, background 0.15s ease;
`;

const NoticesFormTextArea = styled.textarea`
  padding: 20px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};;
  border: none;
  outline: none;
  min-height: 69px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray200};
  }
`;

const NoticesFormButton = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 17px 71px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary.primary500};
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.button1};
  border: none;
  cursor: pointer;
  text-align: center;

  @media (max-width: 968px) {
    width: 100%;
    text-align: center;
  }
`;

export { NoticesFormContainer, NoticesFormInputSection, NoticesFormInputLabel, NoticesFormInput, NoticesFormTextArea, NoticesFormButton };
