

export interface ShowcaseItem {
  id: string;
  title: string;
  blurb: string;
  image: string;
  alt?: string;
  href?: string;
}

export const showcaseItems: ShowcaseItem[] = [
  // {
  //   id: "Opportunity or Dependency? Türkiye-Pakistan Energy Pact",
  //   title: "Opportunity or Dependency? Türkiye-Pakistan Energy Pact",
  //   blurb: "By Sharjeel Siddiqui  | Published November 10, 2025 ",
  //   image: "/Assets/NewsImages/1.jpg",
  //   href: "/Assets/PolicyBrief/Japan IT sector-Revised Draft.pdf",
  // },
  {
    id: "1",
    title: "Digital Bridge: Positioning Pakistan as Japan IT Partner",
    blurb: "By Sharjeel Siddiqui  | Published November 10, 2025 ",
    image: "/Assets/NewsImages/japanit.png",
    href: "/Assets/PolicyBrief/Japan IT sector-Revised Draft.pdf",
  },
];
