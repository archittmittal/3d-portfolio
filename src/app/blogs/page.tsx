import React from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";
import { getSubstackPosts } from "@/lib/substack";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ExternalLink, User } from "lucide-react";
import { SiSubstack } from "react-icons/si";
import RevealAnimation from "@/components/reveal-animations";
import { config } from "@/data/config";

export const revalidate = 3600; // Auto-revalidate every hour for fresh Substack posts

export const metadata = {
  title: "Blog | Archit Mittal",
  description: "Thoughts, engineering essays, and updates synced with Substack.",
};

type UnifiedPost = {
  id: string;
  title: string;
  link: string;
  isExternal: boolean;
  publishedAt: string;
  dateValue: number;
  summary: string;
  author: string;
  tag: string;
};

export default async function BlogPage() {
  // Fetch live Substack articles
  const substackPosts = await getSubstackPosts();

  // Fetch local MDX blog posts
  const localMdxPosts = getBlogPosts();

  const formattedSubstackPosts: UnifiedPost[] = substackPosts.map((post) => ({
    id: `substack-${post.slug}`,
    title: post.title,
    link: post.link,
    isExternal: true,
    publishedAt: post.publishedAt,
    dateValue: new Date(post.pubDate || 0).getTime(),
    summary: post.summary,
    author: post.author || "Archit Mittal",
    tag: "Substack",
  }));

  const formattedLocalPosts: UnifiedPost[] = localMdxPosts.map((post) => ({
    id: `local-${post.slug}`,
    title: post.metadata.title,
    link: `/blogs/${post.slug}`,
    isExternal: false,
    publishedAt: post.metadata.publishedAt,
    dateValue: new Date(post.metadata.publishedAt || 0).getTime(),
    summary: post.metadata.summary,
    author: post.metadata.author || "Archit Mittal",
    tag: post.metadata.tags?.[0] || "Blog",
  }));

  // Merge and sort newest first
  const allPosts = [...formattedSubstackPosts, ...formattedLocalPosts].sort(
    (a, b) => b.dateValue - a.dateValue
  );

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen font-sans">
      <RevealAnimation>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
          Space Log
        </h1>
        <p className="text-zinc-400 text-center mb-6 max-w-2xl mx-auto">
          Documenting my journey through the cosmos of software, systems, and AI.
        </p>

        {config.social.substack && (
          <div className="flex justify-center mb-12">
            <Link
              href={config.social.substack}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="flex items-center gap-2 border-orange-500/30 hover:border-orange-500/70 text-orange-400 hover:text-orange-300 bg-orange-950/20"
              >
                <SiSubstack className="w-4 h-4" />
                <span>Subscribe on Substack</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>
        )}
      </RevealAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.map((post, index) => (
          <RevealAnimation key={post.id} delay={index * 0.08}>
            <Link
              href={post.link}
              target={post.isExternal ? "_blank" : "_self"}
              rel={post.isExternal ? "noopener noreferrer" : undefined}
              className="h-full block"
            >
              <Card className="h-full bg-black/40 border-zinc-800 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group overflow-hidden flex flex-col justify-between">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <Badge
                      variant="outline"
                      className={
                        post.isExternal
                          ? "border-orange-500/40 text-orange-400 bg-orange-950/30 flex items-center gap-1"
                          : "border-purple-500/30 text-purple-400"
                      }
                    >
                      {post.isExternal && <SiSubstack className="w-3 h-3" />}
                      {post.tag}
                    </Badge>
                    <span className="text-xs text-zinc-500 flex items-center gap-1 whitespace-nowrap">
                      <CalendarDays className="w-3 h-3" />
                      {post.publishedAt}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-400 transition-colors flex items-start justify-between gap-2">
                    <span>{post.title}</span>
                    {post.isExternal && (
                      <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 shrink-0 mt-1 transition-colors" />
                    )}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-zinc-400 text-sm mt-2">
                    {post.summary}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-4 border-t border-zinc-900">
                  <div className="flex items-center justify-between w-full text-xs text-zinc-500">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span>
                    </div>
                    {post.isExternal && (
                      <span className="text-orange-400/80 group-hover:text-orange-400 font-mono text-[11px] flex items-center gap-1">
                        Read on Substack &rarr;
                      </span>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
}
