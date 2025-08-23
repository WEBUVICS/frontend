"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

type AnalyticsData = {
  date: string;
  value: string;
};

type AnalyticsCardProps = {
  metric: string; // e.g. "activeUsers"
  label: string; // e.g. "Orang"
  title: string; // e.g. "Pengunjung Setiap Hari (hari ini)"
  timeRange?: "today" | "7days" | "30days" | "all-time";
  icon?: React.ReactNode; // pass Lucide icon
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

  useEffect(() => {
    fetch(`/api/analytics?metric=${metric}&range=${timeRange}`)
      .then((res) => res.json())
      .then((json: AnalyticsData[]) => setData(json))
      .catch((err) => console.error("Error fetching analytics:", err))
      .finally(() => setLoading(false));
  }, [metric, timeRange]);

  // Calculate the sum of all values
  const total = data.reduce((sum, item) => sum + Number(item.value || 0), 0);

  return (
    <Card className="w-full max-w-sm p-4 rounded-2xl shadow-xl bg-white flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg">
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
