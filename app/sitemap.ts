import type { MetadataRoute } from "next";

const SITE = "https://www.amandamiss.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/patrocinio`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
