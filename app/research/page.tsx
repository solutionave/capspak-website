import { Metadata } from "next";
import { site } from "../../site.config";
import { Section } from "../../components/Section";

export const metadata: Metadata = { title: `Research | ${site.shortName}` };

export default function ResearchPage() {
  return (
    <>
      <Section title="Research Pillars" eyebrow="What we study">
        <ul>
          <li><strong>Aerospace & Space Policy:</strong> Civil / military aviation, space governance, satellite applications.</li>
          <li><strong>Strategic Stability & Deterrence:</strong> Nuclear policy, emerging tech impacts, risk reduction.</li>
          <li><strong>Technology & Innovation:</strong> Dual-use tech, AI, autonomy, defence industrial base.</li>
          <li><strong>Regional Security Dynamics:</strong> South Asian security architecture, geo-economics.</li>
          <li><strong>Climate & Resilience:</strong> Environmental security aspects intersecting with aerospace and infrastructure.</li>
        </ul>
      </Section>
    </>
  );
}
