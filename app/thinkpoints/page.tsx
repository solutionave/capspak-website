import { Metadata } from "next";
import CapsThinkPoints from "@/components/ThinkPoints";

export const metadata: Metadata = {
  title: "Think Points",
  description:
    "Read CAPES Think Points — researcher analysis and opinion pieces on Asia-Pacific and Eurasian geopolitics, security, and policy.",
};

export default function Page() {
  return <CapsThinkPoints />;
}
