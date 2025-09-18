import * as S from "@components/qr/QRCodeTutorial.css.ts";
import QRCodeTutorialItem from "@components/qr/QRCodeTutorialItem.tsx";
import { qrCodeTutorial } from "@utils/qr.ts";

const QRCodeTutorial = () => {

  return (
    <S.QRCodeTutorialContainer>
      <S.QRCodeTutorialTitle>QR코드, 이렇게 사용해요</S.QRCodeTutorialTitle>
      <S.QRCodeTutorialSection>
        {qrCodeTutorial.map((item) => (
          <QRCodeTutorialItem key={item.id} id={item.id} title={item.title} description={item.description} lottie={item.lottie} />
        ))}
      </S.QRCodeTutorialSection>
    </S.QRCodeTutorialContainer>
  );
};

export default QRCodeTutorial;
