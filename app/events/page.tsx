export default function EventsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <article className="bg-white rounded-2xl shadow-lg ring-1 ring-black/5 overflow-hidden">
        {/* Image first */}
        <div className="w-full">
          <img
            src="/Assets/Events/1.jpg"
            alt="CAPS delegation visits the Indonesian Embassy"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
            loading="eager"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
            CAPS delegation visits Indonesian Embassy, reaffirming their
            commitment to enhancing cultural diplomacy.
          </h1>

          {/* Justified text */}
          <div className="mt-4 space-y-4 text-neutral-700 text-base sm:text-[17px] leading-relaxed text-justify">
            <p>
              A delegation of the Consortium for Asia-Pacific Studies (CAPS)
              held a meeting with Mr. Rahmat Hindiarta Kusuma, Minister
              Counsellor of Information, Social, and Cultural Affairs at the
              Embassy of Indonesia here in Islamabad on 28th August, 2025. The
              CAPS delegation was led by President Dr. Khuram Iqbal, accompanied
              by Joint Secretary Sardar Bakhsh and Indonesian Intern Mr.
              Lidzikri Ahmad Syaru Robbani.
            </p>
            <p>
              Both sides engaged in an in-depth discussion on the role of
              culture and religion in countering extremism and terrorism. Mr.
              Kusuma underlined Indonesia’s success in promoting cultural
              resilience, religious moderation, and community-based approaches
              to counter extremism. Dr. Iqbal emphasized that Pakistan could
              draw valuable lessons from Indonesia’s experience as a
              pluralistic, Muslim-majority democracy that has successfully
              balanced tradition and modernity in its approach to extremism.
            </p>
            <p>
              Mr. Rahmat also thanked President CAPS for providing Indonesian
              students with the unique internship opportunity, and it was
              mutually agreed to continue such engagement in the future.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
