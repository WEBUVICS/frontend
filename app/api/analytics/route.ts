import { NextResponse } from "next/server";
import {
  AnalyticsConfigurationError,
  getGA4Data,
  getRealtimeUsers,
} from "@/lib/analytics";
import { isAdminPreviewEnabled } from "@/lib/admin-preview";

const allowedMetrics = new Set([
  "activeUsers",
  "totalUsers",
  "screenPageViews",
  "realtimeUsers",
]);

const dateRanges = {
  today: { startDate: "today", endDate: "today" },
  "7days": { startDate: "7daysAgo", endDate: "today" },
  "30days": { startDate: "30daysAgo", endDate: "today" },
  "all-time": { startDate: "2020-01-01", endDate: "today" },
} as const;

/**
 * @swagger
 * /api/analytics:
 *   get:
 *     tags:
 *       - Analytics
 *     summary: Get analytics data from GA4
 *     parameters:
 *       - in: query
 *         name: metric
 *         required: false
 *         schema:
 *           type: string
 *           example: activeUsers
 *       - in: query
 *         name: range
 *         required: false
 *         schema:
 *           type: string
 *           enum: [today, 7days, 30days, all-time]
 *           example: today
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 metric:
 *                   type: string
 *                   example: activeUsers
 *                 value:
 *                   type: number
 *                   example: 157
 */

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const metric = searchParams.get("metric") || "activeUsers";
  const range = searchParams.get("range") || "today";

  if (!allowedMetrics.has(metric)) {
    return NextResponse.json(
      { error: "Metric analytics tidak didukung." },
      { status: 400 }
    );
  }

  if (metric !== "realtimeUsers" && !(range in dateRanges)) {
    return NextResponse.json(
      { error: "Rentang waktu analytics tidak didukung." },
      { status: 400 }
    );
  }

  if (!isAdminPreviewEnabled()) {
    return NextResponse.json(
      { error: "Analytics admin tidak tersedia." },
      { status: 404 }
    );
  }

  try {
    if (metric === "realtimeUsers") {
      const value = await getRealtimeUsers();
      return NextResponse.json(
        [{ date: "realtime", value }],
        { headers: { "Cache-Control": "private, no-store" } }
      );
    }

    const data = await getGA4Data(
      metric,
      dateRanges[range as keyof typeof dateRanges]
    );
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "private, max-age=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    if (error instanceof AnalyticsConfigurationError) {
      return NextResponse.json(
        {
          error:
            "Analytics belum dikonfigurasi. Lengkapi environment variable GA4 di server.",
        },
        { status: 503 }
      );
    }

    console.error("GA4 fetch error:", error);
    return NextResponse.json(
      { error: "Layanan analytics sedang tidak dapat dijangkau." },
      { status: 502 }
    );
  }
}
