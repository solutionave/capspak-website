import { Metadata } from "next";
import { site } from "../../site.config";
import { Section } from "../../components/Section";

export const metadata: Metadata = { title: `Contact | ${site.shortName}` };

export default function ContactPage() {
  return (
    <>
      <Section title="Contact" eyebrow="Get in touch">
        <p>Email: <a href={`mailto:${site.email}`}>{site.email}</a></p>
        <p>For media or partnership enquiries, please include a brief description of your request and timeline.</p>
        <p>We aim to respond within 2–3 business days.</p>
      </Section>
    </>
  );
}
