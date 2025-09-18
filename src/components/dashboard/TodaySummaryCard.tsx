import IcArrowUp from "@icon/ic-arrow-up.svg";
import IcArrowDown from "@icon//ic-arrow-down.svg";
import * as S from "@components/dashboard/TodaySummaryCard.css.ts";
import styled from "@emotion/styled";

interface TodaySummaryCardProps {
  visitors: number;
  diffVisitors: number;
  newRegulars: number;
  diffNewRegulars: number;
  revisitRegulars: number;
  diffRevisitRegulars: number;
}

const TodaySummaryCard = ({
                            visitors,
                            diffVisitors,
                            diffRevisitRegulars,
                            diffNewRegulars,
                            revisitRegulars,
                            newRegulars,
                          }: TodaySummaryCardProps) => {
  const isMinusValue = (value: number) => {
    return value < 0;
  };

  const formatNumber = (value: number) => {
    if (value < 0) {
      return -value;
    }
    return value;
  };

  return (
    <S.TodaySummaryCardContainer>
      <S.TodaySummaryTitle>오늘 요약</S.TodaySummaryTitle>
      <S.TodaySummaryContentSection>
        <S.TodaySummaryContentItem>
          <div>오늘의 방문자</div>
          <S.TodaySummaryContentItemValueSection isIncrease={!isMinusValue(diffVisitors)}>
            <div>{visitors}</div>
            {diffVisitors === 0 ? <ZeroDiffValueWrapper>
              <div />
              <div />
            </ZeroDiffValueWrapper> : (
              <>
                <img src={isMinusValue(diffVisitors) ? IcArrowDown : IcArrowUp} alt="" />
                <div>{formatNumber(diffVisitors)}</div>
              </>
            )}
          </S.TodaySummaryContentItemValueSection>
        </S.TodaySummaryContentItem>
        <S.TodaySummaryContentItem>
          <div>신규 단골 수</div>
          <S.TodaySummaryContentItemValueSection isIncrease={!isMinusValue(diffNewRegulars)}>
            <div>{newRegulars}</div>
            {diffNewRegulars === 0 ? <ZeroDiffValueWrapper>
              <div />
              <div />
            </ZeroDiffValueWrapper> : (<>
                <img src={isMinusValue(diffNewRegulars) ? IcArrowDown : IcArrowUp} alt="" />
                <div>{formatNumber(diffNewRegulars)}</div>
              </>
            )}
          </S.TodaySummaryContentItemValueSection>
        </S.TodaySummaryContentItem>
        <S.TodaySummaryContentItem>
          <div>재방문 단골 수</div>
          <S.TodaySummaryContentItemValueSection isIncrease={!isMinusValue(diffVisitors)}>
            <div>{revisitRegulars}</div>
            {diffRevisitRegulars === 0 ? <ZeroDiffValueWrapper>
              <div />
              <div />
            </ZeroDiffValueWrapper> : (
              <>
                <img src={isMinusValue(diffRevisitRegulars) ? IcArrowDown : IcArrowUp} alt="" />
                <div>{formatNumber(diffRevisitRegulars)}</div>
              </>
            )}
          </S.TodaySummaryContentItemValueSection>
        </S.TodaySummaryContentItem>
      </S.TodaySummaryContentSection>
    </S.TodaySummaryCardContainer>
  )
    ;
};

export default TodaySummaryCard;

const ZeroDiffValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  padding: 15px;
  margin-left: auto;

  div {
    height: 2px;
    width: 8px;
    background-color: ${({ theme }) => theme.colors.grayScale.gray400};
  }
`;
