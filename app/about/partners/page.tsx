import { Metadata } from "next";
import PartnersSection from "@/components/PartnersSection";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Meet CAPES's network of partner universities and research institutions across Pakistan, Türkiye, Indonesia, Russia, Korea, and the wider Asia-Pacific and Eurasian region.",
};

export default function PartnersPage() {
  return <PartnersSection />;
}
