import type { MetadataRoute } from "next";
import { categories, getDestinations, getPlaces, interests, itineraries } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/explore",
    "/destinations",
    "/things-to-do",
    "/plan",
    "/plan/build-your-day",
    "/about",
    ...categories.map((category) => `/explore/${category.slug}`),
    ...getPlaces().map((place) => `/places/${place.slug}`),
    ...getDestinations().map((destination) => `/destinations/${destination.slug}`),
    ...interests.map((interest) => `/things-to-do/${interest.slug}`),
    ...itineraries.map((itinerary) => `/plan/itineraries/${itinerary.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
