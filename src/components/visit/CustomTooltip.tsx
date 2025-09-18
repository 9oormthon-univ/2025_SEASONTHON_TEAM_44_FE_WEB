import * as S from "@components/visit/CustomTooltip.css.ts";
import type { DailyVisit, WeeklyVisit } from "@apis/visit.ts";

const getTodyDate = () => {
  const todayDate = new Date().toLocaleDateString().replaceAll(" ", "");
  const lastIndex = todayDate.length - 1;
  return todayDate.slice(0, lastIndex);
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: DailyVisit | WeeklyVisit }[];
  label?: string;
  coordinate?: { x: number; y: number };
  toggleItem: 'daily' | 'weekly';
}

const CustomTooltip = ({ active, payload, label, coordinate, toggleItem }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const dataPoint = toggleItem === "daily" ? payload[0].payload as DailyVisit : payload[0].payload as WeeklyVisit;
    const { x, y } = coordinate ?? { x: 0, y: 0 };
    const tooltipOffset = 0; // 20px 위에 표시

    let displayDate = getTodyDate();

    // ✨ 2. 'daily' 모드가 아니면서, dataPoint 객체 안에 'date' 키가 실제로 존재하는지 확인합니다.
    if (toggleItem !== 'daily' && 'date' in dataPoint) {
      // 이 if 블록 안에서 TypeScript는 dataPoint.date가 안전하다고 인지합니다.
      displayDate = dataPoint.date;
    }

    return (
      <S.TooltipWrapper style={{ top: y - tooltipOffset, left: x }}>
        <S.TooltipHeader>
          <div>{toggleItem === "daily" ? `${label?.toString().padStart(2, '0')}:00` : " "}</div>
          <div>{displayDate}</div>
        </S.TooltipHeader>
        <S.TooltipContent>
          <S.TooltipContentTitle>이 시간 방문자</S.TooltipContentTitle><S.TooltipContentTitle>신규 단골 수</S.TooltipContentTitle><S.TooltipContentTitle>재방문 단골 수</S.TooltipContentTitle>
          <S.TooltipContentCount>{dataPoint.totalVisitors}</S.TooltipContentCount><S.TooltipContentCount>{dataPoint.newVisitors}</S.TooltipContentCount><S.TooltipContentCount>{dataPoint.revisits}</S.TooltipContentCount>
        </S.TooltipContent>
      </S.TooltipWrapper>
    );
  }
  return null;
};

export default CustomTooltip;
