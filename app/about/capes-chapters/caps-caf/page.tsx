import { Metadata } from "next";
import CapsCafDashboard from "./CapsCafDashboard";

export const metadata: Metadata = {
  title: "CAPES-CAF – Climate Action Forum",
  description:
    "CAPES-CAF (Climate Action Forum) is CAPES's regional chapter on climate policy, covering its vision and mission, team, reports, and events across Asia-Pacific and Eurasia.",
};

export default function Page() {
  return <CapsCafDashboard />;
}
