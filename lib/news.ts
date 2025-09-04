
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
    id: "1",
    title: "Pakistan and China agreed to boost agricultural cooperation.",
    date: "July 18, 2025",
    href: "https://thedailycpec.com/pakistan-invites-chinese-firms-to-invest-in-agri-sector/",
    tag: "Analysis",
    image: "/Assets/NewsImages/1.jpg",
    imageAlt: "IMG_Pakistan and China agriculture cooperation",
  },
  {
    id: "2",
    title: "The first batch of 300 Pakistani graduates completed advanced agriculture training in China.",
    date: "August 15, 2025",
    href: "https://www.arabnews.com/node/2608529/pakistan",
    tag: "Analysis",
    image: "/Assets/NewsImages/2.jpg",
    imageAlt: "IMG_The first batch of 300 Pakistani graduates completed advanced agriculture training in China.",
  },
  {
    id: "3",
    title: "Pakistan, South Korea explore tech and digital cooperation. ",
    date: "August 15, 2025",
    href: "https://www.app.com.pk/national/pakistan-korea-discuss-enhanced-cooperation-in-technology-skills-development/",
    tag: "Analysis",
    image: "/Assets/NewsImages/3.jpg",
    imageAlt: "IMG_Pakistan, South Korea explore tech and digital cooperation.",
  },
  {
    id: "4",
    title: "Vietnam proposes deepening cultural ties with Pakistan, focus on Buddhist Heritage.",
    date: "July 18, 2025",
    href: "https://www.app.com.pk/national/vietnam-proposes-cultural-collaboration-with-pakistan-to-promote-buddhist-heritage/#:~:text=The%20significance%20of%20this%20partnership,Buddhist%20heritage%20from%20various%20dynasties.",
    tag: "Analysis",
    image: "/Assets/NewsImages/4.jpeg",
    imageAlt: "IMG_Vietnam proposes deepening cultural ties with Pakistan, focus on Buddhist Heritage.",
  },
  {
    id: "5",
    title: "China ready to build upgraded version of CPEC, Xi tells Shehbaz",
    date: "Sep 03, 2025",
    href: "https://www.nation.com.pk/03-Sep-2025/china-ready-to-build-upgraded-version-of-cpec-xi-tells-shehbaz",
    tag: "Analysis",
    image: "/Assets/NewsImages/china-pak.jpg",
    imageAlt: "IMG_China ready to build upgraded version of CPEC, Xi tells Shehbaz",
  },
    {
    id: "6",
    title: "SK Hydropower Station showcased at SCO Summit 2025 as model of China-Pakistan Cooperation",
    date: "Sep 03, 2025",
    href: "https://www.app.com.pk/national/sk-hydropower-station-showcased-at-sco-summit-2025-as-model-of-china-pakistan-cooperation/",
    tag: "Analysis",
    image: "/Assets/NewsImages/hydropower.jpg",
    imageAlt: "IMG_SK Hydropower Station showcased at SCO Summit 2025 as model of China-Pakistan Cooperation",
  },
   {
    id: "7",
    title: "Honorary Japan CG calls on Governor Balochistan.",
    date: "Sep 02, 2025",
    href: "https://www.dailyindependent.com.pk/2025/09/02/honorary-japan-cg-calls-on-governor-balochistan/",
    tag: "Analysis",
    image: "/Assets/NewsImages/honory.jpg",
    imageAlt: "IMG_Honorary Japan CG calls on Governor Balochistan.",
  },
  {
    id: "8",
    title: "PM raises Indus Waters Treaty issue at SCO",
    date: "Sep 03, 2025",
    href: "https://tribune.com.pk/story/2564580/pm-raises-indus-waters-treaty-issue-at-sco",
    tag: "Analysis",
    image: "/Assets/NewsImages/pm.jpg",
    imageAlt: "IMG_PM raises Indus Waters Treaty issue at SCO",
  },
  
  {
    id: "9",
    title: "Pakistan’s FCCI business delegation visits Expo 2025 Osaka",
    date: "Sep 1, 2025",
    href: "https://www.brecorder.com/news/40380603/pakistans-fcci-business-delegation-visits-expo-2025-osaka",
    tag: "Analysis",
    image: "/Assets/NewsImages/osaka.jpg",
    imageAlt: "IMG_Pakistan’s FCCI business delegation visits Expo 2025 Osaka",
  },
  {
    id: "10",
    title: "Pakistani-origin MP Bisma Asif denounces reclaim Australia rally",
    date: "Aug 31, 2025",
    href: "https://www.theaustraliatoday.com.au/speaking-urdu-in-queensland-parliament-pakistani-origin-mp-bisma-asif-denounces-reclaim-australia-rally/",
    tag: "Analysis",
    image: "/Assets/NewsImages/bisma_asif.jpg",
    imageAlt: "IMG_Pakistani-origin MP Bisma Asif denounces reclaim Australia rally",
  },
  
{
    id: "11",
    title: "Alibaba strengthens presence in Pakistan.",
    date: "Aug 28, 2025",
    href: "https://www.app.com.pk/foreign-correspondent/alibaba-strengthens-its-presence-in-pakistans-digital-economy/#:~:text=BEIJING%2C%20Aug.,support%20local%20businesses%20and%20consumers.",
    tag: "Analysis",
    image: "/Assets/NewsImages/alibaba.jpg",
    imageAlt: "IMG_Alibaba strengthens presence in Pakistan.",
  },
  {
    id: "12",
    title: "Pakistan welcomes Japan Bank’s interest in Reqo Diq project",
    date: "Sep 1, 2025",
    href: "https://www.brecorder.com/news/40380163/pakistan-welcomes-japan-banks-interest-in-reqo-diq-project;",
    tag: "Analysis",
    image: "/Assets/NewsImages/raqodiq.jpg",
    imageAlt: "IMG_Pakistan welcomes Japan Bank’s interest in Reqo Diq project",
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
