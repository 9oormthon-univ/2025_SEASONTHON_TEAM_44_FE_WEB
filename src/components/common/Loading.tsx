import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import LottieLoading from "@/assets/lottie/lottie-loading.json";
import styled from "@emotion/styled";

export const Loading = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  return (
    <LoadingContainer>
      <Lottie
        lottieRef={lottieRef}
        animationData={LottieLoading}
        loop={true}
        autoplay={true}
      />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
