"use client";

import Link from "next/link";
import StarRating from "./StarRating";
import type { Business } from "@/lib/data";

interface BusinessCardProps {
  business: Business;
  view?: "grid" | "list";
}

export default function BusinessCard({ business, view = "grid" }: BusinessCardProps) {
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

  const badgeClass = categoryColors[business.category] || "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";

  if (view === "list") {
    return (
      <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}>
                {business.category}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">📍 {business.city}</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-lg text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {business.name}
            </h3>
            <div className="mt-1">
              <StarRating rating={business.rating} reviews={business.reviews} size="sm" />
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/business/${business.id}`}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              View
            </Link>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 flex flex-col">
      {/* Colored header bar */}
      <div className="h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600" />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}>
            {business.category}
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
          {business.name}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          📍 {business.city} · {business.postcode}
        </p>

        <div className="mb-4">
          <StarRating rating={business.rating} reviews={business.reviews} />
        </div>

        <div className="mt-auto flex items-center gap-2">
          <Link
            href={`/business/${business.id}`}
            className="flex-1 text-center px-4 py-2.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            View Details
          </Link>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat
          </a>
        </div>
      </div>
    </div>
  );
}
