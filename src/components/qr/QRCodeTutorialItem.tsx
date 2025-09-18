import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import * as S from "@components/qr/QRCodeTutorialItem.css.ts";
import { useEffect, useRef, useState } from "react";

interface QRCodeTutorialItemProps {
  id: number;
  title: string;
  description: string;
  lottie: unknown;
}

const QRCodeTutorialItem = ({ id, description, lottie, title }: QRCodeTutorialItemProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (lottieRef.current) {
      if (isHovered) {
        lottieRef.current.play();
      } else {
        lottieRef.current.goToAndStop(0, true);
      }
    }
  }, [isHovered]);

  return (
    <S.QRCodeTutorialItemContainer
      key={id}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}>
      <Lottie
        lottieRef={lottieRef}
        animationData={lottie}
        loop={isHovered}
        autoplay={isHovered}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        style={{ width: "100%", height: "180px", objectFit: "cover" }} />
      <S.QRCodeTutorialItemInner>
        <S.QRCodeTutorialItemTitle>{title}</S.QRCodeTutorialItemTitle>
        <S.QRCodeTutorialItemDescription>{description}</S.QRCodeTutorialItemDescription>
      </S.QRCodeTutorialItemInner>
    </S.QRCodeTutorialItemContainer>
  );
};

export default QRCodeTutorialItem;
