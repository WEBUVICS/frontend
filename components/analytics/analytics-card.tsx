"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

type AnalyticsData = {
  date: string;
  activeUsers: string;
};

export default function AnalyticsCard() {
  const [today, setToday] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => res.json())
      .then((json: AnalyticsData[]) => {
        const latest = json[json.length - 1] || null;
        setToday(latest);
      })
      .catch((err) => console.error("Error fetching analytics:", err));
  }, []);

  return (
    <Card className="w-full max-w-sm p-5 rounded-xl shadow-xl bg-white flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-5xl font-bold text-[#ff9f3c]">
            {today?.activeUsers ?? "-"}
          </div>
          <div className="text-xl text-[#ff9f3c]">Orang</div>
        </div>
        <Users className="h-15 w-15 text-[#ff9f3c]" />
      </div>

      <div className="mt-4 text-md font-bold text-[#ff9f3c]">
        Pengunjung Setiap Hari <br />
        <span className="font-bold">(hari ini)</span>
      </div>
    </Card>
  );
}
