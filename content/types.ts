export type SeasonId = "spring" | "summer" | "fall" | "winter";

export type Photo = {
  src: string;
  alt: string;
  credit: string;
  /** Set together when the picture is under a public licence. */
  license?: string;
  licenseUrl?: string;
  sourceUrl?: string;
  /** CSS object-position, used when a portrait is cropped into a landscape frame. */
  focus?: string;
};

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  latitude: number;
  longitude: number;
  map: { x: number; y: number; label?: "left" | "right" };
  photo: string | null;
  gettingThere: string;
  staying: string;
  nearby: string[];
};

export type Place = {
  slug: string;
  name: string;
  category: string;
  interests: string[];
  destinationSlug: string;
  summary: string;
  description: string;
  seasons: SeasonId[];
  duration: string;
  goodFor: string[];
  access: string;
  latitude: number;
  longitude: number;
  locality: string;
  photo: string | null;
  featured: boolean;
  highlights: string[];
};

export type ItineraryStop = {
  placeSlug: string;
  day: number;
  note: string;
};

export type Itinerary = {
  slug: string;
  name: string;
  summary: string;
  duration: string;
  base: string;
  seasons: SeasonId[];
  stops: ItineraryStop[];
};

export type Term = {
  slug: string;
  name: string;
  summary: string;
};

export type Season = {
  id: SeasonId;
  name: string;
  months: string;
  summary: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type PlaceView = Omit<Place, "photo"> & {
  destinationName: string;
  categoryName: string;
  photo: Photo | null;
};

export type Filters = {
  q?: string;
  category?: string;
  destination?: string;
  season?: string;
  interest?: string;
};
