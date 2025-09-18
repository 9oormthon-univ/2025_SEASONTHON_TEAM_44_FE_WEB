import Lottie from "lottie-react";
import * as S from "@components/qr/QRCodeTutorialItem.css.ts";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useManageLottie } from "@hooks/qr/useManageLottie.ts";

interface QRCodeTutorialItemProps {
  id: number;
  title: string;
  description: string;
  lottie: unknown;
}

const QRCodeTutorialItem = ({ id, description, lottie, title }: QRCodeTutorialItemProps) => {
  const { setIsHovered } = useManageLottie();

  return (
    <S.QRCodeTutorialItemContainer
      key={id}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}>
      {id === 1 ? <DotLottieReact
          /*dotLottieRefCallback={dotLottieRefCallback}*/
          src="https://lottie.host/7d50ecd3-f646-48b9-a68c-52f9f7fed2f3/ByOJUDxzbs.json"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
          layout={{ fit: "cover" }}
          autoplay
          loop
        /> :
        <Lottie
          /*lottieRef={lottieRef}*/
          animationData={lottie}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
          autoplay
          loop
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
