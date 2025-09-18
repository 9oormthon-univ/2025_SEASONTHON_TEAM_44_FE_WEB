import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import * as S from "@components/qr/QRCodeTutorialItem.css.ts";
import { useEffect, useRef, useState } from "react";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";

interface QRCodeTutorialItemProps {
  id: number;
  title: string;
  description: string;
  lottie: unknown;
}

const QRCodeTutorialItem = ({ id, description, lottie, title }: QRCodeTutorialItemProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  const dotLottieRefCallback = (dotLottie: DotLottie | null) => {
    dotLottieRef.current = dotLottie;
  };


  useEffect(() => {
    const lottieInstance = lottieRef.current;
    const dotLottieInstance = dotLottieRef.current;

    if (isHovered) {
      // 마우스를 올리면 처음부터 한 번 재생
      lottieInstance?.goToAndPlay(0, true);
      dotLottieInstance?.play();
    } else {
      // 마우스를 떼면 첫 프레임으로 이동 후 정지
      lottieInstance?.goToAndStop(0, true);
      dotLottieInstance?.stop();
    }
  }, [isHovered]);

  /*useEffect(() => {
    if (lottieRef.current) {
      if (isHovered) {
        lottieRef.current.play();
      } else {
        lottieRef.current.goToAndStop(0, true);
      }
    }
  }, [isHovered]);*/

  return (
    <S.QRCodeTutorialItemContainer
      key={id}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}>
      {id === 1 ? <DotLottieReact
          dotLottieRefCallback={dotLottieRefCallback}
          src="https://lottie.host/7d50ecd3-f646-48b9-a68c-52f9f7fed2f3/ByOJUDxzbs.json"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
          layout={{ fit: "cover" }}
        /> :
        <Lottie
          lottieRef={lottieRef}
          animationData={lottie}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
      }
      <S.QRCodeTutorialItemInner>
        <S.QRCodeTutorialItemTitle>{title}</S.QRCodeTutorialItemTitle>
        <S.QRCodeTutorialItemDescription>{description}</S.QRCodeTutorialItemDescription>
      </S.QRCodeTutorialItemInner>
    </S.QRCodeTutorialItemContainer>
  );
};

export default QRCodeTutorialItem;
