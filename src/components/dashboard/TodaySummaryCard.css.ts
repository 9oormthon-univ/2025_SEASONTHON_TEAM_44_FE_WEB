import styled from "@emotion/styled";

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
`;

export {
  TodaySummaryCardContainer,
  TodaySummaryTitle,
  TodaySummaryContentSection,
  TodaySummaryContentItem,
  TodaySummaryContentItemValueSection,
};
