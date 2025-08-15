import { Metadata } from "next";
import { site } from "../../site.config";
import { Section } from "../../components/Section";

export const metadata: Metadata = { title: `Events | ${site.shortName}` };

export default function EventsPage() {
  return (
    <>
      <Section title="Events" eyebrow="Dialogue & exchange">
        <p>
          We host roundtables, policy dialogues, technical workshops, and public lectures. A dynamic events listing and registration integration will appear here.
        </p>
      </Section>
    </>
  );
}
