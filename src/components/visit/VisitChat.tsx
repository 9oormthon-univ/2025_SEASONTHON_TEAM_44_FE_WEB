import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useGetDailyVisitors } from "@hooks/visit/useGetDailyVisitors.ts";
import { useGetWeeklyVisitors } from "@hooks/visit/useGetWeeklyVisitors.ts";
import CustomTooltip from "@components/visit/CustomTooltip.tsx";

interface VisitChatProps {
  toggleItem: "daily" | "weekly";
}

const VisitChat = ({ toggleItem }: VisitChatProps) => {
  const { data: dailyData, isPending: isDailyPending } = useGetDailyVisitors();
  const { data: weeklyData, isPending: isWeeklyPending } = useGetWeeklyVisitors();
  const isPending = isDailyPending || isWeeklyPending;

  if (isPending) return null;

  if (!dailyData || !weeklyData || (toggleItem === "daily" && !dailyData.response.length) || (toggleItem === "weekly" && !weeklyData.response.length)) {
    return <div>방문자 정보가 존재하지 않습니다.</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={300} style={{ outline: 'none' }}>
      <AreaChart data={toggleItem === "daily" ? dailyData.response : weeklyData.response}>
        <CartesianGrid strokeDasharray="4 2" stroke="#C8C5C4" vertical={false} />
        <XAxis
          dataKey={toggleItem === "daily" ? "endHour" : "date"}
          tickFormatter={toggleItem === "daily" ? (hour) => `${hour.toString().padStart(2, '0')}:00` : (date) => date}
          /*ticks={['06:00', '12:00', '18:00', '24:00']}*/
          axisLine={true}
          strokeWidth={2}
          tickLine={false}
          padding={{ left: 90, right: 90 }}
          stroke="#A8A4A3"
        />
        <YAxis
          domain={[0, 20]}
          axisLine={true}
          strokeWidth={2}
          padding={{ bottom: 1 }}
          tickLine={false}
          stroke="#A8A4A3"
        />
        <Tooltip
          content={<CustomTooltip toggleItem={toggleItem} />}
        />
        <Area
          type="monotone"
          dataKey="totalVisitors"
          stroke="#FF7D76"
          fill="#FFF4EA"
          strokeWidth={2}
          dot={{ r: 5, stroke: '#FF6B6B', fill: '#FEFCFB', strokeWidth: 2 }}
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default VisitChat;
