export default function EventsPage() {
  // 🗂️ Sirf yeh array update karein — naya card add karna asaan hoga
  const events = [
     {
      id: 16,
      title: ` MoU for Exploring Asia-Pacific Markets between Khawaja Group of Industries (KGI) and Consortium for Asia Pacific and Eurasian Studies (CAPES)  `,
      pdfUrl: "/Assets/Events/MoU Signing KGI Web Report.docx.pdf",
      image: "/Assets/Events/KGI3.jpeg",
      date: "11 Nov, 2025",
      meta: "Press Note • 3 pages",
     },
     {
      id: 15,
      title: ` MoU signing with Federal Urdu University of Arts, Science and Technology (FUUAST), Islamabad. `,
      pdfUrl: "/Assets/Events/federal-urdu.pdf",
      image: "/Assets/Events/federal-urdu.jpeg",
      date: "3 Nov, 2025",
      meta: "Press Note • 3 pages",
     },
    {
      id: 14,
      title: ` Educational Convention-Connecting Pakistan and Asia Pacific`,
      pdfUrl: "/Assets/Events/Educational Convention-Connecting Pakistan and Asia Pacific.pdf",
      image: "/Assets/Events/Educational Convention-Connecting Pakistan and Asia Pacific-MOU.JPG",
      date: "28 Oct, 2025",
      meta: "Press Note • 3 pages",
    },
     {
      id: 13,
      title: ` Exploring New Horizons in Nontraditional Security Domains`,
      pdfUrl: "/Assets/Events/Launch of Eurasia.pdf",
      image: "/Assets/HomePageSlider/Eurasia.png",
      date: "16 Oct, 2025",
      meta: "Press Note • 3 pages",
    },
     {
      id: 12,
      title: `Roundtable Discussion on "Diversifying Investment Landscape of Balochistan: China and Beyond"`,
      pdfUrl: "/Assets/Events/Adnan Amir Talk.pdf",
      image: "/Assets/Events/Adnan Amir Talk.png",
      date: "3 Oct, 2025",
      meta: "Press Note • 3 pages",
    },
    {
      id: 17,
      title: "MoU Signing with UMT, Lahore",
      pdfUrl: "/Assets/Events/umt.pdf",
      image: "/Assets/HomePageSlider/MoU with UMT 1.jpg",
      date: "5 Sep, 2025",
      meta: "Press Note • 2 pages",
    },
     {
      id: 11,
      title: "SVI Visit",
      pdfUrl: "/docs/SVI_Visit.pdf",
      image: "/Assets/HomePageSlider/SVI_Visit.jpg",
      date: "4 Sep, 2025",
      meta: "Press Note • 2 pages",
    },
    {
      id: 1,
      title: "CAPES delegation visits Indonesian Embassy",
      pdfUrl: "/Assets/Events/CAPS Delegation Visits Indonesian Embassy.pdf",
      image: "/Assets/Events/1.jpg",
      date: "28 Aug, 2025",
      meta: "Press Note • 2 pages",
    },
    {
      id: 3,
      title: "Pakistan-Indonesia Joint Independence Celebrations",
      pdfUrl:
        "/Assets/Events/Pakistan-Indonesia Joint Independence Celebrations.pdf",
      image: "/Assets/Events/Pak_indo.jpg",
      date: "13 Aug, 2025",
      meta: "MoU • 3 pages",
    },
     {
      id: 8,
      title: "Bridging Pakistan and Oceania",
      pdfUrl: "/Assets/Events/Bridging Pakistan and Oceania.pdf",
      image: "/Assets/Events/oceania.jpg",
      date: "17 July, 2025",
      meta: "Clippings • 10 pages",
    },
     {
      id: 6,
      title: "Bridging Pakistan and the Asia-Pacific",
      pdfUrl: "/Assets/Events/Bridging Pakistan and the Asia-Pacific.pdf",
      image: "/Assets/Events/bridging.jpg",
      date: "29 May, 2025",
      meta: "Summary • 2 pages",
    },
     {
      id: 7,
      title: "Religions Along the Ancient Silk Routes",
      pdfUrl: "/Assets/Events/Religions Along the Ancient Silk Routes.pdf",
      image: "/Assets/Events/religions.jpg",
      date: "27 May, 2025",
      meta: "Highlights • 8 pages",
    },
     {
      id: 9,
      title: "Pakistan-Russia Cooperation in Non-Traditional Security",
      pdfUrl:
        "/Assets/Events/Pakistan-Russia Cooperation in Non-Traditional Security.pdf",
      image: "/Assets/Events/pak-russia.jpg",
      date: "29 Apr, 2025",
      meta: "Clippings • 10 pages",
    },
     {
      id: 5,
      title:
        "Developing P2P and B2B Linkages between Pakistan and Asia Pacific",
      pdfUrl:
        "/Assets/Events/Developing P2P and B2B Linkages between Pakistan and Asia Pacific.pdf",
      image: "/Assets/Events/developing.jpg",
      date: "24 Feb, 2025",
      meta: "Brief • 6 pages",
    },
      {
      id: 4,
      title: "Vigil in Solidarity with the People of Republic of Korea",
      pdfUrl:
        "/Assets/Events/Vigil in Solidarity with the People of Republic of Korea.pdf",
      image: "/Assets/Events/vigil.jpg",
      date: "11 Jan, 2025",
      meta: "Minutes • 4 pages",
    },
    {
      id: 2,
      title: "Inaugural Ceremony of Consortium of Asia Pacific Studies",
      pdfUrl:
        "/Assets/Events/Inaugural Ceremony of Consortium of Asia Pacific Studies.pdf",
      image: "/Assets/Events/Inugral.jpg",
      date: "15 Nov, 2024",
      meta: "Report • 5 pages",
    },
  
   
   
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
        Recent Events & Documents
      </h1>

      {/* Small cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((ev) => (
          <SmallEventCard key={ev.id} {...ev} />
        ))}
      </div>
    </div>
  );
}

function SmallEventCard(props: {
  title: any;
  pdfUrl: any;
  image: any;
  date: any;
  meta: any;
}) {
  const { title, pdfUrl, image, date, meta } = props;
  return (
    <article className="group bg-white rounded-2xl ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Card image */}
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}

      <div className="p-4 sm:p-5">
        {/* Heading that opens the PDF in a new tab */}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-start gap-2"
          aria-label={`Open PDF: ${title}`}
        >
          <span className="mt-0.5 inline-block w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-neutral-400" />
          <h2 className="text-base sm:text-lg font-medium leading-snug text-neutral-900 underline-offset-2 group-hover:underline">
            {title}
          </h2>
        </a>

        {/* Meta row */}
        <div className="mt-2 flex items-center gap-2 text-xs text-neutral-600">
          <span className="inline-flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h16v10H4V8z" />
            </svg>
            {date}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M6 2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm8 1.5V8h4.5L14 3.5z" />
            </svg>
            {meta || "PDF"}
          </span>
        </div>

        {/* Action row */}
        <div className="mt-3 flex items-center gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium rounded-xl px-3 py-1.5 ring-1 ring-neutral-200 hover:bg-neutral-50"
          >
            View PDF
          </a>

          {/* Optional: direct download (works best if the server sets correct headers) */}
          <a
            href={pdfUrl}
            download
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            Download
          </a>
        </div>
      </div>
    </article>
  );
}
