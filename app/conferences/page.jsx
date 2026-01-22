export default function ConferencesPage() {
  const conferencesData = [
    {
      id: 11,
      title: `In-House Discussion on “Aid for Public Diplomacy `,
      pdfUrl: "/Assets/HomePageSlider/Aid for Public Diplomacy.pdf",
      image: "/Assets/Events/In-house-discussion.jpeg",
      date: " 5 Dec, 2025",
      meta: "Press Note • 3 pages",
    },
     {
      id: 10,
      title: `In-House Discussion on “Navigating Multipolar Currents: Lessons from Asia Pacific Small Powers for Pakistan's Strategic Autonomy`,
      pdfUrl: "/Assets/Events/Navigating Multipolar Currents-Lessons from Asia Pacific Small Powers for Pakistan's Strategic Autonomy.pdf",
      image: "/Assets/Events/Nevigation.jpeg",
      date: " 5 Dec, 2025",
      meta: "Press Note • 3 pages",
    },
    {
      id: 9,
      title: `How Middle Powers in the Asia Pacific are Engaging/Disengaging with Afghanistan`,
      pdfUrl: "/Assets/Events/Salman Javed Talk.pdf",
      image: "/Assets/Events/how middle powers.jpeg",
      date: "24 Nov, 2025.",
      meta: "Press Note • 3 pages",
    },
  {
      id: 8,
      title: `MoU for Exploring Asia-Pacific Markets between Khawaja Group of Industries (KGI) and Consortium for Asia Pacific and Eurasian Studies (CAPES)`,
      pdfUrl: "/Assets/Events/MoU Signing KGI Web Report.docx.pdf",
      image: "/Assets/Events/MoU Signing KGI Web Report.jpeg",
      date: "11 Nov, 2025",
      meta: "Press Note • 3 pages",
    },
     {
      id: 7,
      title: ` Exploring New Horizons in Nontraditional Security Domains`,
      pdfUrl: "/Assets/Events/Launch of Eurasia.pdf",
      image: "/Assets/HomePageSlider/Eurasia.png",
      date: "16 Oct, 2025",
      meta: "Press Note • 3 pages",
    },
        {
      id: 6,
      title: `Roundtable Discussion on "Diversifying Investment Landscape of Balochistan: China and Beyond"`,
      pdfUrl: "/Assets/Events/Adnan Amir Talk.pdf",
      image: "/Assets/Events/Adnan Amir Talk.png",
      date: "3 Oct, 2025",
      meta: "Press Note • 3 pages",
    },
        {
      id: 5,
      title: "Pakistan-Indonesia Joint Independence Celebrations",
      pdfUrl:
        "/Assets/Events/Pakistan-Indonesia Joint Independence Celebrations.pdf",
      image: "/Assets/Events/Pak_indo.jpg",
      date: "13 Aug, 2025",
      meta: "MoU • 3 pages",
    },
      {
      id: 4,
      title: "Bridging Pakistan and the Asia-Pacific",
      pdfUrl: "/Assets/Events/Bridging Pakistan and the Asia-Pacific.pdf",
      image: "/Assets/Events/bridging.jpg",
      date: "29 May, 2025",
      meta: "Summary • 2 pages",
    },
     {
      id: 3,
      title: "Religions Along the Ancient Silk Routes",
      pdfUrl: "/Assets/Events/Religions Along the Ancient Silk Routes.pdf",
      image: "/Assets/Events/religions.jpg",
      date: "27 May, 2025",
      meta: "Highlights • 8 pages",
    },
         {
      id: 2,
      title: "Pakistan-Russia Cooperation in Non-Traditional Security",
      pdfUrl:
        "/Assets/Events/Pakistan-Russia Cooperation in Non-Traditional Security.pdf",
      image: "/Assets/Events/pak-russia.jpg",
      date: "29 Apr, 2025",
      meta: "Clippings • 10 pages",
    },
     {
      id: 1,
      title:
        "Developing P2P and B2B Linkages between Pakistan and Asia Pacific",
      pdfUrl:
        "/Assets/Events/Developing P2P and B2B Linkages between Pakistan and Asia Pacific.pdf",
      image: "/Assets/Events/developing.jpg",
      date: "24 Feb, 2025",
      meta: "Brief • 6 pages",
    },
  ];

  return (
    <main className="bg-white font-sans">

      {/* HERO */}
      <section className="bg-[#001D3D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Conferences
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Exploring ideas, shaping policies, and connecting thought leaders.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {conferencesData.map((item) => (
              <div
                key={item.id}
                className="rounded-[1.5rem] border border-neutral-200 overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#001D3D] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-500 mb-1">
                    {item.date}
                  </p>

                  <p className="text-sm text-neutral-400 mb-4">
                    {item.meta}
                  </p>

                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    className="inline-block text-sm font-semibold text-blue-600 hover:underline"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}
