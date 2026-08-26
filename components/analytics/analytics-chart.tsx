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

// Format YYYYMMDD → DD-MM-YYYY
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
  const [error, setError] = useState(false);

  // Fetch and process analytics data
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      await Promise.resolve();
      if (controller.signal.aborted) return;
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          `/api/analytics?metric=${metric}&range=${timeRange}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error(`Analytics request failed: ${response.status}`);

        const json: unknown = await response.json();
        if (!Array.isArray(json)) throw new Error("Invalid analytics response");

        const sortedData = json
          .filter(
            (item): item is { date: string; value: string | number } =>
              typeof item === "object" &&
              item !== null &&
              typeof item.date === "string" &&
              (typeof item.value === "string" || typeof item.value === "number")
          )
          .map((item) => ({
            date: item.date,
            value: Number(item.value),
          }))
          .sort((a, b) => Number(a.date) - Number(b.date));

        setData(sortedData);
      } catch (err) {
        if (!controller.signal.aborted) {
          console.error("Error fetching analytics:", err);
          setData([]);
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [metric, timeRange]);

  return (
    <Card className="w-full max-w-3xl p-4 rounded-2xl shadow-xl bg-white transform transition duration-200 hover:scale-102 hover:shadow-lg active:scale-102 active:shadow-lg">
      {/* Header with title and time-range selector */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#ff9e3d]">{title}</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
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

      {/* Chart or Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-48 text-[#ff9e3d]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : error ? (
        <div role="status" className="flex h-48 items-center justify-center text-sm text-red-600">
          Analytics data is currently unavailable.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={formatDate} />
            <YAxis />
            <Tooltip
              formatter={(value) => [
                typeof value === "number" ? value : String(value ?? ""),
                title,
              ]}
              labelFormatter={(label) => formatDate(String(label ?? ""))}
            />
            <Bar dataKey="value" fill="#ff9e3d" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </Card>
  );
}
