"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { getRealtimeUsers } from "@/lib/analytics";

type AnalyticsData = {
  date: string;
  value: string;
};

type AnalyticsCardProps = {
  metric: string; // e.g. "activeUsers" or "realtimeUsers"
  label: string; // e.g. "Orang"
  title: string; // e.g. "Pengunjung Setiap Hari (hari ini)"
  timeRange?: "today" | "7days" | "30days" | "all-time" | "real-time";
  icon?: React.ReactNode;
};

export default function AnalyticsCard({
  metric,
  label,
  title,
  timeRange = "today",
  icon,
}: AnalyticsCardProps) {
  const [data, setData] = useState<AnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [liveCount, setLiveCount] = useState<string>("0");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // For real-time metric
    if (metric === "realtimeUsers" || timeRange === "real-time") {
      const fetchLive = async () => {
        try {
          const users = await getRealtimeUsers();
          setLiveCount(users);
        } catch (err) {
          console.error("Error fetching live users:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchLive();
      interval = setInterval(fetchLive, 10000);

      return () => clearInterval(interval);
    }

    // For historical data
    fetch(`/api/analytics?metric=${metric}&range=${timeRange}`)
      .then((res) => res.json())
      .then((json: AnalyticsData[]) => setData(json))
      .catch((err) => console.error("Error fetching analytics:", err))
      .finally(() => setLoading(false));
  }, [metric, timeRange]);

  const total =
    metric === "realtimeUsers" || timeRange === "real-time"
      ? liveCount
      : data.reduce((sum, item) => sum + Number(item.value || 0), 0);

  return (
    <Card className="w-full max-w-sm p-4 rounded-2xl shadow-xl bg-white flex flex-col justify-between transform transition duration-200 hover:scale-110 hover:shadow-lg active:scale-110 active:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-3xl font-bold text-[#ff9e3d]">
            {loading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              total || "-"
            )}
          </div>
          <div className="text-sm text-[#ff9e3d]">{label}</div>
        </div>

        {icon && (
          <span className="h-16 w-16 flex items-center justify-center [&>svg]:h-full [&>svg]:w-full text-[#ff9e3d]">
            {icon}
          </span>
        )}
      </div>

      <div className="mt-4 text-sm font-semibold text-[#ff9e3d]">{title}</div>
    </Card>
  );
}
