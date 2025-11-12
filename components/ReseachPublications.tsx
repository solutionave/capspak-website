// app/components/CapsThinkPoints.tsx

import Image from "next/image";
import Link from "next/link";

export type ResearchProp = {
  title: string;
  blurb: string;
  image: string; // path under /public or a full URL
  href: string; // target article URL/route
};

export const DEFAULT_ITEMS: ResearchProp[] = [
//   {
//     title: "Pakistan's Governing Elite and CPEC: An Elitist Perspective",
//     blurb:
//       "By Dr. Khuram Iqbal | Published October 26, 2025", 
//     image:"/Assets/NewsImages/cpec.jpeg",
//     href: "https://jssa.thesvi.org/index.php/ojs/article/view/123/86",
//      },


//   {
//     title: "Evolving dynamics of China-Pakistan counter-terrorism cooperation",
//     blurb:
//       "By Dr. Khuram Iqbal and Dr. Muhammad Shoaib | Published February 8, 2024.",
//     image: "/Assets/capsthinkpoint/evolving-dynamivs-pak-china.jpeg",
//     href: "https://www.tandfonline.com/doi/abs/10.1080/18335330.2024.2315137",
//   },


//   {
//     title: "Militancy in Balochistan: A Formidable Challenge to the China-Pakistan Economic Corridor",
//     blurb:
//       "By  | Published December 31, 2023.",
//     image: "/Assets/capsthinkpoint/baloch.jpeg",
//     href: "https://ijksojs.org/index.php/1/article/view/23",
//      },



//   {
//     title: "Major power competition in the Indian Ocean and doctrinal development in Pakistan",
//     blurb:
//       "By Dr. Khuram Iqbal | Published August 2, 2023.",
//     image: "/Assets/capsthinkpoint/ocean.jpg",
//     href: "https://www.tandfonline.com/doi/abs/10.1080/01495933.2023.2238522",
//      },


//      {
//     title: "Russia–Ukraine War and the Indo-Pacific: A Perspective from Pakistan",
//     blurb:
//       "By Dr. Muhammad Shoaib | Published May 26, 2023",
//     image: "/Assets/capsthinkpoint/russua-ukrain.jpeg",
//     href: "https://journals.sagepub.com/doi/abs/10.1177/00219096231176743?journalCode=jasa",
//      },

//        {
//     title: "An Ethnographic Study of Cross-Cultural Relations between China and Pakistan under the Umbrella of the China-Pakistan Economic Corridor",
//     blurb:
//       "By Dr. Muhammad Shoaib | Published September 24,2020",
//     image: "/public/Assets/capsthinkpoint/ethnogaphic-study.jpeg",
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
     
        
     

];

export default function ResearchPublications() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          CAPES Research Publications
                  </h2>
        <p className="mt-2 text-base text-gray-600">
          </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DEFAULT_ITEMS.map((item, idx) => (
          <article
            key={idx}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
          >

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
