import styled from "@emotion/styled";

const QRCodeTutorialItemContainer = styled.div`
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.grayScale.gray50};
  background-color: ${({ theme }) => theme.colors.white};
  width: 320px;
  height: 320px;
  overflow: hidden;
  
  @media (max-width: 1200px) {
    width: 320px;
    height: 320px;
  }
`;

const QRCodeTutorialItemInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

const QRCodeTutorialItemTitle = styled.div`
  font: ${({ theme }) => theme.fonts.sub1};
  color: ${({ theme }) => theme.colors.black};
`;

const QRCodeTutorialItemDescription = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayScale.gray800};
`;

export { QRCodeTutorialItemContainer, QRCodeTutorialItemInner, QRCodeTutorialItemTitle, QRCodeTutorialItemDescription };
