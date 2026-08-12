import { Metadata } from "next";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore CAPES programs including Fellowships, Policy Labs, Data & Tools, and Youth Outreach for Asia-Pacific and Eurasian research.",
};

export default function ProgramsPage() {
  return (
    <>
      <Section title="Programs" eyebrow="Capacity & engagement">
        <ul>
          <li><strong>Fellowships:</strong> Early-career and visiting scholar tracks.</li>
          <li><strong>Policy Labs:</strong> Rapid analysis sprints with stakeholders.</li>
          <li><strong>Data & Tools:</strong> Open datasets and visual dashboards (in development).</li>
          <li><strong>Youth Outreach:</strong> Workshops and mentorship for students in STEM & policy.</li>
        </ul>
      </Section>
    </>
  );
}
