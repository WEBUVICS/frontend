"use client";

import AnalyticsCard from "@/components/analytics/analytics-card";
import { Users, User, MousePointerClick, UserPlus } from "lucide-react";
import AnalyticsChart from "@/components/analytics/analytics-chart";

export default function Dashboard() {
  return (
    <div className="p-6 flex flex-wrap gap-6">
      {/* Cards */}
      <div className="flex flex-wrap gap-6 w-full">
        <div className="flex-1 min-w-[250px]">
          <AnalyticsCard
            metric="activeUsers"
            label="Orang"
            title="Pengunjung Setiap Hari (hari ini)"
            timeRange="today"
            icon={<User />}
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <AnalyticsCard
            metric="realtimeUsers"
            label="Orang"
            title="Live Pengunjung"
            timeRange="real-time"
            icon={<UserPlus />}
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <AnalyticsCard
            metric="totalUsers"
            label="Orang"
            title="Total Pengunjung"
            timeRange="all-time"
            icon={<Users />}
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <AnalyticsCard
            metric="screenPageViews"
            label="Views"
            title="Page Views"
            timeRange="all-time"
            icon={<MousePointerClick />}
          />
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full">
        <AnalyticsChart metric="activeUsers" title="Jumlah Pengunjung" />
      </div>
    </div>
  );
}
