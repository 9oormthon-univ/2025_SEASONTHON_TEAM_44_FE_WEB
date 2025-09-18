import styled from "@emotion/styled";

const NoticeResponseRateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 30px;
  width: 100%;
  min-width: 520px;
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
  margin-right: auto;
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

export { NoticeResponseRateContainer, NoticeResponseRateTitle, NoticeResponseRateContentSection, TodaySummaryContentItemValueSection, TodaySummaryContentItemValuteTitle, TodaySummaryContentItemValue };
