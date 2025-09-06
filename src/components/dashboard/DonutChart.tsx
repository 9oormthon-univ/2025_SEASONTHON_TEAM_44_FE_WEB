import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import styled from "@emotion/styled";

interface DonutDatum {
  label: string;
  value: number;
  color: string;
  textColor: string;
}

interface DonutChartProps {
  data: DonutDatum[];
  centerLabel?: string;
  percentBadgeIndex?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  valueSuffix?: string;
  valueFormatter?: (v: number) => string;
}

const DonutChart = ({
                      data, valueSuffix = "%", valueFormatter = (v) => `${v}${valueSuffix}`,
                    }: DonutChartProps) => {
  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.9;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const disp = Math.round(percent * 100);
    const labelColor = props.payload.textColor;

    return (
      <g>
        <foreignObject x={x - 18} y={y - 14} width={60} height={52}>
          <DonutChartLabel style={{ color: labelColor }}>
            {disp}%
          </DonutChartLabel>
        </foreignObject>
      </g>
    );
  };

  return (
    <DonutChartContainer>
      <ResponsiveContainer>
        <PieChart>
          <Tooltip
            formatter={(v: number) => valueFormatter(v)}
            contentStyle={{ borderRadius: 12, border: "1px solid #eee" }}
          />
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            innerRadius={55}
            outerRadius={110}
            labelLine={false}
            label={renderCustomizedLabel}
            isAnimationActive
            animationDuration={500}
          >
            {data.map((d, i) => (
              <Cell key={i} fill={d.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </DonutChartContainer>
  );
};

export default DonutChart;

const DonutChartContainer = styled.div`
  width: 250px;
  height: 250px;

  .recharts-wrapper *:focus {
    outline: none;
  }
`;

const DonutChartLabel = styled.div`
  display: inline-block;
  padding: 3px 6px;
  background: #FFEEED;
  color: ${({ theme }) => theme.colors.primary.primary700};
  font: ${({ theme }) => theme.fonts.sub2};
  border-radius: 6px;
  text-align: center;
  white-space: nowrap;
`;
