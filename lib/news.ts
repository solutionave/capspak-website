
export interface NewsItem {
  id: string;
  title: string;
  date: string; // ISO or human date (e.g., "2025-07-18" or "July 18, 2025")
  href?: string;
  tag?: string;
  image?: string;    // NEW
  imageAlt?: string; // NEW
}

const news: NewsItem[] = [
  {
    id: "Pakistan and China agreed to boost agricultural cooperation.",
    title: "Pakistan and China agreed to boost agricultural cooperation.",
    date: "July 18, 2025",
    href: "https://thedailycpec.com/pakistan-invites-chinese-firms-to-invest-in-agri-sector/",
    tag: "Analysis",
    image: "/Assets/NewsImages/1.jpg",
    imageAlt: "IMG_Pakistan and China agriculture cooperation",
  },
  {
    id: "The first batch of 300 Pakistani graduates completed advanced agriculture training in China.",
    title: "The first batch of 300 Pakistani graduates completed advanced agriculture training in China.",
    date: "August 15, 2025",
    href: "https://www.arabnews.com/node/2608529/pakistan",
    tag: "Analysis",
    image: "/Assets/NewsImages/2.jpg",
    imageAlt: "IMG_The first batch of 300 Pakistani graduates completed advanced agriculture training in China.",
  },
  {
    id: "Pakistan, South Korea explore tech and digital cooperation. ",
    title: "Pakistan, South Korea explore tech and digital cooperation. ",
    date: "August 15, 2025",
    href: "https://www.app.com.pk/national/pakistan-korea-discuss-enhanced-cooperation-in-technology-skills-development/",
    tag: "Analysis",
    image: "/Assets/NewsImages/3.jpg",
    imageAlt: "IMG_Pakistan, South Korea explore tech and digital cooperation.",
  },
  {
    id: "Vietnam proposes deepening cultural ties with Pakistan, focus on Buddhist Heritage.",
    title: "Vietnam proposes deepening cultural ties with Pakistan, focus on Buddhist Heritage.",
    date: "July 18, 2025",
    href: "https://www.app.com.pk/national/vietnam-proposes-cultural-collaboration-with-pakistan-to-promote-buddhist-heritage/#:~:text=The%20significance%20of%20this%20partnership,Buddhist%20heritage%20from%20various%20dynasties.",
    tag: "Analysis",
    image: "/Assets/NewsImages/4.jpeg",
    imageAlt: "IMG_Vietnam proposes deepening cultural ties with Pakistan, focus on Buddhist Heritage.",
  },
];

export function getNews(): NewsItem[] {
  return news;
}

export function getRecentNews(limit?: number): NewsItem[] {
  const monthToIndex: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  function parseNewsDate(dateString: string): number {
    // ISO YYYY-MM-DD
    const iso = /^(\d{4})-(\d{2})-(\d{2})$/;
    const isoMatch = dateString.match(iso);
    if (isoMatch) {
      const year = Number(isoMatch[1]);
      const month = Number(isoMatch[2]) - 1;
      const day = Number(isoMatch[3]);
      return Date.UTC(year, month, day);
    }

    // Month DD, YYYY (English)
    const long = /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s*(\d{4})$/i;
    const longMatch = dateString.match(long);
    if (longMatch) {
      const monthName = longMatch[1].toLowerCase();
      const day = Number(longMatch[2]);
      const year = Number(longMatch[3]);
      const monthIndex = monthToIndex[monthName];
      if (monthIndex >= 0) return Date.UTC(year, monthIndex, day);
    }

    // Fallback: native parser
    const t = Date.parse(dateString);
    return Number.isFinite(t) ? t : 0;
  }

  const arr = [...news].sort((a, b) => parseNewsDate(b.date) - parseNewsDate(a.date));
  return typeof limit === "number" ? arr.slice(0, limit) : arr;
}
