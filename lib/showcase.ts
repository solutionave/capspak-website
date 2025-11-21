

export interface ShowcaseItem {
  id: string;
  title: string;
  blurb: string;
  image: string;
  alt?: string;
  href?: string;
  author?: string;
  type?: string;     

}

export const showcaseItems: ShowcaseItem[] = [

    {
    id: "5",
    title: "Pakistan’s Emerging Role in the Critical Minerals Economy: Challenges and Opportunities in U.S. Economic Cooperation",
    blurb: "By Muhammad Umar   | Published ",
    image: "/Assets/PolicyBrief/minerals.jpg",
    href: "/Assets/PolicyBrief/Pakistans Emerging Role in the Critical Minerals Economy.pdf",
    author: "Muhammad Umar ",
  
    },
 
     {
    id: "4",
    title: "Turning Global Civilization Initiative (GCI) to Pakistan’s Advantage",
    blurb: "By Muhammad Asif Khan  | Published ",
    image: "/Assets/PolicyBrief/Global-Civilization.jpg",
    href: "/Assets/PolicyBrief/4. Turning Global Civilization Initiative (GCI) to Pakistan’s Advantage.pdf",
    author: "Muhammad Asif Khan ",
  
    },
 
   {
    id: "2",
    title: "South Korea&#39;s Demographic Challenge and Immigration Strategy:Opportunities for Pakistan",
    blurb: "By Najam-ul-Hassan Naqvi | Published ",
    image: "/Assets/PolicyBrief/SK.png",
    href: "/Assets/PolicyBrief/South Korea.docx-1.pdf",
    author: "Najam-ul-Hassan Naqvi",
  
  },
    {
    id: "4",
    title: "Japan’s OSA Initiative: Implications forAsia-Pacific and Pakistan",
    blurb: "By Najam-ul-Hassan Naqvi  | Published  ",
    image: "/Assets/PolicyBrief/japan-osa.jpg",
    href: "//Assets/PolicyBrief/japan-osa.pdf",
    author: "Najam-ul-Hassan Naqvi",
  
    },
  
   {
    id: "3",
    title: "Is Pakistan Ready to Ride the EV Wave with China?",
    blurb: "By Najam-ul-Hassan Naqvi | Published  ",
    image: "/Assets/PolicyBrief/EV.jpg",
    href: "/Assets/PolicyBrief/EV Wave.docx.pdf",
    author: "Najam-ul-Hassan Naqvi",
  
  },

  // {
  //   id: "1",
  //   title: "Digital Bridge: Positioning Pakistan as Japan IT Partner",
  //   blurb: "By Sharjeel Siddiqui  | Published November 10, 2025 ",
  //   image: "/Assets/NewsImages/japanit.png",
  //   href: "/Assets/PolicyBrief/Japan IT sector-Revised Draft.pdf",
  //   author: "Sharjeel Siddiqui",
  
  // },
  
];
