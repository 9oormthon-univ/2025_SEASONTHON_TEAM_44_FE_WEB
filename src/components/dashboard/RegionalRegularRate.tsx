import RegionDonutChart from "@components/dashboard/RegionDonutChart.tsx";
import theme from "@styles/theme.ts";
import * as S from "@components/dashboard/RegionalRegularRate.css.ts";
import { getDongFromAddress } from "@utils/region.ts";

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
    <S.RegionalRegularRateContainer>
      <S.RegionalRegularRateTitle>지역별 단골 비율</S.RegionalRegularRateTitle>
      {regionData.length > 0 ? (
        <S.RegionalRegularRateContentSection>
          <RegionDonutChart data={regionData} />
          <S.RegionalRegularRateContentInner>
            {regionData.map((item, index) => (
              <S.RegionalRegularRateContentItem key={index}>
                <div style={{ backgroundColor: item.color }} />
                <div>{`${getDongFromAddress(item.label)} ${item.value}%`}</div>
              </S.RegionalRegularRateContentItem>
            ))}
          </S.RegionalRegularRateContentInner>
        </S.RegionalRegularRateContentSection>
      ) : <div>방문한 단골이 없네요</div>}
    </S.RegionalRegularRateContainer>
  );
};

export default RegionalRegularRate;
