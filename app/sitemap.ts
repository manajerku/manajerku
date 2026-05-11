import { MetadataRoute } from "next";
import { products } from "@/data/DataProduct";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://manajerku.store";

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    ...productUrls,
  ];
}
