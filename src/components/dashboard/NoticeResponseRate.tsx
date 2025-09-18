import DonutChart from "@components/dashboard/DonutChart.tsx";
import * as S from "@components/dashboard/NoticeResponseRate.css.ts";
import { handleChartData } from "@utils/dashboard.ts";

interface NoticeResponseRateProps {
  notiId: number;
  title: string;
  confirmedCount: number;
  unconfirmedCount: number;
}

const NoticeResponseRate = ({ unconfirmedCount, confirmedCount, title }: NoticeResponseRateProps) => {
  const newNoticeData = handleChartData(unconfirmedCount, confirmedCount);
  return (
    <S.NoticeResponseRateContainer>
      <S.NoticeResponseRateTitle>공지 반응률</S.NoticeResponseRateTitle>
      {(title) ? (
        <S.NoticeResponseRateContentSection>
          <DonutChart
            data={newNoticeData}
            percentBadgeIndex={0} // 75% 강조
            valueSuffix="%"
          />
          <S.TodaySummaryContentItemValueSection>
            <S.TodaySummaryContentItemValuteTitle>{title}</S.TodaySummaryContentItemValuteTitle>
            <S.TodaySummaryContentItemValue isConfirmed={true}>
              <div />
              <div>확인 처리 완료</div>
            </S.TodaySummaryContentItemValue>
            <S.TodaySummaryContentItemValue isConfirmed={false}>
              <div />
              <div>미확인</div>
            </S.TodaySummaryContentItemValue>
          </S.TodaySummaryContentItemValueSection>
        </S.NoticeResponseRateContentSection>
      ) : <div>등록된 공지가 없습니다</div>}
    </S.NoticeResponseRateContainer>
  );
};

export default NoticeResponseRate;
