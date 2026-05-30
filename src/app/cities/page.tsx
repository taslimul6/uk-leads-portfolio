import Link from "next/link";
import { getCities, getAllBusinesses } from "@/lib/data";
import BusinessCard from "@/components/BusinessCard";
import StarRating from "@/components/StarRating";

export default function CitiesPage() {
  const cities = getCities();
  const all = getAllBusinesses();

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Browse by City
          </h1>
          <p className="text-purple-200 text-lg">
            Find beauty and wellness businesses in your area
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cities.map((city) => {
          const cityBusinesses = all.filter((b) => b.city === city.name);
          const topRated = [...cityBusinesses].sort(
            (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
          )[0];
          const categories = [...new Set(cityBusinesses.map((b) => b.category))];

          return (
            <div
              key={city.name}
              className="mb-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                      📍 {city.name}
                      <span className="text-sm font-normal text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                        {city.count} businesses
                      </span>
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/directory?city=${encodeURIComponent(city.name)}`}
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
                  >
                    View All in {city.name}
                  </Link>
                </div>

                {/* Top rated */}
                {topRated && (
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-5 border border-purple-200 dark:border-purple-800">
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mb-2">
                      ⭐ TOP RATED IN {city.name.toUpperCase()}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex-1">
                        <Link
                          href={`/business/${topRated.id}`}
                          className="font-bold text-lg text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition"
                        >
                          {topRated.name}
                        </Link>
                        <StarRating rating={topRated.rating} reviews={topRated.reviews} />
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <Link
                          href={`/business/${topRated.id}`}
                          className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                        >
                          View
                        </Link>
                        <a
                          href={topRated.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Grid of businesses */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {cityBusinesses.slice(0, 6).map((biz) => (
                    <BusinessCard key={biz.id} business={biz} />
                  ))}
                </div>

                {cityBusinesses.length > 6 && (
                  <div className="text-center mt-6">
                    <Link
                      href={`/directory?city=${encodeURIComponent(city.name)}`}
                      className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                    >
                      View all {cityBusinesses.length} businesses in {city.name} →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
