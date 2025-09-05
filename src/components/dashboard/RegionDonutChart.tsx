// components/dashboard/RegionDonutChart.tsx
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import styled from "@emotion/styled";
import theme from "@styles/theme.ts";
import { useId } from "react";

export interface DonutDatum {
  label: string;
  value: number;
  color: string;
  textColor?: string;
}

interface RegionDonutChartProps {
  data: DonutDatum[];
  width?: number;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  valueSuffix?: string;
  maxSlices?: number;
  maxLabeled?: number;
}
const NAME_W = 55;
const NAME_H = 24;
const BADGE_W = 60;
const GAP = 3;
const R_OFFSET = -5;

const RegionDonutChart = ({
                            data,
                            innerRadius = 55,
                            outerRadius = 110,
                            startAngle = 30,
                            endAngle = -330,
                            valueSuffix = "%",
                            maxSlices = 6,
                            maxLabeled = 4,
                          }: RegionDonutChartProps) => {
  const gradId = useId();

  // 1) 값 기준 내림차순 정렬 → 상위 maxSlices만 사용
  const displayed = [...data].sort((a, b) => b.value - a.value).slice(0, maxSlices);

  // 2) 라벨을 붙일 상위 maxLabeled 항목 집합
  const labeledSet = new Set(displayed.slice(0, maxLabeled).map((d) => d.label));

  const rankMap = new Map(displayed.map((d, i) => [d.label, i]));

  const renderDualLabels = (props: any) => {
    const { cx, cy, midAngle, percent, payload } = props;
    if (!labeledSet.has(payload.label)) return null;

    const RAD = Math.PI / 180;
    const angle = -midAngle * RAD;

    // 두 라벨이 공유할 기준점(도넛 바깥쪽)
    const anchorR = outerRadius + R_OFFSET;
    const ax = cx + anchorR * Math.cos(angle);
    const ay = cy + anchorR * Math.sin(angle);

    const disp = Math.round(percent * 100);
    const color = payload.textColor || payload.color;

    const rank = rankMap.get(payload.label) ?? 999;

    const nameColor =
      rank < 1 ? theme.colors.white : theme.colors.primary.primary700;

    return (
      <g transform={`translate(${ax}, ${ay})`}>
        {/* 이름: 기준점 위 */}
        <foreignObject
          x={-NAME_W / 2}
          y={-(NAME_H + GAP)}
          width="100%"
          height="100%"
        >
          {/* ← 폰트/컬러는 theme 값 그대로 사용 */}
          <NameLabel style={{ color: nameColor }}>{payload.label}</NameLabel>
        </foreignObject>

        {/* 퍼센트: 기준점 아래 */}
        <foreignObject
          x={-BADGE_W / 2}
          y={GAP}
          width="100%"
          height="100%"
        >
          <BadgeLabel style={{ color }}>
            {disp}{valueSuffix}
          </BadgeLabel>
        </foreignObject>
      </g>
    );
  };

  return (
    <ChartBox>
      <ResponsiveContainer>
        <PieChart>
          <defs>
            <linearGradient
              id={`primaryGradient-${gradId}`}
              x1="100%" y1="50%" x2="0%" y2="0%"
              gradientTransform="rotate(89)"
            >
              <stop offset="0%"   stopColor="#ff714d" />
              <stop offset="50%"  stopColor="#ff635b" />
              <stop offset="100%" stopColor="#ff8973" />
            </linearGradient>
          </defs>

          <Tooltip
            formatter={(v: number, _n: string, p: any) => [`${v}${valueSuffix}`, p.payload.label]}
            contentStyle={{ borderRadius: 12, border: "1px solid #eee" }}
          />
          <Pie
            data={displayed}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            labelLine={false}
            label={renderDualLabels}
            isAnimationActive
            animationDuration={500}
          >
            {displayed.map((d, i) => (
              <Cell
                key={i}
                fill={i === 0 ? `url(#primaryGradient-${gradId})` : d.color}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
};

export default RegionDonutChart;

const ChartBox = styled.div`
  width: 300px;
  height: 280px;

  .recharts-wrapper *:focus {
    outline: none;
  }
`;

const NameLabel = styled.div`
  display: inline-block;
  font: ${({ theme }) => theme.fonts.sub2};
  color: ${({ theme }) => theme.colors.primary.primary700};
  text-align: center;
  white-space: nowrap;
`;

const BadgeLabel = styled.div`
  display: inline-block;
  padding: 3px 6px;
  border-radius: 6px;
  font: ${({ theme }) => theme.fonts.sub2};
  background-color: ${({ theme }) => theme.colors.primary.primary50};
  color: ${({ theme }) => theme.colors.primary.primary700};
  text-align: center;
  white-space: nowrap;
`;
