import DonutChart from "@components/dashboard/DonutChart.tsx";
import theme from "@styles/theme.ts";
import * as S from "@components/dashboard/NoticeResponseRate.css.ts";

interface NoticeResponseRateProps {
  notiId: number;
  title: string;
  confirmedCount: number;
  unconfirmedCount: number;
}

const NoticeResponseRate = ({ unconfirmedCount, confirmedCount, title }: NoticeResponseRateProps) => {

  const totalCount = confirmedCount + unconfirmedCount;
  const confirmedRate = confirmedCount / totalCount * 100;
  const unconfirmedRate = unconfirmedCount / totalCount * 100;

  const newNoticeData = [
    {
      label: "확인 처리 완료",
      value: confirmedRate,
      color: theme.colors.primary.primary500,
      textColor: theme.colors.primary.primary500,
    },
    {
      label: "미확인",
      value: (unconfirmedRate === 0 && confirmedRate === 0) ? 100 : unconfirmedRate,
      color: theme.colors.grayScale.gray100,
      textColor: theme.colors.grayScale.gray500,
    },
  ];
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
