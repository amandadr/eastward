type Point = { latitude: number; longitude: number };

export function distanceKm(a: Point, b: Point) {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const earth = 6371;
  const dLat = toRad(b.latitude - a.latitude);
  const dLon = toRad(b.longitude - a.longitude);
  const lat1 = toRad(a.latitude);
  const lat2 = toRad(b.latitude);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * earth * Math.asin(Math.min(1, Math.sqrt(h)));
}

/** Query string that helps Google match the real listing for a place. */
export function placeQuery(name: string, locality: string) {
  return `${name}, ${locality}, Prince Edward Island, Canada`;
}

/** Query string that helps Google match a destination community. */
export function destinationQuery(name: string) {
  return `${name}, Prince Edward Island, Canada`;
}

export function googleMapsEmbed(query: string, zoom: number) {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  if (!key) return null;
  const params = new URLSearchParams({
    key,
    q: query,
    zoom: String(zoom),
  });
  return `https://www.google.com/maps/embed/v1/place?${params.toString()}`;
}

export function googleMapsSearch(query: string) {
  const params = new URLSearchParams({
    api: "1",
    query,
  });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}

export function googleMapsDirections(query: string) {
  const params = new URLSearchParams({
    api: "1",
    destination: query,
    travelmode: "driving",
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export function googleMapsInfo(query: string) {
  const params = new URLSearchParams({ q: query });
  return `https://www.google.com/search?${params.toString()}`;
}

export function driveNote(km: number) {
  if (km < 3) return "A few minutes away, in the same area.";
  const road = Math.max(1, Math.round(km * 1.35));
  const minutes = Math.max(5, Math.round((road / 70) * 60));
  return `About ${road} km by road, roughly ${minutes} minutes. That is an estimate, not turn-by-turn.`;
}
