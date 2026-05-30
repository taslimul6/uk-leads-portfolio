export default function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About This Directory
          </h1>
          <p className="text-purple-200 text-lg">
            Connecting UK customers with trusted beauty & wellness professionals
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What is this */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gradient mb-6">What is This Directory?</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              This is a curated directory of <strong>30 beauty, wellness, and health businesses</strong> across 6 cities in the UK — Birmingham, Solihull, Manchester, Oldham, Bolton, and Bradford.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Every business listed here is a <strong>verified, WhatsApp-ready operation</strong>, meaning customers can book appointments, ask questions, and get support directly through WhatsApp — no phone calls, no waiting on hold.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The directory covers a range of services including <strong>hair salons, beauty salons, massage therapy, homeopathy, acupuncture, physiotherapy, psychology services</strong>, and more.
            </p>
          </div>
        </section>

        {/* How to use */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gradient mb-6">How to Use This Directory</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Browse or Search",
                desc: "Use our directory page to browse all 30 businesses, filter by city or category, or search by name.",
                icon: "🔍",
              },
              {
                step: "2",
                title: "View Details",
                desc: "Click on any business to see full details including address, ratings, reviews, and location on the map.",
                icon: "📋",
              },
              {
                step: "3",
                title: "Message on WhatsApp",
                desc: "Hit the green WhatsApp button to start an instant conversation with the business. No registration needed.",
                icon: "💬",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-1">
                  Step {item.step}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* For Businesses */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gradient mb-6">For Business Owners</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Want to get listed in our directory? We&apos;re always looking for quality beauty and wellness professionals to feature.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              To qualify, your business should:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Operate in the UK (currently covering Birmingham, Solihull, Manchester, Oldham, Bolton, Bradford)",
                "Have an active WhatsApp number for customer communication",
                "Provide beauty, wellness, health, or related services",
                "Have a physical address or operate as a mobile service",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Contact Us to Get Listed
            </a>
          </div>
        </section>

        {/* Data Source */}
        <section>
          <h2 className="text-2xl font-bold text-gradient mb-6">Data Source</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All business data is collected through the <strong>Google Places API (New)</strong>, including names, addresses, phone numbers, ratings, and categories. WhatsApp links are generated from the businesses&apos; phone numbers for direct customer communication.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
