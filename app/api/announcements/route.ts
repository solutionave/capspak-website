import { NextResponse } from "next/server";
import { getActiveAnnouncements } from "../../../lib/announcements";

export const revalidate = 300; // cache 5 minutes (adjust as needed)

export async function GET() {
  const data = getActiveAnnouncements();
  return NextResponse.json(data, { status: 200 });
}
