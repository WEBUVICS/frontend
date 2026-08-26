import type { MetadataRoute } from "next";
import { mockData } from "@/app/(user)/showcase/mockData";
import { siteUrl } from "@/lib/site";

const publicRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/media", changeFrequency: "weekly", priority: 0.8 },
  { path: "/showcase", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faqs", changeFrequency: "monthly", priority: 0.6 },
  { path: "/department/batch1", changeFrequency: "monthly", priority: 0.7 },
  { path: "/department/batch2", changeFrequency: "monthly", priority: 0.7 },
  { path: "/department/batch3", changeFrequency: "monthly", priority: 0.7 },
  { path: "/department/batch4", changeFrequency: "monthly", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: new URL(route.path || "/", siteUrl).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const showcasePages: MetadataRoute.Sitemap = mockData.map((project) => ({
    url: new URL(`/showcase/${project.id}`, siteUrl).toString(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...showcasePages];
}
