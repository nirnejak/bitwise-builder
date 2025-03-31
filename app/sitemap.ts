import { MetadataRoute } from "next"

import config from "@/config"

const { baseUrl } = config

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    {
      url: baseUrl + "/",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: baseUrl + "/services/",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: baseUrl + "/contact-us/",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]

  return staticRoutes
}
