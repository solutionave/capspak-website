export default function GalleryPage() {
  return (
    <main className="bg-white font-sans">

      {/* HERO SECTION */}
      <section className="bg-[#001D3D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Visual highlights from our conferences, workshops, and community
            engagements.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#001D3D] mb-2">
              Moments in Action
            </h2>
            <p className="text-neutral-500">
              Capturing ideas, dialogue, and collaboration.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Image Card */}
            <div className="rounded-[1.5rem] overflow-hidden bg-neutral-200 h-64 hover:shadow-lg transition"></div>

            <div className="rounded-[1.5rem] overflow-hidden bg-neutral-200 h-64 hover:shadow-lg transition"></div>

            <div className="rounded-[1.5rem] overflow-hidden bg-neutral-200 h-64 hover:shadow-lg transition"></div>

            <div className="rounded-[1.5rem] overflow-hidden bg-neutral-200 h-64 hover:shadow-lg transition"></div>

            <div className="rounded-[1.5rem] overflow-hidden bg-neutral-200 h-64 hover:shadow-lg transition"></div>

            <div className="rounded-[1.5rem] overflow-hidden bg-neutral-200 h-64 hover:shadow-lg transition"></div>

          </div>
        </div>
      </section>

    </main>
  );
}
