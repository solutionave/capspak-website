import { Metadata } from "next";
import { site } from "../../site.config";
import { Section } from "../../components/Section";

export const metadata: Metadata = { title: `Publications | ${site.shortName}` };

export default function PublicationsPage() {
  return (
    <>
      <Section title="Think Points">
        <p>
          This section will feature issue briefs, research papers, commentary, datasets, and multimedia explainers. A filterable list with search will be implemented.
        </p>
      </Section>
    </>
  );
}
