import type { Filters } from "@/content/types";
import { distanceKm } from "@/lib/geo";

type Filterable = {
  name: string;
  summary: string;
  description: string;
  locality: string;
  category: string;
  destinationSlug: string;
  seasons: string[];
  interests: string[];
};

type Point = { latitude: number; longitude: number };

type DayPlace = Point & {
  slug: string;
  name: string;
  category: string;
  interests: string[];
  destinationSlug: string;
  featured: boolean;
};

type DayBase = Point & { slug: string; nearby: string[] };

export function filterPlaces<T extends Filterable>(places: T[], filters: Filters) {
  const query = filters.q?.trim().toLowerCase() ?? "";
  return places.filter((place) => {
    if (filters.category && place.category !== filters.category) return false;
    if (filters.destination && place.destinationSlug !== filters.destination) return false;
    if (filters.season && !place.seasons.includes(filters.season)) return false;
    if (filters.interest && !place.interests.includes(filters.interest)) return false;
    if (!query) return true;
    const haystack = [place.name, place.summary, place.locality, place.category, place.description]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}

export function nearbyPlaces<T extends Point & { slug: string }>(place: T, places: T[], limit = 3) {
  return places
    .filter((candidate) => candidate.slug !== place.slug)
    .map((candidate) => ({ candidate, km: distanceKm(place, candidate) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, limit)
    .map((item) => item.candidate);
}

export function buildDay<T extends DayPlace>(
  places: T[],
  destinations: DayBase[],
  options: { base?: string; span: "half" | "day" | "two"; interests: string[] },
) {
  const count = options.span === "half" ? 2 : options.span === "two" ? 6 : 4;
  const base = destinations.find((destination) => destination.slug === options.base);
  const origin = base ?? { latitude: 46.22, longitude: -62.55 };
  const neighbours = new Set(base?.nearby ?? []);

  const ranked = places
    .filter((place) => place.category !== "scenic-drives")
    .map((place) => {
      const overlap = place.interests.filter((interest) => options.interests.includes(interest)).length;
      let score = options.interests.length === 0 ? 1 : overlap * 4;
      if (options.interests.length > 0 && overlap === 0) score -= 6;
      if (base && place.destinationSlug === base.slug) score += 5;
      else if (neighbours.has(place.destinationSlug)) score += 2;
      if (place.featured) score += 0.5;
      return { place, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.place.name.localeCompare(b.place.name));

  const pool = ranked.slice(0, Math.max(count * 3, count)).map((item) => item.place);
  const remaining = [...pool];
  const route: T[] = [];
  let cursor = origin;

  while (route.length < count && remaining.length > 0) {
    remaining.sort((a, b) => distanceKm(cursor, a) - distanceKm(cursor, b));
    const next = remaining.shift();
    if (!next) break;
    route.push(next);
    cursor = next;
  }

  return route;
}
