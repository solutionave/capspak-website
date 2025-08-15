import { Metadata } from "next";
import { site } from "../../site.config";
import { Section } from "../../components/Section";

export const metadata: Metadata = { title: `Terms of Use | ${site.shortName}` };

export default function TermsPage() {
  return (
    <Section title="Terms of Use" eyebrow="Legal">
      <p>These placeholder terms will outline permitted use, intellectual property, disclaimers, and liability limitations. Replace with reviewed legal text before launch.</p>
    </Section>
  );
}
