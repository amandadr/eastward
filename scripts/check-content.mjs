import * as catalog from "../content/catalog.mjs";
import { validateCatalog } from "../content/validate.mjs";

validateCatalog(catalog);
console.log(
  `ok ${catalog.places.length} places, ${catalog.destinations.length} destinations, ${catalog.itineraries.length} itineraries`,
);
