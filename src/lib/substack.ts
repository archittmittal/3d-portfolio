export type SubstackPost = {
  title: string;
  link: string;
  slug: string;
  pubDate: string;
  publishedAt: string;
  summary: string;
  author: string;
  coverImage?: string | null;
  source: "substack";
};

const SUBSTACK_FEED_URL = "https://architmittal1.substack.com/feed";

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch(SUBSTACK_FEED_URL, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
      },
    });

    if (!res.ok) {
      console.error(`Failed to fetch Substack RSS feed: ${res.status}`);
      return [];
    }

    const xml = await res.text();
    const items: SubstackPost[] = [];
    const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

    for (const itemXml of itemMatches) {
      const titleMatch =
        itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) ||
        itemXml.match(/<title>(.*?)<\/title>/);
      const linkMatch = itemXml.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = itemXml.match(/<pubDate>(.*?)<\/pubDate>/);
      const descMatch =
        itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) ||
        itemXml.match(/<description>([\s\S]*?)<\/description>/);
      const creatorMatch =
        itemXml.match(/<dc:creator><!\[CDATA\[(.*?)\]\]><\/dc:creator>/) ||
        itemXml.match(/<dc:creator>(.*?)<\/dc:creator>/);
      const enclosureMatch = itemXml.match(/<enclosure[^>]+url="([^"]+)"/);

      // Clean HTML entities and tags from description
      const rawDesc = descMatch ? descMatch[1] : "";
      const cleanDesc = rawDesc
        .replace(/<[^>]*>?/gm, "")
        .replace(/&#8217;/g, "'")
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')
        .replace(/&#8212;/g, "—")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .trim();

      const link = linkMatch ? linkMatch[1].trim() : "";
      const urlParts = link.split("/p/");
      const slug = urlParts.length > 1 ? urlParts[1].replace(/\/$/, "") : link;

      const rawPubDate = pubDateMatch ? pubDateMatch[1].trim() : "";
      let formattedDate = rawPubDate;
      try {
        if (rawPubDate) {
          const d = new Date(rawPubDate);
          formattedDate = d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
        }
      } catch {
        formattedDate = rawPubDate;
      }

      items.push({
        title: titleMatch
          ? titleMatch[1]
              .replace(/&#8217;/g, "'")
              .replace(/&#8220;/g, '"')
              .replace(/&#8221;/g, '"')
              .replace(/&amp;/g, "&")
              .trim()
          : "Untitled Post",
        link,
        slug,
        pubDate: rawPubDate,
        publishedAt: formattedDate,
        summary: cleanDesc,
        author: creatorMatch ? creatorMatch[1].trim() : "Archit Mittal",
        coverImage: enclosureMatch ? enclosureMatch[1] : null,
        source: "substack",
      });
    }

    return items;
  } catch (error) {
    console.error("Error fetching Substack posts:", error);
    return [];
  }
}
