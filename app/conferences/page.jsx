export default function ConferencesPage() {
  return (
    <main className="bg-white font-sans">

      {/* HERO SECTION */}
      <section className="bg-[#001D3D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Conferences
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Exploring ideas, shaping policies, and connecting thought leaders
            through impactful conferences.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#001D3D] mb-2">
              Recent Conferences
            </h2>
            <p className="text-neutral-500">
              A glimpse into our latest policy dialogues and academic forums.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Conference Card */}
            <div className="rounded-[1.5rem] border border-neutral-200 overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-neutral-200"></div> 
              {/* image place */}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#001D3D] mb-2">
                  National Policy Conference 2024
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  Islamabad · March 2024
                </p>
                <p className="text-neutral-600 text-sm">
                  A high-level discussion bringing together policymakers,
                  researchers, and civil society leaders.
                </p>
              </div>
            </div>

            {/* Repeat Card */}
            <div className="rounded-[1.5rem] border border-neutral-200 overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-neutral-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#001D3D] mb-2">
                  Youth & Governance Summit
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  Lahore · January 2024
                </p>
                <p className="text-neutral-600 text-sm">
                  Engaging young leaders in dialogue on democratic participation
                  and governance reforms.
                </p>
              </div>
            </div>

            {/* Repeat Card */}
            <div className="rounded-[1.5rem] border border-neutral-200 overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-neutral-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#001D3D] mb-2">
                  Climate Policy Forum
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  Karachi · November 2023
                </p>
                <p className="text-neutral-600 text-sm">
                  Experts discussed sustainable policy frameworks addressing
                  climate resilience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
