import { Metadata } from "next";
import { site } from "../site.config";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: `${site.shortName} – ${site.name} | Asia-Pacific & Eurasian Studies Think Tank, Pakistan`,
  },
  description: site.description,
};

export default function Page() {
  return <HomeClient />;
}
