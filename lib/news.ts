
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
    id: "55",
    title: "Japan provides Rs32m grant assistance to 2 NGOs for development projects in Pakistan.",
    date: "Oct 8, 2025",
    href: "https://www.pk.emb-japan.go.jp/itpr_ja/11_000001_00572.html",
    tag: "Analysis",
    image: "/Assets/NewsImages/japan assistance.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "54",
    title: "Pakistan PM accorded official welcoming ceremony in Malaysia",
    date: "Oct 6, 2025",
    href: "https://asianews.network/pakistan-pm-accorded-official-welcoming-ceremony-in-malaysia/",
    tag: "Analysis",
    image: "/Assets/NewsImages/welcome.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "53",
    title: "PM Shehbaz lands in Kuala Lumpur for three-day Malaysia visit",
    date: "Oct 5, 2025",
    href: "https://www.geo.tv/latest/627032-pm-shehbaz-leaves-for-malaysia-to-deepen-trade-investment-ties",
    tag: "Analysis",
    image: "/Assets/NewsImages/kuala.webp",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
    {
    id: "52",
    title: "Dates Announced for Japanese Language Proficiency Test for Japan Work Visa",
    date: "Oct 4, 2025",
    href: "https://propakistani.pk/2025/10/04/dates-announced-for-japanese-language-proficiency-test-for-japan-work-visa/",
    tag: "Analysis",
    image: "/Assets/NewsImages/japanese test.avif",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "51",
    title: "Pakistan Expresses Solidarity with Philippines, Indonesia Following Devastating Earthquakes",
    date: "Oct 3, 2025",
    href: "https://thediplomaticinsight.com/pak-expresses-solidarity-with-indonesia-philippines-after-quakes/",
    tag: "Analysis",
    image: "/Assets/NewsImages/phillipines.webp",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "50",
    title: "Pakistan outplays New Zealand in ATF 12 & under championships",
    date: "Oct 3, 2025",
    href: "https://tribune.com.pk/story/2570126/pakistan-outplays-new-zealand-in-atf-12-under-championships",
    tag: "Analysis",
    image: "/Assets/NewsImages/atf.webp",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "49",
    title: "Pakistani, Malaysian leaders discuss Trump's Gaza ceasefire plan, counterterrorism",
    date: "Oct 7, 2025",
    href: "https://www.aa.com.tr/en/asia-pacific/pakistani-malaysian-leaders-discuss-trumps-gaza-ceasefire-plan-counterterrorism-/3708524",
    tag: "Analysis",
    image: "/Assets/NewsImages/gaza ceasefire.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "48",
    title: "Malaysia, Pakistan to deepen cooperation in defence, aviation, healthcare and cybersecurity",
    date: "Oct 7, 2025",
    href: "https://www.malaymail.com/news/malaysia/2025/10/06/malaysia-pakistan-to-deepen-cooperation-in-defence-aviation-healthcare-and-cybersecurity/193641",
    tag: "Analysis",
    image: "/Assets/NewsImages/malay and pak.jfif",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "47",
    title: "Pakistan explores mining opportunities with Australia, Finland",
    date: "Oct 2, 2025",
    href: "https://profit.pakistantoday.com.pk/2025/10/01/pakistan-explores-mining-opportunities-with-australia-finland/",
    tag: "Analysis",
    image: "/Assets/NewsImages/mining.png",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "46",
    title: "Pakistan proposes China-Gwadar-Africa logistics corridor to boost maritime trade",
    date: "Oct 2, 2025",
    href: "https://www.arabnews.pk/node/2614170/pakistan",
    tag: "Analysis",
    image: "/Assets/NewsImages/gwadar.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "45",
    title: "Ahsan seeks 10,000 PhD scholarships for Pakistani students, ASEAN-level trade access under CPEC 2.0",
    date: "Sep 29, 2025",
    href: "https://www.app.com.pk/business/ahsan-seeks-10000-phd-scholarships-for-pakistani-students-asean-level-trade-access-under-cpec-2-0/",
    tag: "Analysis",
    image: "/Assets/NewsImages/ahsan.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "44",
    title: "OEC starts Japanese language course for skilled workers",
    date: "Sep 29, 2025",
    href: "https://www.nation.com.pk/29-Sep-2025/oec-starts-japanese-language-course-skilled-workers",
    tag: "Analysis",
    image: "/Assets/NewsImages/OEC.webp",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "43",
    title: "Australian High Commissioner pays farewell call on Azam Nazeer Tarar",
    date: "Sep 27, 2025",
    href: "https://www.app.com.pk/national/australian-high-commissioner-pays-farewell-call-on-azam-nazeer-tarar/",
    tag: "Analysis",
    image: "/Assets/NewsImages/azam nazeer.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "42",
    title: "Japan’s Terra Motors Enters Pakistan with Electric Three-Wheeler ‘Kyoro’",
    date: "Sep 25, 2025",
    href: "https://imrozepakistan.com/japans-terra-motors-enters-pakistan-with-electric-three-wheeler-kyoro/",
    tag: "Analysis",
    image: "/Assets/NewsImages/terra-motors.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "41",
    title: "Pakistan-Vietnam to sign PTA soon",
    date: "Sep 25, 2025",
    href: "https://moderndiplomacy.eu/2025/09/25/pakistan-vietnam-to-sign-pta-soon/",
    tag: "Analysis",
    image: "/Assets/NewsImages/vietnam-trade.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "40",
    title: "Japan shows interest in investing in Pakistan’s Reko Diq copper and gold mining project.",
    date: "Sep 24, 2025",
    href: "https://tribune.com.pk/story/2568600/japan-intends-to-invest-in-reko-diq-project",
    tag: "Analysis",
    image: "/Assets/NewsImages/japan investment.webp",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "39",
    title: "Pakistan delegation represents country at APPCED moot in Seoul, led by Senator Pervaiz Rashid.",
    date: "Sep 24, 2025",
    href: "https://www.nation.com.pk/24-Sep-2025/pak-delegation-represents-country-parliamentarians-moot-seoul",
    tag: "Analysis",
    image: "/Assets/NewsImages/pak-delegation.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "38",
    title: "China to supply high-speed train units for Islamabad-Rawalpindi service launching in March 2026",
    date: "Sep 23, 2025",
    href: "https://propakistani.pk/2025/09/23/china-to-provide-high-speed-train-units-to-pakistan/#:~:text=Special%20train%20units%20will%20be,operations%20on%20March%2023%2C%202026",
    tag: "Analysis",
    image: "/Assets/NewsImages/bullet train.avif",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "37",
    title: "Pakistani scientist in China awarded Tamgha-e-Imtiaz for agricultural innovation",
    date: "Sep 23, 2025",
    href: "http://en.ce.cn/Insight/202509/t20250922_2483411.shtml",
    tag: "Analysis",
    image: "/Assets/NewsImages/tamgha e imtiaz.png",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "36",
    title: "Gilani calls for enhancing of trade, climate cooperation with Australia",
    date: "Sep 23, 2025",
    href: "https://dailytimes.com.pk/1372527/gilani-calls-for-enhancing-of-trade-climate-cooperation-with-australia/",
    tag: "Analysis",
    image: "/Assets/NewsImages/gillani.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "35",
    title: "Vietnam, Pakistan deepen ties with new honorary consulate in Lahore",
    date: "Sep 23, 2025",
    href: "https://english.vov.vn/en/politics/vietnam-pakistan-deepen-ties-with-new-honorary-consulate-in-lahore-post1232021.vov",
    tag: "Analysis",
    image: "/Assets/NewsImages/pakistan vietnam.webp",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
 {
    id: "34",
    title: "Pakistan, China Mark 76th Anniversary With Stronger Ties",
    date: "Sep 23, 2025",
    href: "https://thedailycpec.com/pakistan-china-mark-76th-anniversary-with-stronger-ties/",
    tag: "Analysis",
    image: "/Assets/NewsImages/pak china 76th.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  //Pak related news above
  {
    id: "33",
    title: "Pakistan, China seal $601m agriculture JVs",
    date: "Sep 11, 2025",
    href: "https://tribune.com.pk/story/2566147/pakistan-china-seal-601m-agriculture-jvs",
    tag: "Analysis",
    image: "/Assets/NewsImages/pak china handshake.webp",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "32",
    title: "Australia names streets after Pakistani cities.",
    date: "Aug 7, 2025",
    href: "https://arynews.tv/australia-now-has-its-own-karachi-multan-and-quetta",
    tag: "Analysis",
    image: "/Assets/NewsImages/City.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "31",
    title: "Pakistan, Japan renew bilateral cooperation",
    date: "Sep 23, 2025",
    href: "https://www.app.com.pk/business/pakistan-japan-renew-resolve-to-enhance-bilateral-cooperation/",
    tag: "Analysis",
    image: "/Assets/NewsImages/pakistan-and-japan.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "30",
    title: "Pakistan to issue $1bn Panda bonds in Chinese capital market by December",
    date: "Sep 11, 2025",
    href: "https://www.samaa.tv/2087339088-pakistan-to-issue-1bn-in-panda-bonds-through-chinese-capital-market",
    tag: "Analysis",
    image: "/Assets/NewsImages/panda-bond.webp",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "29",
    title: "China to work with Pakistan to implement outcome of Tianjin Summit: Envoy.",
    date: "Sep 11, 2025",
    href: "https://www.nation.com.pk/11-Sep-2025/china-to-work-with-pakistan-to-implement-outcome-of-tianjin-summit-envoy",
    tag: "Analysis",
    image: "/Assets/NewsImages/pak china.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "28",
    title: "Pakistan's president to visit China today in efforts to boost economic and trade cooperation.",
    date: "Sep 12, 2025",
    href: "https://www.arabnews.com/node/2615003/pakistan",
    tag: "Analysis",
    image: "/Assets/NewsImages/visit to china.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "27",
    title: "China to Train Pakistani Engineers. ",
    date: "Sep 12, 2025",
    href: "https://propakistani.pk/2025/09/12/china-to-train-pakistani-engineers/#:~:text=Pakistan%20Engineering%20Council%20(PEC)%20has,Pakistani%20engineers%2C%20and%20Chinese%20language",
    tag: "Analysis",
    image: "/Assets/NewsImages/pak china.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "26",
    title: "PU and Chinese varsity collaborate on crop varieties, food security.",
    date: "Sep 13, 2025",
    href: "https://fees.pu.edu.pk/home/section/exam/16420",
    tag: "Analysis",
    image: "/Assets/NewsImages/crop varieties.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "25",
    title: "Pak Ambassador inaugurates Digital Pakistan Pavilion at CIFTIS.",
    date: "Sep 15, 2025",
    href: "https://www.nation.com.pk/15-Sep-2025/pak-ambassador-inaugurates-digital-pakistan-pavilion-at-ciftis-2025",
    tag: "Analysis",
    image: "/Assets/NewsImages/summit.jpeg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
  {
    id: "24",
    title: "Pakistani nursing students to get 25 scholarships in China.",
    date: "Sep 15, 2025",
    href: "https://www.nation.com.pk/15-Sep-2025/pakistani-nursing-students-to-receive-25-scholarships-in-china#:~:text=ISLAMABAD%20%2D%20The%20China%2DPakistan%20TVET,scholarships%20for%20Pakistani%20nursing%20students",
    tag: "Analysis",
    image: "/Assets/NewsImages/nursing scholarship.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
   {
    id: "23",
    title: "Pakistan-China collaboration in defence, aviation to expand",
    date: "Sep 14, 2025",
    href: "https://tribune.com.pk/story/2566801/pakistan-china-collaboration-in-defence-aviation-to-expand-president-zardari",
    tag: "Analysis",
    image: "/Assets/NewsImages/Pakistan china collaboration.webp",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
  },
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
  {
    id: "13",
    title: "Australia Announces New High Commissioner To Pakistan",
    date: "Aug 31, 2025",
    href: "https://www.nationaltribune.com.au/australia-announces-new-high-commissioner-to-pakistan-31-august/",
    tag: "Analysis",
    image: "/Assets/NewsImages/Australia High Comission.jpg",
    imageAlt: "IMG_Australia Announces New High Commissioner To Pakistan",
  },
  {
    id: "14",
    title: "Pakistan committed to deepen economic ties with Malaysia",
    date: "Aug 31, 2025",
    href: "https://www.nation.com.pk/31-Aug-2025/pakistan-committed-to-deepen-economic-ties-with-malaysia",
    tag: "Analysis",
    image: "/Assets/NewsImages/Pak_Malay.jpg",
    imageAlt: "IMG_Pakistan committed to deepen economic ties with Malaysia",
  },
  {
    id: "15",
    title: "PM Shehbaz invites Chinese businesses to invest in Pakistan",
    date: "Sep 03, 2025",
    href: "https://tribune.com.pk/story/2564871/pm-shehbaz-invites-chinese-businesses-to-invest-in-pakistan;",
    tag: "Analysis",
    image: "/Assets/NewsImages/PM Shehbaz.jpg",
    imageAlt: "IMG_PM Shehbaz invites Chinese businesses to invest in Pakistan",
  },
  {
    id: "16",
    title: "Pakistan, China to ink 11 training accords under CPEC phase-II",
    date: "Sep 10, 2025",
    href: "https://profit.pakistantoday.com.pk/2025/09/03/pakistan-china-to-ink-11-training-accords-under-cpec-phase-ii/;",
    tag: "Analysis",
    image: "/Assets/NewsImages/CPEC.jpg",
    imageAlt: "IMG_Pakistan, China to ink 11 training accords under CPEC phase-II",
  },
  {
    id: "17",
    title: "Pakistan enjoys preferred place in US new South Asia approach",
    date: "Sep 04, 2025",
    href: "https://tribune.com.pk/story/2565061/pakistan-enjoys-preferred-place-in-us-new-south-asia-approach-report;",
    tag: "Analysis",
    image: "/Assets/NewsImages/Pakistan enjoys.jpg",
    imageAlt: "IMG_Pakistan enjoys preferred place in US new South Asia approach",
  },
  {
    id: "18",
    title: "Malaysian Food Festival opens in Islamabad",
    date: "Sep 04, 2025",
    href: "https://www.app.com.pk/business/malaysian-food-festival-opens-in-islamabad/",
    tag: "Analysis",
    image: "/Assets/NewsImages/Malaysian Food Festival.jpg",
    imageAlt: "IMG_Malaysian Food Festival opens in Islamabad",
  },
  {
    id: "19",
    title: "Pakistan, China sign $8.5b pacts under CPEC 2.0",
    date: "Sep 5, 2025",
    href: "https://www.nation.com.pk/05-Sep-2025/pakistan-china-sign-dollar-8-5b-pacts-under-cpec-2-0",
    tag: "Analysis",
    image: "/Assets/NewsImages/Pakistan, China sign $8.5b.jpg",
    imageAlt: "IMG_Pakistan, China sign $8.5b pacts under CPEC 2.0",
  },
  {
    id: "20",
    title: "Pakistan and Japan hold 14th round of bilateral political consultations",
    date: "Sep 04, 2025",
    href: "https://ptv.com.pk/ptvworld/newsdetail/11152",
    tag: "Analysis",
    image: "/Assets/NewsImages/Pakistan and Japan hold 14th.jpg",
    imageAlt: "IMG_Pakistan and Japan hold 14th round of bilateral political consultations",
  },
 
  {
    id: "21",
    title: "Pakistan, China sign $4bn MoUs in agriculture",
    date: "Sep 04, 2025",
    href: "https://www.dawn.com/news/1940384/pakistan-china-sign-4bn-mous-in-agriculture",
    tag: "Analysis",
    image: "/Assets/NewsImages/Pakistan, China sign $4bn.jpg",
    imageAlt: "IMG_Pakistan, China sign $4bn MoUs in agriculture",
  },
  {
    id: "22",
    title: "Pakistan, China agree on $7bn ML-1 financing consortium",
    date: "Sep 08, 2025",
    href: "https://www.dawn.com/news/1940653",
    tag: "Analysis",
    image: "/Assets/NewsImages/Pakistan, China agree on $7bn.jpg",
    imageAlt: "IMG_Pakistan, China agree on $7bn ML-1 financing consortium",
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
