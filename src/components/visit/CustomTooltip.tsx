import * as S from "@components/visit/CustomTooltip.css.ts";

const getTodyDate = () => {
  const todayDate = new Date().toLocaleDateString().replaceAll(" ", "");
  const lastIndex = todayDate.length - 1;
  return todayDate.slice(0, lastIndex);
};

const CustomTooltip = ({ active, payload, label, coordinate, toggleItem }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    const { x, y } = coordinate;
    const tooltipOffset = 0; // 20px 위에 표시

    return (
      <S.TooltipWrapper style={{ top: y - tooltipOffset, left: x }}>
        <S.TooltipHeader>
          <div>{toggleItem === "daily" ? `${label.toString().padStart(2, '0')}:00` : " "}</div>
          <div>{toggleItem === "daily" ? getTodyDate() : dataPoint.date}</div>
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
