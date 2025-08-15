import { getActiveAnnouncements } from "../lib/announcements";
import AnnouncementBanner from "./AnnouncementBanner";

export default function AnnouncementServer() {
  const items = getActiveAnnouncements();
  return <AnnouncementBanner items={items} />;
}
