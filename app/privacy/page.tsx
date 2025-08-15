import { Metadata } from "next";
import { site } from "../../site.config";
import { Section } from "../../components/Section";

export const metadata: Metadata = { title: `Privacy Policy | ${site.shortName}` };

export default function PrivacyPage() {
  return (
    <Section title="Privacy Policy" eyebrow="Your data">
      <p>This placeholder privacy policy will be replaced with a full statement covering:</p>
      <ul>
        <li>What limited analytics or form data we collect</li>
        <li>Lawful basis & retention periods</li>
        <li>Third-party services (if any)</li>
        <li>User rights & contact for data requests</li>
      </ul>
    </Section>
  );
}
