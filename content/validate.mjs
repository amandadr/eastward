const SEASONS = new Set(["spring", "summer", "fall", "winter"]);

export function validateCatalog(catalog) {
  const errors = [];
  const destSlugs = new Set();
  const placeSlugs = new Set();
  const categorySlugs = new Set(catalog.categories.map((category) => category.slug));
  const interestSlugs = new Set(catalog.interests.map((interest) => interest.slug));

  for (const destination of catalog.destinations) {
    if (destSlugs.has(destination.slug)) errors.push(`Duplicate destination ${destination.slug}`);
    destSlugs.add(destination.slug);
    if (destination.photo && !catalog.photos[destination.photo]) {
      errors.push(`Missing photo ${destination.photo} on ${destination.slug}`);
    }
    if (!destination.summary || !destination.description) {
      errors.push(`Thin copy on destination ${destination.slug}`);
    }
  }

  for (const destination of catalog.destinations) {
    for (const slug of destination.nearby) {
      if (!destSlugs.has(slug) || slug === destination.slug) {
        errors.push(`Bad nearby link ${destination.slug} -> ${slug}`);
      }
    }
  }

  for (const place of catalog.places) {
    if (placeSlugs.has(place.slug)) errors.push(`Duplicate place ${place.slug}`);
    placeSlugs.add(place.slug);
    if (!destSlugs.has(place.destinationSlug)) {
      errors.push(`${place.slug} has unknown destination ${place.destinationSlug}`);
    }
    if (!categorySlugs.has(place.category)) errors.push(`${place.slug} has unknown category`);
    if (!place.interests.length) errors.push(`${place.slug} has no interests`);
    for (const interest of place.interests) {
      if (!interestSlugs.has(interest)) errors.push(`${place.slug} has unknown interest ${interest}`);
    }
    for (const season of place.seasons) {
      if (!SEASONS.has(season)) errors.push(`${place.slug} has unknown season ${season}`);
    }
    if (place.photo && !catalog.photos[place.photo]) {
      errors.push(`${place.slug} has missing photo ${place.photo}`);
    }
    if (place.latitude < 45.85 || place.latitude > 46.6) {
      errors.push(`${place.slug} latitude ${place.latitude} is outside eastern PEI`);
    }
    if (place.longitude < -63.15 || place.longitude > -61.85) {
      errors.push(`${place.slug} longitude ${place.longitude} is outside eastern PEI`);
    }
    if (!place.summary || !place.description || !place.highlights?.length) {
      errors.push(`Thin copy on ${place.slug}`);
    }
  }

  for (const itinerary of catalog.itineraries) {
    if (!destSlugs.has(itinerary.base)) errors.push(`${itinerary.slug} has bad base`);
    if (!itinerary.stops.length) errors.push(`${itinerary.slug} has no stops`);
    for (const stop of itinerary.stops) {
      if (!placeSlugs.has(stop.placeSlug)) {
        errors.push(`${itinerary.slug} references missing place ${stop.placeSlug}`);
      }
    }
  }

  for (const photo of Object.values(catalog.photos)) {
    for (const key of ["src", "alt", "credit"]) {
      if (!photo[key]) errors.push(`Photo ${photo.src} missing ${key}`);
    }
    // Creative Commons entries need licence + URL together. sourceUrl alone is fine
    // for credited works that are not under a public licence.
    if (Boolean(photo.license) !== Boolean(photo.licenseUrl)) {
      errors.push(`Photo ${photo.src} has an incomplete licence`);
    }
  }

  if (errors.length) {
    throw new Error(`Eastward content errors:\n${errors.join("\n")}`);
  }
}
