declare module "@/content/catalog.mjs" {
  export const destinations: Array<{
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
  }>;
  export const places: Array<{
    slug: string;
    name: string;
    category: string;
    interests: string[];
    destinationSlug: string;
    summary: string;
    description: string;
    seasons: Array<"spring" | "summer" | "fall" | "winter">;
    duration: string;
    goodFor: string[];
    access: string;
    latitude: number;
    longitude: number;
    locality: string;
    photo: string | null;
    featured: boolean;
    highlights: string[];
  }>;
  export const photos: Record<
    string,
    {
      src: string;
      alt: string;
      credit: string;
      license?: string;
      licenseUrl?: string;
      sourceUrl?: string;
      focus?: string;
    }
  >;
  export const categories: Array<{ slug: string; name: string; summary: string }>;
  export const interests: Array<{ slug: string; name: string; summary: string }>;
  export const seasons: Array<{
    id: "spring" | "summer" | "fall" | "winter";
    name: string;
    months: string;
    summary: string;
  }>;
  export const itineraries: Array<{
    slug: string;
    name: string;
    summary: string;
    duration: string;
    base: string;
    seasons: Array<"spring" | "summer" | "fall" | "winter">;
    stops: Array<{ placeSlug: string; day: number; note: string }>;
  }>;
  export const faqs: Array<{ question: string; answer: string }>;
  export const planningSteps: Array<{ title: string; text: string }>;
  export const stayTypes: Array<{ title: string; text: string }>;
  export const gettingHere: Array<{ title: string; text: string }>;
}

declare module "@/content/validate.mjs" {
  export function validateCatalog(catalog: {
    destinations: Array<{
      slug: string;
      photo: string | null;
      summary: string;
      description: string;
      nearby: string[];
    }>;
    places: Array<{
      slug: string;
      destinationSlug: string;
      category: string;
      interests: string[];
      seasons: string[];
      photo: string | null;
      latitude: number;
      longitude: number;
      summary: string;
      description: string;
      highlights?: string[];
    }>;
    photos: Record<string, Record<string, string>>;
    categories: Array<{ slug: string }>;
    interests: Array<{ slug: string }>;
    itineraries: Array<{ slug: string; base: string; stops: Array<{ placeSlug: string }> }>;
  }): void;
}
