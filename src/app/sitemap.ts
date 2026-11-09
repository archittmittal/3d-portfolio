import type { MetadataRoute } from "next";
import { config } from "@/data/config";
import { getBlogPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();

  const latestPostDate = posts.reduce<Date | undefined>((latest, post) => {
    const date = new Date(post.metadata.publishedAt);
    if (isNaN(date.getTime())) return latest;
    return !latest || date > latest ? date : latest;
  }, undefined);

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${config.site}/blogs/${post.slug}`,
    lastModified: post.metadata.publishedAt
      ? new Date(post.metadata.publishedAt)
      : undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: config.site,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${config.site}/blogs`,
      lastModified: latestPostDate ?? new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
