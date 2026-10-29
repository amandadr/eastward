export const site = {
  name: "Eastward",
  description:
    "An independent guide to Eastern Prince Edward Island: beaches, harbours, lighthouses, and small towns east of Charlottetown.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  /** Default Open Graph / Twitter image when a page does not pass its own. */
  shareImage: "/photos/basin-head.jpg",
};
