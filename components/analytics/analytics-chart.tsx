"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type AnalyticsData = {
  date: string;
  value: number;
};

function formatDate(raw: string) {
  if (!raw || raw.length !== 8) return raw;
  return `${raw.slice(6, 8)}-${raw.slice(4, 6)}-${raw.slice(0, 4)}`;
}

export default function AnalyticsChart({
  metric,
  title,
}: {
  metric: string;
  title: string;
}) {
  const [timeRange, setTimeRange] = useState("7days");
  const [data, setData] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/analytics?metric=${metric}&range=${timeRange}`)
      .then((res) => res.json())
      .then((json) => {
        const formatted = json.map((item: { date: string; value: string }) => ({
          date: formatDate(item.date),
          value: Number(item.value),
        }));
        setData(formatted);
      })
      .catch((err) => console.error("Error fetching analytics:", err))
      .finally(() => setLoading(false));
  }, [metric, timeRange]);

  return (
    <Card className="w-full max-w-3xl p-4 rounded-2xl shadow-xl bg-white transform transition duration-300 hover:scale-102 hover:shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#ff9e3d]">{title}</h2>
        <Select onValueChange={setTimeRange} defaultValue={timeRange}>
          <SelectTrigger className="w-34 cursor-pointer">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="all-time">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-48 text-[#ff9e3d]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#ff9e3d" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </Card>
  );
}
