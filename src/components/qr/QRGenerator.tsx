import * as S from "@components/qr/QRGenerator.css.ts";
import { useGetGenerateQR } from "@hooks/qr/useGetGenerateQR.ts";
import PosterDownloader from "@components/qr/PosterDownloader.tsx";

interface QRGeneratorProps {
  id: number | undefined;
}

const QRGenerator = ({ id }: QRGeneratorProps) => {
  const { mutate, data } = useGetGenerateQR();
  const generateQR = () => {
    console.log(id);
    if (id == null) return;         // <- 방어
    mutate(String(id));             // <- 안전 변환
  };

  const qrImg = data?.response?.qrImage ?? ""; // <- 안전 접근

  return (
    <S.QRGeneratorContainer>
      <S.QRGeneratorTitle>{"나만의 매장 QR로\n우리 매장을 꾸준히 더 찾도록"}</S.QRGeneratorTitle>
      <S.QRGeneratorPrimaryText>방문 적립, 단골 등록, 쿠폰 발급까지 한 번에!</S.QRGeneratorPrimaryText>
      <S.QRGeneratorDescription>{"매장 QR만 있으면 새로운 손님도 단골로,\n단골 손님은 더 자주 찾는 매장이 됩니다"}</S.QRGeneratorDescription>
      {qrImg && <img src={qrImg} alt="매장 QR" style={{ width: "280px", height: "280px" }} />}
      {!qrImg && <S.QRGeneratorButton onClick={generateQR}>QR 생성하기 →</S.QRGeneratorButton>}
      {qrImg && (<PosterDownloader qrUrl={qrImg} />
      )}
    </S.QRGeneratorContainer>
  );
};

export default QRGenerator;
