export default function PartnersPage() {
  const partners = [
    { name: "Tongwon University (Republic of Korea)", logo: "/Assets/Events/tangwong-uni.jfif" },
    { name: "Tsargrad Institute (Russia)", logo: "/logos/logo8.jpeg" },
    { name: "Indonesian Students Association Islamabad (PPMI)", logo: "/logos/logo7.png" },
    { name: "Federal Urdu University of Arts, Science and Technology (FUUAST), Islamabad", logo: "/logos/logo3.png" },
    { name: "UMT Lahore", logo: "/logos/logo5.png" },
    { name: "Area Study Centre for Far East and Southeast Asian Studies, Sindh University, Jamshoro", logo: "/logos/logo10.jpeg" },
    { name: "Riphah International University", logo: "/logos/logo12.png" },
    { name: "Fatima Jinnah Women University", logo: "/logos/logo13.png" },
    { name: "Strategic Vision Institute (SVI)", logo: "/logos/logo2.png" },
    { name: "Institute of Policy Studies (IPS), Islamabad", logo: "/logos/logo11.png" },
    { name: "iae global, Pakistan", logo: "/logos/logo9.jpeg" },
    { name: "Khawaja Group of Industries (KGI)", logo: "/logos/logo6.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-14">
<h1 className="text-4xl md:text-5xl font-serif font-semibold text-slate-700 text-center mb-4">
  Our Partners
</h1>
        <p className="text-gray-600">
          Collaborating with leading organizations worldwide
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl border border-gray-100 p-6 
                       transition-all duration-300 ease-out
                       hover:-translate-y-3 hover:shadow-xl hover:border-blue-200"
          >
            {/* Logo */}
            <div className="h-24 flex items-center justify-center mb-5 overflow-hidden">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 object-contain
                           transition-transform duration-300
                           group-hover:scale-110"
              />
            </div>

            {/* Name */}
            <p className="text-sm font-medium text-gray-800 text-center leading-snug relative">
              {partner.name}

              {/* underline animation */}
              <span
                className="absolute left-1/2 -bottom-2 h-[2px] w-0 bg-blue-500
                           transition-all duration-300
                           group-hover:w-10 group-hover:left-[calc(50%-20px)]"
              />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}










