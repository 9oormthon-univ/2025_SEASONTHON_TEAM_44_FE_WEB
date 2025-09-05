import RegionDonutChart, { type DonutDatum } from "@components/dashboard/RegionDonutChart.tsx";
import styled from "@emotion/styled";
import theme from "@styles/theme.ts";

const regionData: DonutDatum[] = [
  { label: '판교동', value: 45, color: '#FF5E57', textColor: theme.colors.primary.primary700 },
  { label: '백현동', value: 25, color: theme.colors.primary.primary400, textColor: theme.colors.primary.primary700 },
  { label: '삼평동', value: 15, color: theme.colors.primary.primary200, textColor: theme.colors.primary.primary700 },
  { label: '운중동', value: 7, color: theme.colors.primary.primary50, textColor: theme.colors.primary.primary700 },
  { label: '금곡동', value: 4, color: theme.colors.grayScale.gray400, textColor: theme.colors.primary.primary700 },
  { label: '정자1동', value: 4, color: theme.colors.grayScale.gray100, textColor: theme.colors.primary.primary700 },
];

const RegionalRegularRate = () => {
  return (
    <RegionalRegularRateContainer>
      <RegionalRegularRateTitle>지역별 단골 비율</RegionalRegularRateTitle>
      <RegionalRegularRateContentSection>
        <RegionDonutChart data={regionData} />
        <RegionalRegularRateContentInner>
          {regionData.map((item, index) => (
            <RegionalRegularRateContentItem key={index}>
              <div style={{ backgroundColor: item.color }} />
              <div>{`${item.label} ${item.value}%`}</div>
            </RegionalRegularRateContentItem>
          ))}
        </RegionalRegularRateContentInner>
      </RegionalRegularRateContentSection>
    </RegionalRegularRateContainer>
  );
};

export default RegionalRegularRate;

const RegionalRegularRateContainer = styled.div`
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

const RegionalRegularRateTitle = styled.div`
  margin-right: auto;
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
`;

const RegionalRegularRateContentSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
`;

const RegionalRegularRateContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RegionalRegularRateContentItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  
  div:first-of-type {
    width: 15px;
    height: 15px;
    border-radius: 6px;
  }
  
  div:last-of-type {
    font: ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.black};
  }
`;
