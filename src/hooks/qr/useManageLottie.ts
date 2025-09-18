import { useEffect, useRef, useState } from "react";
import type { LottieRefCurrentProps } from "lottie-react";
import { DotLottie } from "@lottiefiles/dotlottie-react";

export const useManageLottie = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  /*  const dotLottieRefCallback = (dotLottie: DotLottie | null) => {
      dotLottieRef.current = dotLottie;
    };*/

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

  return { lottieRef, dotLottieRef, isHovered, setIsHovered };
}
