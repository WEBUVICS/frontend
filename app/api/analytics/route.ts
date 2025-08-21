import { NextResponse } from "next/server";
import { getGA4Data } from "@/lib/analytics";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const metric = searchParams.get("metric") || "activeUsers";
  const range = searchParams.get("range") || "today";

  let dateRange;
  const today = new Date().toISOString().split("T")[0];

  switch (range) {
    case "7days":
      dateRange = { startDate: "7daysAgo", endDate: "today" };
      break;
    case "30days":
      dateRange = { startDate: "30daysAgo", endDate: "today" };
      break;
    case "all-time":
      dateRange = { startDate: "2020-01-01", endDate: "today" };
      break;
    case "today":
      dateRange = { startDate: today, endDate: today };
      break;
    default:
      dateRange = { startDate: "7daysAgo", endDate: "today" };
  }

  console.log("Fetching GA4 Data:", { metric, dateRange });

  try {
    const data = await getGA4Data(metric, dateRange);
    return NextResponse.json(data);
  } catch (error) {
    console.error("GA4 fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 }
    );
  }
}
