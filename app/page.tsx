import { Hero } from "../components/Hero";
import { Section } from "../components/Section";

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Our Focus" eyebrow="What we do">
        <p>
          We bridge strategic research and actionable policy. Our analysts track aerospace innovation, dual-use technologies, strategic stability dynamics, and the geopolitical factors shaping national resilience and opportunity.
        </p>
      </Section>
      <Section title="Why It Matters" eyebrow="Impact">
        <p>
          Rapid technological convergence and shifting security architectures demand informed, evidence-grounded perspectives. {"We"} deliver accessible, technically literate analysis to decision-makers, practitioners, media, and the public.
        </p>
      </Section>
    </>
  );
}