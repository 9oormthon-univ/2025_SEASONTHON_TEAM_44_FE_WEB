import NoticeResponseRate from "@components/dashboard/NoticeResponseRate.tsx";
import RegionalRegularRate from "@components/dashboard/RegionalRegularRate.tsx";
import TodaySummaryCard from "@components/dashboard/TodaySummaryCard.tsx";
import TotalQRScans from "@components/dashboard/TotalQRScans.tsx";
import styled from "@emotion/styled";

const DashboardPage = () => {
  return (
    <DashboardContainer>
      <DashboardSection>
        <TotalQRScans />
        <TodaySummaryCard />
      </DashboardSection>
      <DashboardSection>
        <RegionalRegularRate />
        <NoticeResponseRate />
      </DashboardSection>
    </DashboardContainer>
  );
};

export default DashboardPage;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grayScale.gray50};
  width: 100%;
  min-width: 1240px;
`;

const DashboardSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
