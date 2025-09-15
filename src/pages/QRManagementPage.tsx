import QRGenerator from "@components/qr/QRGenerator.tsx";
import QRCodeTutorial from "@components/qr/QRCodeTutorial.tsx";
import styled from "@emotion/styled";
import { useGetStoreInfo } from "@hooks/store/useGetStoreInfo.ts";

const QRManagementPage = () => {
  const { data, isSuccess, isPending } = useGetStoreInfo();

  if (!isSuccess && isPending && !data) return null;
  const storeId = data?.response.id; // <- 두 번 옵셔널 체이닝

  return (
    <QRGeneratorContainer>
      <QRGenerator id={storeId} />
      <QRCodeTutorial />
    </QRGeneratorContainer>
  );
};

export default QRManagementPage;

const QRGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;
