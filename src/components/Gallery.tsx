const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop&q=80",
    alt: "Beauty salon interior with modern styling stations",
    category: "Hair Salon",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop&q=80",
    alt: "Relaxing spa massage therapy session",
    category: "Massage",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop&q=80",
    alt: "Facial treatment and skincare wellness",
    category: "Beauty Salon",
  },
  {
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop&q=80",
    alt: "Nail art and manicure services",
    category: "Beauty Salon",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop&q=80",
    alt: "Aromatherapy and wellness treatment",
    category: "Wellness",
  },
  {
    src: "https://images.unsplash.com/photo-1596178060667-5296e0c8a304?w=600&h=400&fit=crop&q=80",
    alt: "Physiotherapy and rehabilitation session",
    category: "Health",
  },
  {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop&q=80",
    alt: "Hair washing and treatment at salon",
    category: "Hair Salon",
  },
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop&q=80",
    alt: "Body scrub and exfoliation spa treatment",
    category: "Massage",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Beauty & Wellness Gallery</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Take a peek inside the top-rated salons, spas, and wellness centres across the UK
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-[3/2] cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay — desktop only */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex flex-col justify-end p-4">
                <span className="inline-block px-2 py-0.5 bg-purple-600/80 text-white text-xs font-medium rounded-full w-fit mb-1">
                  {img.category}
                </span>
                <p className="text-white text-sm leading-tight line-clamp-2">{img.alt}</p>
              </div>
              {/* Category badge — always visible on mobile */}
              <div className="absolute top-2 left-2 sm:hidden">
                <span className="inline-block px-2 py-0.5 bg-purple-600/90 text-white text-[10px] font-medium rounded-full">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
