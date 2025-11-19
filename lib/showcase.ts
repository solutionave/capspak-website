

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
    id: "3",
    title: "Is Pakistan Ready to Ride the EV Wave with China?",
    blurb: "By Najam-ul-Hassan Naqvi. | Published  ",
    image: "/Assets/PolicyBrief/EV.jpg",
    href: "/Assets/PolicyBrief/EV Wave.docx.pdf",
    author: "Najam-ul-Hassan Naqvi.",
  
  },
   {
    id: "2",
    title: "South Korea&#39;s Demographic Challenge and Immigration Strategy:Opportunities for Pakistan",
    blurb: "By  | Published Najam-ul-Hassan Naqvi. ",
    image: "/Assets/PolicyBrief/SK.png",
    href: "/Assets/PolicyBrief/South Korea.docx-1.pdf",
    author: "Najam-ul-Hassan Naqvi.",
  
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
