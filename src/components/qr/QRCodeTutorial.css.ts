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

export { QRCodeTutorialContainer, QRCodeTutorialTitle, QRCodeTutorialSection };
