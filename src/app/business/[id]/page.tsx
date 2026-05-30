import Link from "next/link";
import { notFound } from "next/navigation";
import { getBusinessById, getAllBusinesses } from "@/lib/data";
import StarRating from "@/components/StarRating";
import BusinessCard from "@/components/BusinessCard";

export async function generateStaticParams() {
  const businesses = getAllBusinesses();
  return businesses.map((b) => ({ id: String(b.id) }));
}

interface Props {
  params: { id: string };
}

export default function BusinessDetailPage({ params }: Props) {
  const id = parseInt(params.id, 10);
  const business = getBusinessById(id);

  if (!business) {
    notFound();
  }

  const all = getAllBusinesses();
  const similar = all
    .filter(
      (b) =>
        b.id !== business.id &&
        (b.city === business.city || b.category === business.category)
    )
    .slice(0, 4);

  const categoryColors: Record<string, string> = {
    "Hair Salon": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    "Beauty Salon": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    "Massage": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    "Massage spa": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    "Health": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    "Wellness Center": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    "Medical Clinic": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    "Physical Therapist": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    "Services": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  };

  const badgeClass =
    categoryColors[business.category] ||
    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/directory" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
              Directory
            </Link>
            <span>/</span>
            <span className="text-gray-700 dark:text-gray-300 truncate">{business.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600" />
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${badgeClass}`}>
                    {business.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    📍 {business.city}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {business.name}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <StarRating rating={business.rating} reviews={business.reviews} size="lg" />
                </div>

                <p className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {business.address}
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Location</h2>
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <iframe
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${business.lng - 0.01}%2C${business.lat - 0.005}%2C${business.lng + 0.01}%2C${business.lat + 0.005}&layer=mapnik&marker=${business.lat}%2C${business.lng}`}
                  />
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${business.lat},${business.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium"
                >
                  Open in Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Contact Business
              </h2>

              {/* WhatsApp CTA */}
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-lg mb-4"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Message on WhatsApp
              </a>

              {/* Phone */}
              <a
                href={`tel:${business.phone_intl.replace(/\s/g, "")}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-purple-400 dark:hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {business.phone_uk}
              </a>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Rating</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {business.rating !== "None" ? `${business.rating} / 5` : "Not rated"} · {business.reviews} reviews
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                    <span className="text-lg">🏷️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{business.category}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Area</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {business.city}, {business.postcode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Businesses */}
        {similar.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Similar Businesses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similar.map((biz) => (
                <BusinessCard key={biz.id} business={biz} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
