import { Metadata } from "next";
import { site } from "../../site.config";
import { Section } from "../../components/Section";

export const metadata: Metadata = { title: `About | ${site.shortName}` };

export default function AboutPage() {
  return (
    <>
      <Section title="About Us" eyebrow="Who we are">
        <p>
          {site.shortName} is an independent, non-partisan research centre dedicated to advancing understanding of aerospace, defence innovation, strategic stability, and technology policy as they relate to Pakistan and its region.
        </p>
        <p>
          We combine rigorous analysis, practitioner insight, and stakeholder engagement to inform evidence-based policy and foster international collaboration.
        </p>
      </Section>
    </>
  );
}
