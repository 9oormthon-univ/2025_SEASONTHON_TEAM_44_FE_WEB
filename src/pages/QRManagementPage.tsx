import QRGenerator from "@components/qr/QRGenerator.tsx";
import QRCodeTutorial from "@components/qr/QRCodeTutorial.tsx";
import styled from "@emotion/styled";

const QRManagementPage = () => {
  return (
    <QRGeneratorContainer>
      <QRGenerator />
      <QRCodeTutorial />
    </QRGeneratorContainer>
  );
};

export default QRManagementPage;

const QRGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
