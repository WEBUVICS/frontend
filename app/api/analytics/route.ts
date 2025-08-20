// app/api/analytics/route.ts

import { NextResponse } from "next/server";
import { getGA4Data } from "@/lib/analytics";

export async function GET() {
  try {
    const data = await getGA4Data();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 }
    );
  }
}
