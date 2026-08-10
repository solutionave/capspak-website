import { Metadata } from "next";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read the terms of use governing access to the CAPES website and its content.",
};

export default function TermsPage() {
  return (
    <Section title="Terms of Use" eyebrow="Legal">
      <p>These placeholder terms will outline permitted use, intellectual property, disclaimers, and liability limitations. Replace with reviewed legal text before launch.</p>
    </Section>
  );
}
