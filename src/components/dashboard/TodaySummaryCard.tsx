import styled from "@emotion/styled";
import IcArrowUp from "@icon/ic-arrow-up.svg";
import IcArrowDown from "@icon//ic-arrow-down.svg";

interface TodaySummaryCardProps {
  visitors: number
  diffVisitors: number
  newRegulars: number
  diffNewRegulars: number
  revisitRegulars: number
  diffRevisitRegulars: number
}

const TodaySummaryCard = ({ visitors, diffVisitors, diffRevisitRegulars, diffNewRegulars, revisitRegulars, newRegulars }: TodaySummaryCardProps) => {
  const isMinusValue = (value: number) => {
    return value < 0;
  }

  const formatNumber = (value: number) => {
    if (value < 0) {
      return -value
    }
    return value;
  }

  return (
    <TodaySummaryCardContainer>
      <TodaySummaryTitle>오늘 요약</TodaySummaryTitle>
      <TodaySummaryContentSection>
        <TodaySummaryContentItem>
          <div>오늘의 방문자</div>
          <TodaySummaryContentItemValueSection isIncrease={!isMinusValue(diffVisitors)}>
            <div>{visitors}</div>
            <img src={isMinusValue(diffVisitors) ? IcArrowDown : IcArrowUp} alt="" />
            <div>{formatNumber(diffVisitors)}</div>
          </TodaySummaryContentItemValueSection>
        </TodaySummaryContentItem>
        <TodaySummaryContentItem>
          <div>신규 단골 수</div>
          <TodaySummaryContentItemValueSection isIncrease={!isMinusValue(diffNewRegulars)}>
            <div>{newRegulars}</div>
            <img src={isMinusValue(diffNewRegulars) ? IcArrowDown : IcArrowUp} alt="" />
            <div>{formatNumber(diffNewRegulars)}</div>
          </TodaySummaryContentItemValueSection>
        </TodaySummaryContentItem>
        <TodaySummaryContentItem>
          <div>재방문 단골 수</div>
          <TodaySummaryContentItemValueSection isIncrease={!isMinusValue(diffVisitors)}>
            <div>{revisitRegulars}</div>
            <img src={isMinusValue(diffRevisitRegulars) ? IcArrowDown : IcArrowUp}/>
            <div>{formatNumber(diffRevisitRegulars)}</div>
          </TodaySummaryContentItemValueSection>
        </TodaySummaryContentItem>
      </TodaySummaryContentSection>
    </TodaySummaryCardContainer>
  );
};

export default TodaySummaryCard;

const TodaySummaryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 30px;
  border-radius: 20px;
  border: none;
  gap: 32px;
  width: 100%;
`;

const TodaySummaryTitle = styled.div`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
`;

const TodaySummaryContentSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const TodaySummaryContentItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
  border: none;
  border-radius: 20px;
  font: ${({ theme }) => theme.fonts.sub1};
  color: ${({ theme }) => theme.colors.black};
`;

const TodaySummaryContentItemValueSection = styled.div<{ isIncrease?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  div:first-of-type {
    font: ${({ theme }) => theme.fonts.h2};
    color: ${({ theme }) => theme.colors.black};
  }
  
  img {
    margin-left: auto;
  }
  
  div:last-of-type {
    font: ${({ theme }) => theme.fonts.body1};
    color: ${({ theme, isIncrease }) => isIncrease ? theme.colors.primary.primary700 : theme.colors.semantic.blue};
  }
`
