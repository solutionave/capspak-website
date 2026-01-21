export default function WorkshopsPage() {
  return (
    <main className="bg-white font-sans">

      {/* HERO SECTION */}
      <section className="bg-[#001D3D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Workshops
          </h1>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            Hands-on learning experiences designed to build skills, encourage
            dialogue, and empower communities.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#001D3D] mb-2">
              Recent Workshops
            </h2>
            <p className="text-neutral-500">
              Practical sessions conducted across different regions and themes.
            </p>
          </div>

          {/* Workshops Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Workshop Card */}
            <div className="rounded-[1.5rem] border border-neutral-200 overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-neutral-200"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#001D3D] mb-2">
                  Policy Writing Workshop
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  Islamabad · April 2024
                </p>
                <p className="text-neutral-600 text-sm">
                  Training young researchers on effective policy brief writing
                  and evidence-based analysis.
                </p>
              </div>
            </div>

            {/* Workshop Card */}
            <div className="rounded-[1.5rem] border border-neutral-200 overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-neutral-200"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#001D3D] mb-2">
                  Community Engagement Bootcamp
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  Peshawar · February 2024
                </p>
                <p className="text-neutral-600 text-sm">
                  An interactive workshop focused on grassroots advocacy,
                  communication, and stakeholder mapping.
                </p>
              </div>
            </div>

            {/* Workshop Card */}
            <div className="rounded-[1.5rem] border border-neutral-200 overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-neutral-200"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#001D3D] mb-2">
                  Research Methods Training
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  Lahore · December 2023
                </p>
                <p className="text-neutral-600 text-sm">
                  Capacity-building session covering qualitative and quantitative
                  research tools for social sciences.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
