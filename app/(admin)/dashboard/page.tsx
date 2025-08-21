"use client";

import AnalyticsCard from "@/components/analytics/analytics-card";
import { Users, UserPlus, MousePointerClick } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <AnalyticsCard
        metric="activeUsers"
        label="Orang"
        title="Pengunjung Setiap Hari (hari ini)"
        timeRange="today"
        icon={<Users />}
      />
      <AnalyticsCard
        metric="screenPageViews"
        label="Views"
        title="Page Views"
        timeRange="all-time"
        icon={<UserPlus />}
      />
      <AnalyticsCard
        metric="totalUsers"
        label="Pengunjung (all-time)"
        title="Total Pengunjung"
        timeRange="all-time"
        icon={<MousePointerClick />}
      />
    </div>
  );
}
