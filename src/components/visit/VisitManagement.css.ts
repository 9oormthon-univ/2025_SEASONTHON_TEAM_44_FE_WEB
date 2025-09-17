import styled from "@emotion/styled";

const VisitManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 20px 30px;
  align-items: center;
  min-width: 1240px;
  gap: 20px;
`;

const VisitChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 20px 30px;
  min-width: 1240px;
  gap: 20px;
  margin-top: 60px;
`;

const VisitChartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const VisitChartTitle = styled.div`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
  padding: 10px 0;
`;

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray50};
`;

const ToggleItem = styled.div<{ isActive: boolean }>`
  padding: 10px 15px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme, isActive }) => isActive ? theme.colors.black : theme.colors.grayScale.gray600};
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.white : 'transparent'};
  box-shadow: ${({ isActive }) => isActive ? '0 5px 15px 0 rgba(103, 18, 18, 0.25)' : 'none'};
  border-radius: 20px;
  cursor: pointer;
`;

export { VisitManagementContainer, VisitChartContainer, VisitChartHeader, VisitChartTitle, ToggleWrapper, ToggleItem };
