import IcTutorialFirst from "@icon/ic-tutorial-first.svg"
import IcTutorialSecond from "@icon/ic-tutorial-second.svg"
import IcTutorialThird from "@icon/ic-tutorial-third.svg"
import IcTutorialFourth from "@icon/ic-tutorial-fourth.svg"
import * as S from "@components/qr/QRCodeTutorial.css.ts";

const qrCodeTutorial = [
  {
    id: 1,
    title: "새로운 단골 등록!",
    description: "손님이 처음 QR을 찍으면 자동으로 단골로 등록되며, 이후 방문을 기록할 수 있습니다.",
    icon:  IcTutorialFirst,
  },
  {
    id: 2,
    title: "매 방문이 기록되는 스탬프",
    description: "QR 스캔 한 번으로 손님의 방문이 자동으로 적립됩니다.",
    icon:  IcTutorialSecond,
  },
  {
    id: 3,
    title: "10번 채우면 단골 인증서",
    description: "스탬프가 가득 차면 단골 인증서가 발급되어 혜택을 제공할 수 있습니다.",
    icon:  IcTutorialThird,
  },
  {
    id: 4,
    title: "등록부터 인증까지 한 QR로",
    description: "QR 하나만으로 신규·적립·인증을 모두 관리할 수 있습니다.",
    icon:  IcTutorialFourth,
  },
];

const QRCodeTutorial = () => {
  return (
    <S.QRCodeTutorialContainer>
      <S.QRCodeTutorialTitle>QR코드, 이렇게 사용해요</S.QRCodeTutorialTitle>
      <S.QRCodeTutorialSection>
        {qrCodeTutorial.map((item) => (
          <S.QRCodeTutorialItem key={item.id}>
            {/*<Player src={item.lottie} loop autoplay />*/}
            <S.QRCodeTutorialItemImage src={item.icon} alt=""/>
            <S.QRCodeTutorialItemInner>
              <S.QRCodeTutorialItemTitle>{item.title}</S.QRCodeTutorialItemTitle>
              <S.QRCodeTutorialItemDescription>{item.description}</S.QRCodeTutorialItemDescription>
            </S.QRCodeTutorialItemInner>
          </S.QRCodeTutorialItem>
        ))}
      </S.QRCodeTutorialSection>
    </S.QRCodeTutorialContainer>
  );
};

export default QRCodeTutorial;
