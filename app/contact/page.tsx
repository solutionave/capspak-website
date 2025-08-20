import { Metadata } from "next";
import { site } from "../../site.config";
import { Section } from "../../components/Section";

export const metadata: Metadata = { title: `Contact | ${site.shortName}` };

export default function ContactPage() {
  return (
    <>
      <Section title="Contact">
        <p>Email: <a href={`mailto:${site.email}`}>{site.email}</a></p>
        <p>For enquiries, please include a brief description of your request and timeline. We aim to respond within 2–3 business days. </p>
        <p>For calls, please contact us at (+92) 51 222 8450.</p>
      </Section>
    </>
  );
}
