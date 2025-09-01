import { weeklyReportWeek2 } from "@/lib/weeklyReportWeek2";
import Link from "next/link";

const DOCS = [
  {
    title: "Weekly Asia Pacific Monitor (12–16 May 2025)",
    date: "2025-05-16",
    url: "/docs/Weekly-Monitor-12May-16May25.docx",
  },
];

const embed = (url: string) =>
  `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(
    typeof window === "undefined" ? url : `${window.location.origin}${url}`
  )}`;

export default function Page() {
  // return (
  //   <div className="mx-auto max-w-5xl px-4 py-10">
  //     <div className="flex items-center justify-between gap-4 mb-6">
  //       <div>
  //         <h1 className="text-2xl font-semibold">
  //           Asia Pacific · Week 2 · May
  //         </h1>
  //         <p className="text-sm text-neutral-500">
  //           Click below to preview or open the original document.
  //         </p>
  //       </div>
  //       <Link
  //         href="/"
  //         className="rounded-md px-3 py-2 bg-black text-white hover:opacity-90"
  //       >
  //         Back
  //       </Link>
  //     </div>

  //     <ul className="space-y-4">
  //       {DOCS.map((d) => (
  //         <li key={d.url} className="rounded-xl border bg-white p-5 shadow-sm">
  //           <details>
  //             <summary className="cursor-pointer flex items-center justify-between">
  //               <div>
  //                 <div className="font-medium">{d.title}</div>
  //                 <div className="text-xs text-neutral-500">
  //                   {new Date(d.date).toLocaleDateString()}
  //                 </div>
  //               </div>
  //               <a
  //                 href={d.url}
  //                 target="_blank"
  //                 rel="noreferrer"
  //                 className="rounded-md border px-3 py-1 text-xs hover:bg-neutral-50"
  //               >
  //                 Open Original
  //               </a>
  //             </summary>
  //             <div className="mt-4">
  //               <iframe
  //                 title={d.title}
  //                 src={embed(d.url)}
  //                 className="w-full h-[70vh] rounded-md border"
  //               />
  //             </div>
  //           </details>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">
            Asia Pacific · Week 2 · May
          </h1>
          <p className="text-sm text-neutral-500">
            Weekly News Monitor (12–16 May 2025)
          </p>
        </div>
        <Link
          href="/"
          className="rounded-md px-3 py-2 bg-black text-white hover:opacity-90"
        >
          Back
        </Link>
      </div>

      {/* Render sections */}
      {weeklyReportWeek2.map((section: any) => (
        <div key={section?.category} className="mb-10">
          <h2 className="text-xl font-bold uppercase mb-4">
            {section?.category}
          </h2>
          <ul className="space-y-6">
            {section?.items.map((item: any, idx: any) => (
              <li key={idx}>
                <h3 className="font-semibold">{item?.title}</h3>
                <p className="text-neutral-700 mt-1">{item?.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
