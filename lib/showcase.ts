export interface ShowcaseItem {
  id: string;
  title: string;
  blurb?: string;
  image: string;
  alt: string;
  href?: string;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "sc-aero",
    title: "Aerospace Futures",
    blurb:
      "Space launch, orbital infrastructure & atmospheric tech trajectories.",
    image: "/globe.svg",
    alt: "Orbital globe icon",
  },
  {
    id: "sc-stability",
    title: "Strategic Stability",
    blurb: "Escalation pathways, deterrence dynamics & emerging tech risk.",
    image: "/window.svg",
    alt: "Abstract window icon",
  },
  {
    id: "sc-industrial",
    title: "Industrial Base",
    blurb: "Supply chain resilience & innovation ecosystems.",
    image: "/vercel.svg",
    alt: "Triangle icon",
  },
  {
    id: "sc-climate",
    title: "Climate Resilience",
    blurb: "Critical infrastructure adaptation & resource security.",
    image: "/next.svg",
    alt: "Circular symbol",
  },
  {
    id: "sc-data",
    title: "Data & Sensing",
    blurb: "ISR evolution, remote sensing & decision tooling.",
    image: "/file.svg",
    alt: "File icon",
  },
  {
    id: "sc-governance",
    title: "Tech Governance",
    blurb: "Norms, regulation & responsible autonomy frameworks.",
    image: "/globe.svg",
    alt: "Globe repeat icon",
  },
];
