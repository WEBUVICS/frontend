import { BetaAnalyticsDataClient } from "@google-analytics/data";
import "server-only";

export class AnalyticsConfigurationError extends Error {}

let analyticsClient: BetaAnalyticsDataClient | undefined;

function getAnalyticsClient() {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const clientEmail = process.env.GA4_CLIENT_EMAIL;
  const privateKey = process.env.GA4_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!propertyId || !clientEmail || !privateKey) {
    throw new AnalyticsConfigurationError(
      "GA4 server configuration is incomplete."
    );
  }

  analyticsClient ??= new BetaAnalyticsDataClient({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
  });

  return { analyticsClient, propertyId };
}

// Fetch historical GA4 data
export async function getGA4Data(
  metric: string,
  dateRange: { startDate: string; endDate: string }
) {
  const { analyticsClient, propertyId } = getAnalyticsClient();
  const [response] = await analyticsClient.runReport({
    property: `properties/${propertyId}`,
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

// Fetch real-time active users
export async function getRealtimeUsers() {
  const { analyticsClient, propertyId } = getAnalyticsClient();
  const [response] = await analyticsClient.runRealtimeReport({
    property: `properties/${propertyId}`,
    metrics: [{ name: "activeUsers" }],
  });

  return response?.rows?.[0]?.metricValues?.[0]?.value || "0";
}
