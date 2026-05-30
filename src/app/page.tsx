import Link from "next/link";
import {
  getAllBusinesses,
  getFeaturedBusinesses,
  getCities,
  getCategories,
} from "@/lib/data";
import BusinessCard from "@/components/BusinessCard";


export default function HomePage() {
  const businesses = getAllBusinesses();
  const featured = getFeaturedBusinesses(6);
  const cities = getCities();
  const categories = getCategories();

  const avgRating = (
    businesses.reduce((sum, b) => sum + parseFloat(b.rating), 0) /
    businesses.filter((b) => parseFloat(b.rating) > 0).length
  ).toFixed(1);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 min-h-[600px] flex items-center">
        {/* Animated background dots */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm mb-8 border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              30 Verified Businesses Across 6 UK Cities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Discover UK&apos;s Best
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Beauty & Wellness
              </span>
              <br />
              Businesses
            </h1>

            <p className="text-lg sm:text-xl text-purple-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect instantly with top-rated salons, spas, clinics, and
              therapists. Book your appointment via WhatsApp in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/directory"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-400 text-gray-900 font-bold rounded-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all text-lg"
              >
                Browse Directory
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/cities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all text-lg"
              >
                Explore by City
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb" className="dark:fill-gray-950" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 dark:bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "30", label: "Businesses", icon: "🏢" },
              { value: "6", label: "Cities", icon: "📍" },
              { value: avgRating, label: "Avg Rating", icon: "⭐" },
              { value: "100%", label: "WhatsApp Ready", icon: "💬" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Featured Businesses</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Top-rated beauty and wellness professionals loved by thousands of customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((biz) => (
              <BusinessCard key={biz.id} business={biz} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/directory"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all"
            >
              View All Businesses
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Browse by City</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Find businesses near you
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={`/directory?city=${encodeURIComponent(city.name)}`}
                className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-center hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-3xl mb-2">📍</div>
                  <h3 className="font-bold text-white text-lg">{city.name}</h3>
                  <p className="text-purple-200 text-sm mt-1">
                    {city.count} {city.count === 1 ? "business" : "businesses"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Business Categories</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/directory?category=${encodeURIComponent(cat.name)}`}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-lg transition-all group"
              >
                <div className="text-2xl mb-2">
                  {cat.name === "Hair Salon" ? "💇" :
                   cat.name === "Beauty Salon" ? "💄" :
                   cat.name.includes("Massage") ? "💆" :
                   cat.name.includes("Health") ? "🏥" :
                   cat.name.includes("Wellness") ? "🧘" :
                   cat.name.includes("Medical") ? "⚕️" :
                   cat.name.includes("Physical") ? "🦴" : "✨"}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cat.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-purple-200 text-lg mb-10">
            All our listed businesses offer instant WhatsApp booking. No waiting, no hassle.
          </p>
          <Link
            href="/directory"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-purple-700 font-bold rounded-xl hover:shadow-2xl transition-all text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Browse All 30 Businesses
          </Link>
        </div>
      </section>
    </div>
  );
}
