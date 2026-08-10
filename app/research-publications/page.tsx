import { Metadata } from "next";
import ResearchPublications from "@/components/ReseachPublications";

export const metadata: Metadata = {
  title: "Research Publications",
  description:
    "Browse CAPES's scholarly research publications on Asia-Pacific and Eurasian security, policy, and geopolitics.",
};

export default function Page() {
  return (
    <>
     <ResearchPublications/>
    </>
  );
}
