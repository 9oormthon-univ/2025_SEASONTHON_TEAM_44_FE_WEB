import RegionDonutChart from "@components/dashboard/RegionDonutChart.tsx";
import styled from "@emotion/styled";
import theme from "@styles/theme.ts";

/*const regionData: DonutDatum[] = [
  { label: '판교동', value: 45, color: '#FF5E57', textColor: theme.colors.primary.primary700 },
  { label: '백현동', value: 25, color: theme.colors.primary.primary400, textColor: theme.colors.primary.primary700 },
  { label: '삼평동', value: 15, color: theme.colors.primary.primary200, textColor: theme.colors.primary.primary700 },
  { label: '운중동', value: 7, color: theme.colors.primary.primary50, textColor: theme.colors.primary.primary700 },
  { label: '금곡동', value: 4, color: theme.colors.grayScale.gray400, textColor: theme.colors.primary.primary700 },
  { label: '정자1동', value: 4, color: theme.colors.grayScale.gray100, textColor: theme.colors.primary.primary700 },
];*/

interface RegionRatio {
  region: string;
  ratio: number;
}

interface DonutDatum {
  label: string;
  value: number;
  color: string;
  textColor: string;
}

const colors = [
  '#FF5E57', // 1등
  theme.colors.primary.primary400,
  theme.colors.primary.primary200,
  theme.colors.primary.primary50,
  theme.colors.grayScale.gray400,
  theme.colors.grayScale.gray100,
];

// 변환 함수
function mapRegionRatiosToDonutData(
  regionRatios: RegionRatio[],
  theme: any
): DonutDatum[] {
  if (!regionRatios) {
    return [];
  }
  return regionRatios
    .sort((a, b) => b.ratio - a.ratio) // ratio 높은 순
    .slice(0, colors.length) // 최대 6개만
    .map((item, idx) => ({
      label: item.region,
      value: item.ratio,
      color: colors[idx],
      textColor: theme.colors.primary.primary700,
    }));
}

// 사용 예시
/*const regionRatios: RegionRatio[] = [
  { region: '판교동', ratio: 45 },
  { region: '백현동', ratio: 25 },
  { region: '삼평동', ratio: 15 },
];*/


interface RegionalRegularRate {
  regionRatios: {
    region: string
    ratio: number
  }[]
}

const RegionalRegularRate = ({ regionRatios }: RegionalRegularRate) => {
  const regionData: DonutDatum[] = mapRegionRatiosToDonutData(regionRatios, theme);
  console.log(regionData.length);
  return (
    <RegionalRegularRateContainer>
      <RegionalRegularRateTitle>지역별 단골 비율</RegionalRegularRateTitle>
      {regionData.length > 0 ? (
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
      ) : <div>방문한 단골이 없네요</div>}
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
  min-width: 520px;
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
