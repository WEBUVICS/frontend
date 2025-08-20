"use client";

import AnalyticsCard from "@/components/analytics/analytics-card";
export default function Dashboard() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <AnalyticsCard />
      <AnalyticsCard />
    </div>
  );
}
