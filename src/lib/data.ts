import businessesData from "../../data.json";

export interface Business {
  id: number;
  name: string;
  phone_intl: string;
  phone_uk: string;
  whatsapp: string;
  rating: string;
  reviews: number;
  category: string;
  city: string;
  address: string;
  postcode: string;
  lat: number;
  lng: number;
}

const businesses: Business[] = businessesData.businesses;

export function getAllBusinesses(): Business[] {
  return businesses;
}

export function getBusinessById(id: number): Business | undefined {
  return businesses.find((b) => b.id === id);
}

export function getBusinessesByCity(city: string): Business[] {
  return businesses.filter((b) => b.city.toLowerCase() === city.toLowerCase());
}

export function getBusinessesByCategory(category: string): Business[] {
  return businesses.filter((b) => b.category.toLowerCase() === category.toLowerCase());
}

export function getCities(): { name: string; count: number }[] {
  const cityMap = new Map<string, number>();
  businesses.forEach((b) => {
    cityMap.set(b.city, (cityMap.get(b.city) || 0) + 1);
  });
  return Array.from(cityMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getCategories(): { name: string; count: number }[] {
  const catMap = new Map<string, number>();
  businesses.forEach((b) => {
    catMap.set(b.category, (catMap.get(b.category) || 0) + 1);
  });
  return Array.from(catMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getFeaturedBusinesses(limit = 6): Business[] {
  return [...businesses].sort((a, b) => b.reviews - a.reviews).slice(0, limit);
}

export function searchAndFilter(
  query?: string,
  city?: string,
  category?: string,
  minRating?: number
): Business[] {
  let results = [...businesses];

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q)
    );
  }
  if (city) {
    results = results.filter(
      (b) => b.city.toLowerCase() === city.toLowerCase()
    );
  }
  if (category) {
    results = results.filter(
      (b) => b.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (minRating !== undefined) {
    results = results.filter((b) => parseFloat(b.rating) >= minRating);
  }

  return results;
}
