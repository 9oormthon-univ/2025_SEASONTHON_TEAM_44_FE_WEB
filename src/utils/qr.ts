import IcTutorialFirst from "@icon/ic-tutorial-first.svg";
import IcTutorialSecond from "@icon/ic-tutorial-second.svg";
import IcTutorialThird from "@icon/ic-tutorial-third.svg";
import IcTutorialFourth from "@icon/ic-tutorial-fourth.svg";
import LottieQrFirst from "@/assets/lottie/lottie-qr-first.json";
import LottieQrSecond from "@/assets/lottie/lottie-qr-second.json";
import LottieQrThird from "@/assets/lottie/lottie-qr-third.json";
import LottieQrFourth from "@/assets/lottie/lottie-qr-fourth.json";

export const qrCodeTutorial = [
  {
    id: 1,
    title: "새로운 단골 등록!",
    description: "손님이 처음 QR을 찍으면 자동으로 단골로 등록되며, 이후 방문을 기록할 수 있습니다.",
    icon: IcTutorialFirst,
    lottie: LottieQrFirst,

  },
  {
    id: 2,
    title: "매 방문이 기록되는 스탬프",
    description: "QR 스캔 한 번으로 손님의 방문이 자동으로 적립됩니다.",
    icon: IcTutorialSecond,
    lottie: LottieQrSecond,
  },
  {
    id: 3,
    title: "10번 채우면 단골 인증서",
    description: "스탬프가 가득 차면 단골 인증서가 발급되어 혜택을 제공할 수 있습니다.",
    icon: IcTutorialThird,
    lottie: LottieQrThird,
  },
  {
    id: 4,
    title: "등록부터 인증까지 한 QR로",
    description: "QR 하나만으로 신규·적립·인증을 모두 관리할 수 있습니다.",
    icon: IcTutorialFourth,
    lottie: LottieQrFourth,
  },
];

export function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => resolve(String(reader.result));
    reader.readAsDataURL(blob);
  });
}
