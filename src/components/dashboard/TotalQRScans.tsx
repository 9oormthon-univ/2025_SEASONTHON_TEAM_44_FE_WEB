import * as S from "@components/dashboard/TotalQRScans.css.ts";

interface TotalQRScansProps {
  totalVisitCount: number;
}

const TotalQRScans = ({ totalVisitCount }: TotalQRScansProps) => {
  return (
    <S.TotalQRScansContainer>
      <S.TotalQRScansTitle>현재까지 QR 스캔 횟수</S.TotalQRScansTitle>
      <S.TotalQRScansCount><span>{totalVisitCount}</span>회</S.TotalQRScansCount>
    </S.TotalQRScansContainer>
  );
};

export default TotalQRScans;

