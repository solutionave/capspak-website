

export default function EventsPage() {
  // ⭐ NEW ARRAY FOR UPCOMING EVENTS
  // const upcomingEvents = [
    // {
    //   id: 1,
    //   title: "",
    //   pdfUrl: "",
    //   image: "",
    //   date: "",
    //   meta: "Coming Soon",
    // },

    
    // Yahan as many upcoming events add karte jao ✔
  // ];

  // ⭐ Existing Events Array
  const events = [

    {
      id: 32,
      title: `Beyond Bailouts-What Japan’s Return Means for Pakistan’s Development Finance`,
      pdfUrl: "/Assets/Events/3. Beyond Bailouts-What Japan’s Return Means for Pakistan’s Development Finance.pdf",
      image: "/Assets/Events/pak-japan.jpg",
      date: "March 03, 2026",
      meta: "Press Note • 3 pages",
    },
     {
      id: 31,
      title: `Pakistan's Strategic Entry into Russian Labor Market.`,
      pdfUrl: "/Assets/Events/2. Pakistan's Strategic Entry into Russian Labor Market.pdf",
      image: "/Assets/Events/10-session.jpg",
      date: " February 27, 2026",
      meta: "Press Note • 3 pages",
    },
    {
      id: 30,
      title: `MoU signing with Area Study Centre, Far East and Southeast Asia (FESEA), University of Sindh.`,
      pdfUrl: "/Assets/Events/MoU Signing FESEA Web Report.pdf",
      image: "/Assets/Events/FESEA.jpg",
      date: "12 Feb, 2026.",
      meta: "Press Note • 3 pages",
    },
    {
      id: 29,
      title: ` Indonesia's Experience of Tapping Tourism: Lessons for Pakistan.`,
      pdfUrl: "/Assets/Events/Indonesia's Experience of Tapping Tourism .pdf",
      image: "/Assets/Events/indonesia-tourism.jpeg",
      date: "10 Feb, 2026.",
      meta: "Press Note • 3 pages",
    },
     {
      id: 28,
      title: `Launch of CAPES Indonesia Chapter.`,
      pdfUrl: "/Assets/Events/Launch of CAPES Indonesia Chapter.pdf",
      image: "/Assets/Events/indonesia.jpeg",
      date: "06 Feb, 2026.",
      meta: "Press Note • 3 pages",
    },
    {
      id: 27,
      title: `Pakistan-South Korea Relations: Expanding Cultural and Educational Connectivity. `,
      pdfUrl: "/Assets/Events/south-korea.pdf",
      image: "/Assets/Events/south-korea.jpeg",
      date: "29 Jan, 2026.",
      meta: "Press Note • 3 pages",
    },
    {
      id: 26,
      title: `The Tashkent-Islamabad Axis-Architecting a New Era of Regional Leadership and Prosperity`,
      pdfUrl: "/Assets/Events/1. The Tashkent-Islamabad Axis-Architecting a New Era of Regional Leadership and Prosperity.pdf",
      image: "/Assets/Events/26-jan.jpg",
      date: "26 Jan, 2026",
      meta: "Press Note • 3 pages",
    },
    {
      id: 25,
      title: `MoU signing with Indonesian Students Association Islamabad (PPMI). `,
      pdfUrl: "/Assets/Events/MoU Signing with Indonesian Students Association Islamabad (PPMI).pdf",
      image: "/Assets/Events/PPMI.jpeg",
      date: "23 Jan, 2026.",
      meta: "Press Note • 3 pages",
    },

        {
      id: 24,
      title: `Forging Connectivity and Exploring People-to-People Partnership for a New Era`,
      pdfUrl: "/Assets/Events/Pakistan-Russia Eurasian Forum 2025.pdf",
      image: "/Assets/HomePageSlider/WhatsApp Image 2025-12-24 at 12.26.15 PM.jpeg",
      date: "16-17 Jan, 2026.",
      meta: "Press Note • 3 pages",
    },
        {
      id: 23,
      title: `MoU signing with Strategic Vision Institute (SVI), Islamabad. `,
      pdfUrl: "/Assets/Events/MoU Signing SVI Web Report.pdf",
      image: "/Assets/Events/SVI-Islamabad.jpeg",
      date: "6 Jan, 2026.",
      meta: "Press Note • 3 pages",
    },
    {
      id: 22,
      title: `In-House Discussion on “Aid for Public Diplomacy `,
      pdfUrl: "/Assets/HomePageSlider/Aid for Public Diplomacy.pdf",
      image: "/Assets/Events/In-house-discussion.jpeg",
      date: " 5 Dec, 2025",
      meta: "Press Note • 3 pages",
    },
     {
      id: 21,
      title: ` Russia–Pakistan: Overview of the Modern Stage of Bilateral Relations`,
      pdfUrl: "/Assets/HomePageSlider/Russia-Pakistan- Overview of the Modern Stage of Biateral Relations (1).docx.pdf",
      image: "/Assets/Events/Russia-Pakistan-cooperation.jpeg",
      date: " 5 Dec, 2025",
      meta: "Press Note • 3 pages",
    },
    {
      id: 20,
      title: `In-House Discussion on “Navigating Multipolar Currents: Lessons from Asia Pacific Small Powers for Pakistan's Strategic Autonomy`,
      pdfUrl: "/Assets/Events/Navigating Multipolar Currents-Lessons from Asia Pacific Small Powers for Pakistan's Strategic Autonomy.pdf",
      image: "/Assets/Events/Nevigation.jpeg",
      date: " 5 Dec, 2025",
      meta: "Press Note • 3 pages",
    },
    {
      id: 19,
      title: `How Middle Powers in the Asia Pacific are Engaging/Disengaging with Afghanistan`,
      pdfUrl: "/Assets/Events/Salman Javed Talk.pdf",
      image: "/Assets/Events/how middle powers.jpeg",
      date: "24 Nov, 2025.",
      meta: "Press Note • 3 pages",
    },
    {
      id: 18,
      title: `MoU for Exploring Asia-Pacific Markets between Khawaja Group of Industries (KGI) and Consortium for Asia Pacific and Eurasian Studies (CAPES)`,
      pdfUrl: "/Assets/Events/MoU Signing KGI Web Report.docx.pdf",
      image: "/Assets/Events/MoU Signing KGI Web Report.jpeg",
      date: "11 Nov, 2025",
      meta: "Press Note • 3 pages",
    },
    // ... rest of your events

     
      {
      id: 17,
      title: `In-House Discussion on “Critical Minerals Cooperation between US and Pakistan`,
      pdfUrl: "/Assets/Events/Critical Minerals Cooperation between US and Pakistan.pdf",
      image: "/Assets/Events/minerals-image.jpeg",
      date: " 7 Nov, 2025",
      meta: "Press Note • 3 pages",
    },
     {
      id: 16,
      title: ` MoU signing with Federal Urdu University of Arts, Science and Technology (FUUAST), Islamabad. `,
      pdfUrl: "/Assets/Events/MoU Signing FUUAST Web Report.pdf",
      image: "/Assets/Events/federal-urdu.jpeg",
      date: " 7 Nov, 2025",
      meta: "Press Note • 3 pages",
    },
    {
      id: 15,
      title: ` Educational Convention-Connecting Pakistan and Asia Pacific`,
      pdfUrl: "/Assets/Events/Educational Convention-Connecting Pakistan and Asia Pacific.pdf",
      image: "/Assets/Events/Educational Convention-Connecting Pakistan and Asia Pacific-MOU.JPG",
      date: "28 Oct, 2025",
      meta: "Press Note • 3 pages",
    },
     {
      id: 14,
      title: ` Exploring New Horizons in Nontraditional Security Domains`,
      pdfUrl: "/Assets/Events/Launch of Eurasia.pdf",
      image: "/Assets/HomePageSlider/Eurasia.png",
      date: "16 Oct, 2025",
      meta: "Press Note • 3 pages",
    },
     {
      id: 13,
      title: `Roundtable Discussion on "Diversifying Investment Landscape of Balochistan: China and Beyond"`,
      pdfUrl: "/Assets/Events/Adnan Amir Talk.pdf",
      image: "/Assets/Events/Adnan Amir Talk.png",
      date: "3 Oct, 2025",
      meta: "Press Note • 3 pages",
    },
    {
      id: 12,
      title: "MoU signing with UMT,Lahore",
      pdfUrl: "/Assets/PolicyBrief/MoU Signing UMT, Lahore Web Report.pdf",
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

      {/* ⭐ NEW UPCOMING EVENTS HEADING */}
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
        
      </h1>

      {/* ⭐ Upcoming Events Grid
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((ev) => <SmallEventCard key={ev.id} {...ev} />)
        ) : (
          <p className="text-neutral-600">No upcoming events yet.</p>
        )}
      </div> */}

      {/* ⭐ Main Heading for Recent Events */}
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
        Recent Events & Documents
      </h1>

      {/* Existing Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((ev) => (
          <SmallEventCard key={ev.id} {...ev} />
        ))}
      </div>
    </div>
  );
}

function SmallEventCard(props: {
  title: string;
  pdfUrl: string;
  image: string;
  date: string;
  meta: string;
}) {
  const { title, pdfUrl, image, date, meta } = props;
  return (
    <article className="group bg-white rounded-2xl ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Image */}
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}

      <div className="p-4 sm:p-5">
        {/* PDF Link */}
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

        {/* Meta Info */}
        <div className="mt-2 flex items-center gap-2 text-xs text-neutral-600">
          <span className="inline-flex items-center gap-1">
            📅 {date}
          </span>
          <span>•</span>
          <span>{meta || "PDF"}</span>
        </div>

        {/* Buttons */}
        <div className="mt-3 flex items-center gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            className="text-sm font-medium rounded-xl px-3 py-1.5 ring-1 ring-neutral-200 hover:bg-neutral-50"
          >
            View PDF
          </a>

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
