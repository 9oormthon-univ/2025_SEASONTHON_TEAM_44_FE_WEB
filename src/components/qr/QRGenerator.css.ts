import styled from "@emotion/styled";

const QRGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  border-radius: 20px;
  padding: 60px 10%;
  text-align: center;
  white-space: pre-wrap;
  min-width: 500px;
  width: 1240px;
  gap: 20px;
  
  @media (max-width: 1480px) {
    width: 100%;
  }
  
  @media (max-width: 1240px) {
    width: 100%;
  }
`;

const QRGeneratorTitle = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.black};
`;

const QRGeneratorPrimaryText = styled.div`
  font: ${({ theme }) => theme.fonts.sub1};
  color: ${({ theme }) => theme.colors.primary.primary500};
`;

const QRGeneratorDescription = styled.div`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.grayScale.gray800};
`;

const QRGeneratorButton = styled.button`
  padding: 17px 131px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary.primary500};
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.button1};
  border: none;
  cursor: pointer;
`;

export { QRGeneratorContainer, QRGeneratorTitle, QRGeneratorPrimaryText, QRGeneratorDescription, QRGeneratorButton };
