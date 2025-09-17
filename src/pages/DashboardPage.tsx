import NoticeResponseRate from "@components/dashboard/NoticeResponseRate.tsx";
import RegionalRegularRate from "@components/dashboard/RegionalRegularRate.tsx";
import TodaySummaryCard from "@components/dashboard/TodaySummaryCard.tsx";
import TotalQRScans from "@components/dashboard/TotalQRScans.tsx";
import styled from "@emotion/styled";
import { useGetDashboard } from "@hooks/dashboard/useGetDashboard.ts";
import Loading from "@components/common/Loading.tsx";

const DashboardPage = () => {
  const { data, isPending, isSuccess } = useGetDashboard();

  if (!isSuccess && isPending) {
    return <Loading />
  }
  const { totalVisits, notiResponse, regionRatios, todaySummary } = data?.response ?? {};

  return (
    <DashboardContainer>
      <DashboardSection>
        <TotalQRScans totalVisitCount={totalVisits!} />
        <TodaySummaryCard {...todaySummary!} />
      </DashboardSection>
      <DashboardSection>
        <RegionalRegularRate regionRatios={regionRatios!} />
        <NoticeResponseRate {...notiResponse!}/>
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
  min-width: 559px;
`;

const DashboardSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  
  @media (max-width: 1380px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
