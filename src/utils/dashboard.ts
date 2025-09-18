import theme from "@styles/theme.ts";

export const handleChartData = (unconfirmedCount: number, confirmedCount: number) => {
  const formattedUnconfirmedCount = unconfirmedCount < 0 ? 0 : unconfirmedCount;
  const totalCount = confirmedCount + formattedUnconfirmedCount;
  const confirmedRate = confirmedCount / totalCount * 100;
  const unconfirmedRate = formattedUnconfirmedCount / totalCount * 100;

  return [
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
};
