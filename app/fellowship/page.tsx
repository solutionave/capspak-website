import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Resident Fellowship Program",
  description:
    "Apply to the CAPES Non-Resident Fellowship Program for early-career researchers working on non-traditional security, the Pakistani diaspora in Asia, and Pakistan-Russia relations.",
};

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-justify">
    <div className="w-2xl space-y-2 ">
      {/* <p>
        <a
          href="/Assets/Opportunities/CAPES NON RESIDENT FELLOWSHIP PROGRAM.pdf" 
          target="_blank"                       
          rel="noopener noreferrer"         
          className="text-[var(--color-brand-700)] hover:text-[var(--color-brand-600)] underline underline-offset-2"
        >
          CAPES Non Resident Fellowship Program
        </a>
      </p> */}

      <h2 className="font-bold text-center my-6 text-[1.25rem]">NON RESIDENT FELLOWSHIP PROGRAM</h2>
      <p> CAPES nonresident fellowship program offers an opportunity for emerging researchers, scholars and policy analysts to contribute to research and policy dialogues on Pakistan’s engagement with Asia Pacific region. This fellowship provides an opportunity to early-career researchers from Asia Pacific region to connect with Pakistani academia and policy-circles in pursuit of their research in one of the following area:</p>

      <ul className="list-disc pl-12">
        <li>Non-Traditional Security Linkages </li>
        <li>Pakistani Diaspora in South and North East Asia </li>
        <li>South-Central Asia Connectivity</li>
        <li>Pakistan-Russia Relations </li>
      </ul>

      <div className="flex my-4 ">
        <p className="font-bold">Duration: </p>
        <p className="pl-2">Three Months </p>
      </div>

      <h2 className="font-bold text-[1.2rem]">Expected Deliverables: </h2>
      <div>
        <ul className="list-disc pl-12">
          <li className=" mb-3">
            <p className="font-semibold">Conduct independent research:</p>
            <p>Write policy oriented / academic papers on themes aligned with CAPES’ research agenda.</p>
          </li>
          <li className=" mb-3">
            <p className="font-semibold">Contribute to publications:</p>
            <p>Write opinion pieces and policy briefs for CAPES.</p>
          </li>
          <li className=" mb-3">
            <p className="font-semibold">Participate in virtual seminars/events:</p>
            <p>Participate in online events and seminars conducted by CAPES.</p>
          </li>
          <li className=" mb-3">
            <p className="font-semibold">Network Building:</p>
            <p>Engage with community of scholars and researchers across the Asia Pacific region.</p>
          </li>
        </ul>
      </div>

      <h2 className="font-bold text-[1.2rem] my-4">Eligibility Criteria:</h2>
      <p className="pl-10"> <span className="font-medium">Education:</span> Higher Degree Research (HDR) students enrolled in International Relations, Area Studies and relevant disciplines. </p>
      <p className="pl-10"> <span className="font-medium">Research Skills:</span> Experience in academic writing and data analysis. </p>
      <p className="pl-10"> <span className="font-medium">Publications:</span> Prior publications (OP-Eds, Research papers and policy briefs) are desirable. </p>
      <p className="pl-10"> <span className="font-medium">Commitment:</span> Ability to commit 8-10 hours per week remotely for research. </p>

      <h2 className="font-bold text-[1.2rem] mt-4">Application process:</h2>
      <p>Interested candidates should send following:</p>
      <ul className="list-disc pl-17">
        <li>Updated CV</li>
        <li>Synopsis of proposed research (500-600 words)</li>

        <li>One writing sample (published)</li>
      </ul>
    </div>
    </div>
  );
};

export default Page;
