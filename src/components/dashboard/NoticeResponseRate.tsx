import DonutChart from "@components/dashboard/DonutChart.tsx";
import styled from "@emotion/styled";
import theme from "@styles/theme.ts";

const noticeData = [
  { label: "확인 처리 완료", value: 75, color: theme.colors.primary.primary500, textColor: theme.colors.primary.primary500 },
  { label: "미확인", value: 25, color: theme.colors.grayScale.gray100, textColor: theme.colors.grayScale.gray500 },
];

const NoticeResponseRate = () => {
  return (
    <NoticeResponseRateContainer>
      <NoticeResponseRateTitle>공지 반응률</NoticeResponseRateTitle>
      <NoticeResponseRateContentSection>
        <DonutChart
          data={noticeData}
          percentBadgeIndex={0} // 75% 강조
          valueSuffix="%"
        />
        <TodaySummaryContentItemValueSection>
          <TodaySummaryContentItemValuteTitle>마감 2시간 전 특급 할인!</TodaySummaryContentItemValuteTitle>
          <TodaySummaryContentItemValue isConfirmed={true}>
            <div />
            <div>확인 처리 완료</div>
          </TodaySummaryContentItemValue>
          <TodaySummaryContentItemValue isConfirmed={false}>
            <div />
            <div>미확인</div>
          </TodaySummaryContentItemValue>
        </TodaySummaryContentItemValueSection>
      </NoticeResponseRateContentSection>
    </NoticeResponseRateContainer>
  );
};

export default NoticeResponseRate;

const NoticeResponseRateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 30px;
  width: 100%;
  min-width: 591px;
  border-radius: 20px;
  gap: 30px;
`;

const NoticeResponseRateTitle = styled.div`
  margin-right: auto;
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
`;

const NoticeResponseRateContentSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const TodaySummaryContentItemValueSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  div:first-of-type {
    font: ${({ theme }) => theme.fonts.sub2};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const TodaySummaryContentItemValuteTitle = styled.div`
  font: ${({ theme }) => theme.fonts.sub2};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 10px;
`;

const TodaySummaryContentItemValue = styled.div<{ isConfirmed?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  gap: 5px;

  div:first-of-type {
    width: 15px;
    height: 15px;
    background-color: ${({ isConfirmed, theme }) =>
      isConfirmed ? theme.colors.primary.primary500 : theme.colors.grayScale.gray100};
    border-radius: 6px;
  }

  div:last-of-type {
    font: ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.grayScale.gray800};
  }
`;
