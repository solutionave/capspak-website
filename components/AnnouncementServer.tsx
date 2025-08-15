import { getActiveAnnouncements } from "../lib/announcements";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./AnnouncementBanner"), { ssr: false });

export default async function AnnouncementServer() {
  const items = getActiveAnnouncements();
  // Pass to client for interactivity (dismiss, rotation). Could hydrate via props.
  return <Banner items={items} />;
}
