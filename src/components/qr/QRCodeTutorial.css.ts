import styled from "@emotion/styled";

const QRCodeTutorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const QRCodeTutorialTitle = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

const QRCodeTutorialSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
  
  @media (max-width: 1600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 13px;
  }
  
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const QRCodeTutorialItem = styled.div`
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

const QRCodeTutorialItemImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
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

export { QRCodeTutorialContainer, QRCodeTutorialTitle, QRCodeTutorialSection, QRCodeTutorialItem, QRCodeTutorialItemImage, QRCodeTutorialItemInner, QRCodeTutorialItemTitle, QRCodeTutorialItemDescription };
