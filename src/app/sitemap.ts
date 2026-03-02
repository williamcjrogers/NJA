import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/content";
import services from "@/data/services.json";
import sectors from "@/data/sectors.json";

const SITE_URL = "https://nicolasjames.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/sectors",
    "/case-studies",
    "/about",
    "/about/team",
    "/about/fleet",
    "/work-with-us",
    "/news",
    "/contact",
    "/privacy",
    "/accessibility",
  ];

  const serviceSlugs = services.map((s) => `/services/${s.slug}`);
  const sectorSlugs = sectors.map((s) => `/sectors/${s.slug}`);
  const caseStudySlugs = getAllSlugs("case-studies").map((s) => `/case-studies/${s}`);
  const newsSlugs = getAllSlugs("news").map((s) => `/news/${s}`);

  const allPaths = [...staticPages, ...serviceSlugs, ...sectorSlugs, ...caseStudySlugs, ...newsSlugs];

  return allPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
