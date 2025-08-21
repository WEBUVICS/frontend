import { BetaAnalyticsDataClient } from "@google-analytics/data";

const analyticsClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA4_CLIENT_EMAIL,
    private_key: process.env.GA4_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
});

export async function getGA4Data(
  metric: string,
  dateRange: { startDate: string; endDate: string }
) {
  const [response] = await analyticsClient.runReport({
    property: `properties/${process.env.GA4_PROPERTY_ID}`,
    dateRanges: [dateRange],
    metrics: [{ name: metric }],
    dimensions: [{ name: "date" }],
  });

  return (
    response.rows?.map((row) => ({
      date: row.dimensionValues?.[0]?.value ?? "",
      value: row.metricValues?.[0]?.value ?? "0",
    })) || []
  );
}
