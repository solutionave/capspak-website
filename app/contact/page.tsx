import { Metadata } from "next";
import { site } from "../../site.config";
import { Section } from "../../components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CAPES — the Consortium for Asia Pacific and Eurasian Studies — for research collaboration, media, and general enquiries.",
};

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
