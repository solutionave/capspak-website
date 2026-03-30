import Image from "next/image";
import Link from "next/link";

export type ResearchProp = {
  title: string;
  blurb: string;
  image: string; // path under /public or a full URL
  href: string; // target article URL/route
};

export const DEFAULT_ITEMS: ResearchProp[] = [
   {
  title: "New World Order: in statu nascendi",
    blurb:
      "By Dr. Faisal Javaid  | Published 2024. ",
   image: "/Assets/PolicyBrief/16.jpeg",
   href: "https://www.fnce.info/portoflio/new-world-order-in-statu-nascendi/",
   },
   {
  title: "Evolving dynamics of China-Pakistan counter-terrorism cooperation",
    blurb:
      "By Dr. Khuram Iqbal, Dr. Muhammad Shoaib & Sardar Bakhsh  | published Feb 08, 2024. ",
   image: "/Assets/PolicyBrief/15.jpeg",
   href: "https://www.tandfonline.com/doi/full/10.1080/18335330.2024.2315137",
   },
   {
  title: "Militancy in Balochistan: A Formidable Challenge to the China-Pakistan Economic Corridor ",
    blurb:
      "By Umair Pervez Khan  | Published Dec 31, 2023. ",
   image: "/Assets/PolicyBrief/14.jpeg",
   href: "https://ijksojs.org/index.php/1/article/view/23",
  },
  {
  title: "Major power competition in the Indian Ocean and doctrinal development in Pakistan",
    blurb:
      "By  Dr. Khuram Iqbal & Muneeb Salman  | Published Aug 02, 2023.",
   image: "/Assets/PolicyBrief/13.jpeg",
   href: "https://www.tandfonline.com/doi/full/10.1080/01495933.2023.2238522",
  },
  {
  title: "Russia–Ukraine War and the Indo-Pacific: A Perspective from Pakistan",
    blurb:
      "By  Dr. Muhammad Shoaib   | Published May 26, 2023. ",
   image: "/Assets/PolicyBrief/12.png",
   href: "https://journals.sagepub.com/doi/10.1177/00219096231176743",
  },
   {
  title: "Connectivity through One Belt One Road between Central Asia and South Asia",
    blurb:
      "By  Dr. Faisal Javaid   | Published  July, 2022. ",
   image: "/Assets/PolicyBrief/11.jpeg",
   href: "https://www.researchgate.net/publication/361789244_Connectivity_Through_Belt_and_Road_Initiative_BRI_and_Central_Asian_Regional_Economic_Cooperation_CAREC_between_Central_Asia_and_South_Asia_A_Case_Study_of_Pakistan",
  },
  {
  title: "Pakistan's Governing Elite and CPEC: An Elitist Perspective",
    blurb:
      "By  Dr. Khuram Iqbal  | Published  Jan 27, 2022. ",
   image: "/Assets/PolicyBrief/10.jpeg",
   href: "https://doi.org/10.57169/jssa.006.02.0123",
  },
  {
  title: "An Ethnographic Study of Cross-Cultural Relations between China and Pakistan under the Umbrella of the China-Pakistan Economic Corridor ",
    blurb:
      "By Dr. Muhammad Shoaib  | Published Sep 24, 2020. ",
   image: "/Assets/PolicyBrief/9.jpeg",
   href: "https://brill.com/view/journals/ajss/48/3-4/article-p274_5.xml",
  },
  {
  title: " Micro Impacts of a Macro-Level Trading Partnership: Effects of China’s Belt-and Road Initiative in Pakistan ",
    blurb:
      "By  Dr. Muhammad Shoaib  | Published Feb 03, 2020.",
   image: "/Assets/PolicyBrief/8.png",
   href: "https://mail.google.com/mail/u/0/#inbox/FMfcgzQgKvMfnqNqqJBPQclbcwkJzNNr",
  },
   {
  title: " Incrementalism, Normalisation, Partnership and Reassurance: PRC’s Quest for Success in the 1990s ",
    blurb:
      "By  Dr. Muhammad Shoaib & Dr. Saira Aquil    | Published  Oct 25, 2019. ",
   image: "/Assets/PolicyBrief/7.jpeg",
   href: "https://ipripak.org/wp-content/uploads/2019/10/Article-4-IPRI-Journal-XIX-2-Inc-Nor-Par-ED-SSA-1.pdf",
  },
  {
  title: " Understanding Pakistani Public Opinion on China and CPEC: A Quantitative Approach",
    blurb:
      "By   Dr. Khuram Iqbal   | Published April 01, 2019. ",
   image: "/Assets/PolicyBrief/6.png",
   href: "https://pakistan-horizon.piia.org.pk/index.php/pakistan-horizon/article/view/107/101",
  },
  {
  title: " An Indispensable Partner? Bush, Obama, and the US’ Soft Power",
    blurb:
      "By  Dr. Muhammad Shoaib & Dr. Saira Aquil   | Published  Aug 06, 2018.",
   image: "/Assets/PolicyBrief/5.jpeg",
   href: "https://www.ipripak.org/wp-content/uploads/2018/08/Article-1-8-Aug-2018.pdf",
  },
  {
  title: "Securing CPEC: Challenges, Responses and Outcomes",
    blurb:
      "By Dr. Khuram Iqbal  | Published Feb 03, 2018. ",
   image: "/Assets/PolicyBrief/4.jpeg",
   href: "https://link.springer.com/chapter/10.1007/978-981-10-7116-4_11",
  },
  {
     title: "China’s Rise in the International System: A Natural Reality",
     blurb:
     "By Dr. Saira Aquil & Dr. Muhammad Shoaib | Published Dec, 2017. ",
    image: "/Assets/PolicyBrief/3.jpeg",
    href: "https://sbbwu.edu.pk/journal/Winter_2017_Vol_11_No_2/14.%20China_s%20Rise%20in%20the%20International%20System%20(final%20Copy).pdf",
  },
  {
    title: "Significance and Security of CPEC: A Pakistani Perspective",
    blurb: "By y Dr. Khuram Iqba| Published Sept, 2017. ",
    image: "/Assets/PolicyBrief/2.jpeg",
    href: "https://www.academia.edu/34522181/Significance_and_Security_of_CPEC_A_Pakistani_Perspective",
  },
  {
    title: "The Changing Dynamics of the Foreign Policy of China in Contemporary Time",
    blurb: "By Dr. Muhammad Shoaib | May 01, 2014. ",
    image: "/Assets/PolicyBrief/chinese-flag.jpg",
    href: "https://dergipark.org.tr/tr/pub/tyir/article/640819",
  },
];


     
      















    //  {
    // title: "Russia–Ukraine War and the Indo-Pacific: A Perspective from Pakistan",
    // blurb:
    //   "By Dr. Muhammad Shoaib | Published May 26, 2023",
    // image: "/Assets/capsthinkpoint/russua-ukrain.jpeg",
    // href: "https://journals.sagepub.com/doi/abs/10.1177/00219096231176743?journalCode=jasa",
    //  }//
// 
//        {
//     title: "An Ethnographic Study of Cross-Cultural Relations between China and Pakistan under the Umbrella of the China-Pakistan Economic Corridor",
//     blurb:
//       "By Dr. Muhammad Shoaib | Published September 24,2020",
//     image: "/Assets/capsthinkpoint/ethnogaphic-study.jpeg",
//     href: "https://www.jstor.org/stable/27076291",
//      },
    
//     {
//     title: "Micro Impacts of a Macro-Level Trading Partnership: Effects of China’s Belt and Road Initiative in ",
//     blurb:
//       "By Dr. Muhammad Shoaib | Published February 3 2020",
//     image: "/Assets/capsthinkpoint/map.jpeg",
//     href: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ajes.12307",
//      },


//      {
//     title: "Understanding Pakistani Public Opinion on China and CPEC: A Quantitative Approach",
//     blurb:
//       "By Dr. Khuram Iqbal | Published 2019",
//     image: "/Assets/capsthinkpoint/public-opinion.png",
//     href: "https://pakistan-horizon.piia.org.pk/index.php/pakistan-horizon/article/view/107/101",
//      },


//      {
//     title: "Incrementalism, Normalisation, Partnershipand Reassurance: PRC’s Ques",
//     blurb:
//       "By Dr. Muhammad Shoaib | Published 2019",
//     image: "/Assets/capsthinkpoint/incrementalism.png",
//     href: "https://ipripak.org/wp-content/uploads/2019/10/Article-4-IPRI-Journal-XIX-2-Inc-Nor-Par-ED-SSA-1.pdf",
//      },
    
    
//      {
//     title: "Securing CPEC: Challenges, Responses and Outcomes",
//     blurb:
//       "By Dr. Khuram Iqbal | Published February 3, 2018",
//     image: "/Assets/capsthinkpoint/cpec-outcomes.jpeg",
//     href: "https://link.springer.com/chapter/10.1007/978-981-10-7116-4_11",
//      },


//      {
//     title: "An Indispensable Partner? Bush, Obama, and the US’ Soft Power",
//     blurb:
//       "By Dr. Muhammad Shoaib | Published , 2018",
//     image: "/Assets/capsthinkpoint/indispesble-partner.jpeg",
//     href: "http://www.ipripak.org/wp-content/uploads/2018/08/Article-1-8-Aug-2018.pdf",
//      },


//      {
//     title: "Significance and Security of CPEC: A Pakistani Perspective",
//     blurb:
//       "By Dr. Khuram Iqbal | Published 2017",
//     image: "/home/hp/Office/capspak-website/public/Assets/capsthinkpoint/security.jpeg",
//     href: "https://www.academia.edu/download/54387421/Khuram_Iqbal_CPEC-libre.pdf?expired_redirect=true",
//      },


//      {
//     title: "China’s Rise in the International System: A Natural Reality",
//     blurb:
//       "By  Dr. Muhammad Shoaib | Published 2017",
//     image: "/Assets/capsthinkpoint/china-rise.jpeg",
//     href: "https://sbbwu.edu.pk/journal/Winter_2017_Vol_11_No_2/14.%20China_s%20Rise%20in%20the%20International%20System%20(final%20Copy).pdf",
//      },
        
//       { 
//     title: "China’s Policy towards Kashmir Dispute",
//     blurb:
//       "By  Dr. Muhammad Shoaib | Published 2015",
//     image: "/Assets/capsthinkpoint/pak-china-kashmir.jpeg",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
//     href : "https://journal.psc.edu.pk/index.php/pp/article/view/122/121",
//       },
// {
//     title:"“The Changing Dynamics of the Foreign Policy of China in Contemporary Time”",
//     blurb:
//       "By  Dr. Muhammad Shoaib | Published 2014",
//     image: "/Assets/capsthinkpoint/changing-dynamics.jpeg",
//     href: "https://dergipark.org.tr/en/download/article-file/844898",
//      },
     
        
     



export default function ResearchPublications() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          CAPES Research Publications
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Explore CAPES research and publications authored by leading scholars.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DEFAULT_ITEMS.map((item, idx) => (
          <article
            key={idx}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
          >
            {/* Image Section */}
            <div className="relative w-full h-56">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold leading-snug">
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  className="underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 rounded"
                >
                  {item.title}
                </Link>
              </h3>

              <p className="mt-2 text-sm text-gray-600 flex-1">{item.blurb}</p>

              <div className="mt-4">
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  className="inline-flex items-center rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  aria-label={`Read more: ${item.title}`}
                >
                  Read more
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}