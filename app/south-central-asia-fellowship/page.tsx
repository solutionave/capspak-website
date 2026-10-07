import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "South-Central Asia Connectivity Fellowship",
  description:
    "An eight-week fellowship by CAPES and The University of Lahore for international students, researchers and policy analysts to explore Pakistan's engagement with the Asia-Pacific and Eurasia regions.",
};

const POSTER = "/Assets/Opportunities/south-central-asia-connectivity-fellowship.jpg";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          South-Central Asia Connectivity Fellowship
        </h1>

        <a
          href={POSTER}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5"
          aria-label="Open the fellowship poster in full size"
        >
          <img
            src={POSTER}
            alt="South-Central Asia Connectivity Fellowship poster by CAPES and The University of Lahore"
            width={1131}
            height={1600}
            className="w-full h-auto"
          />
        </a>

        {/* <p className="mt-6 text-center text-neutral-700">
          Apply by sending your CV, research synopsis (with thematic area of interest) and one published writing
          sample to{" "}
          <a
            href="mailto:capspakofficial@gmail.com"
            className="text-[var(--color-brand-700)] hover:text-[var(--color-brand-600)] underline underline-offset-2"
          >
            capspakofficial@gmail.com
          </a>
          . Application deadline: <span className="font-semibold">November 20, 2026</span>.
        </p> */}
      </div>
    </div>
  );
};

export default Page;
