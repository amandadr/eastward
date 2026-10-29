import * as catalog from "@/content/catalog.mjs";
import type {
  Destination,
  Faq,
  Itinerary,
  Photo,
  Place,
  PlaceView,
  Season,
  Term,
} from "@/content/types";
import { validateCatalog } from "@/content/validate.mjs";

validateCatalog(catalog);

const destinations = catalog.destinations as Destination[];
const places = catalog.places as Place[];
const photos = catalog.photos as Record<string, Photo>;

export const categories = catalog.categories as Term[];
export const interests = catalog.interests as Term[];
export const seasons = catalog.seasons as Season[];
export const faqs = catalog.faqs as Faq[];
export const planningSteps = catalog.planningSteps as { title: string; text: string }[];
export const stayTypes = catalog.stayTypes as { title: string; text: string }[];
export const gettingHere = catalog.gettingHere as { title: string; text: string }[];
export const itineraries = catalog.itineraries as Itinerary[];

export function getPhoto(key: string | null): Photo | null {
  if (!key) return null;
  return photos[key] ?? null;
}

export function getDestinations() {
  return destinations.map((destination) => ({
    ...destination,
    photo: getPhoto(destination.photo),
  }));
}

export function getDestination(slug: string) {
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return undefined;
  return { ...destination, photo: getPhoto(destination.photo) };
}

function toView(place: Place): PlaceView {
  const destination = destinations.find((item) => item.slug === place.destinationSlug);
  const category = categories.find((item) => item.slug === place.category);
  return {
    ...place,
    destinationName: destination?.name ?? place.locality,
    categoryName: category?.name ?? place.category,
    photo: getPhoto(place.photo),
  };
}

export function getPlaces() {
  return places.map(toView);
}

export function getPlace(slug: string) {
  const place = places.find((item) => item.slug === slug);
  return place ? toView(place) : undefined;
}

export function getPlacesForDestination(slug: string) {
  return getPlaces().filter((place) => place.destinationSlug === slug);
}

export function getPlacesForInterest(slug: string) {
  return getPlaces().filter((place) => place.interests.includes(slug));
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getInterest(slug: string) {
  return interests.find((interest) => interest.slug === slug);
}

export function getItinerary(slug: string) {
  return itineraries.find((itinerary) => itinerary.slug === slug);
}

export function getItinerariesForPlace(slug: string) {
  return itineraries.filter((itinerary) =>
    itinerary.stops.some((stop) => stop.placeSlug === slug),
  );
}

export function photoCredits() {
  return Object.entries(photos).map(([id, photo]) => ({ id, ...photo }));
}
