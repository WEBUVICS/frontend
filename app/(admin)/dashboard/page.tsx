"use client";

import AnalyticsCard from "@/components/analytics/analytics-card";
import { Users, User, MousePointerClick, UserPlus } from "lucide-react";
import AnalyticsChart from "@/components/analytics/analytics-chart";

export default function Dashboard() {
  return (
    <div className="p-6 flex flex-col items-center">
      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        <div className="flex-1 min-w-[250px] max-w-[300px]">
          <AnalyticsCard
            metric="activeUsers"
            label="Orang"
            title="Jumlah Pengunjung (hari ini)"
            timeRange="today"
            icon={<User />}
          />
        </div>

        <div className="flex-1 min-w-[250px] max-w-[300px]">
          <AnalyticsCard
            metric="realtimeUsers"
            label="Orang"
            title="Jumlah Pengunjung (Live)"
            timeRange="real-time"
            icon={<UserPlus />}
          />
        </div>

        <div className="flex-1 min-w-[250px] max-w-[300px]">
          <AnalyticsCard
            metric="totalUsers"
            label="Orang"
            title="Total Pengunjung"
            timeRange="all-time"
            icon={<Users />}
          />
        </div>

        <div className="flex-1 min-w-[250px] max-w-[300px]">
          <AnalyticsCard
            metric="screenPageViews"
            label="Views"
            title="Total View"
            timeRange="all-time"
            icon={<MousePointerClick />}
          />
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full flex justify-center mt-6">
        <div className="w-full md:w-3/4 lg:w-2/3">
          <AnalyticsChart metric="activeUsers" title="Jumlah Pengunjung" />
        </div>
      </div>
    </div>
  );
}
