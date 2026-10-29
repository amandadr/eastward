import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaceCard } from "@/components/cards";
import { PhotoCredit, PhotoFrame } from "@/components/photo-frame";
import { GoogleMap } from "@/components/google-map";
import { Breadcrumbs, Button, Container, Eyebrow, JsonLd } from "@/components/ui";
import { getItinerariesForPlace, getPlace, getPlaces, interests } from "@/lib/content";
import { nearbyPlaces } from "@/lib/filters";
import { placeQuery } from "@/lib/geo";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getPlaces().map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = getPlace(slug);
  if (!place) return {};
  return pageMeta({
    title: place.name,
    description: place.summary,
    path: `/places/${place.slug}`,
    image: place.photo?.src,
  });
}

export default async function PlacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = getPlace(slug);
  if (!place) notFound();

  const places = getPlaces();
  const nearby = nearbyPlaces(place, places, 3);
  const relatedInterests = interests.filter((interest) => place.interests.includes(interest.slug));
  const routes = getItinerariesForPlace(place.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: place.name,
    description: place.summary,
    url: `${site.url}/places/${place.slug}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: place.latitude,
      longitude: place.longitude,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: place.locality,
      addressRegion: "PE",
      addressCountry: "CA",
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Eastern Prince Edward Island",
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-dune bg-cream">
        <Container className="grid gap-8 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Breadcrumbs
              items={[
                { href: "/explore", label: "Explore" },
                { href: `/explore/${place.category}`, label: place.categoryName },
                { label: place.name },
              ]}
            />
            <Eyebrow>{place.categoryName}</Eyebrow>
            <h1 className="mt-3 font-display text-5xl text-ocean md:text-6xl">{place.name}</h1>
            <p className="mt-4 text-lg leading-8 text-ink/80">{place.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#map">View on map</Button>
              <Button href={`/destinations/${place.destinationSlug}`} variant="secondary">
                Explore the area
              </Button>
              <Button href={`/plan/build-your-day?base=${place.destinationSlug}`} variant="ghost">
                Plan your visit
              </Button>
            </div>
          </div>
          <figure>
            <PhotoFrame photo={place.photo} label={place.name} priority className="aspect-[4/3] rounded-[2rem]" />
            {place.photo ? (
              <figcaption className="mt-2">
                <PhotoCredit photo={place.photo} />
              </figcaption>
            ) : null}
          </figure>
        </Container>
      </section>

      <section className="px-5 py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>
            <h2 className="font-display text-3xl text-ocean">What to expect</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/80">{place.description}</p>
            <h3 className="mt-8 font-display text-2xl text-ocean">Highlights</h3>
            <ul className="mt-3 space-y-2">
              {place.highlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl bg-cream px-4 py-3 text-ink/80">
                  {highlight}
                </li>
              ))}
            </ul>
            {relatedInterests.length > 0 ? (
              <p className="mt-6 text-sm text-ink/70">
                Also browse{" "}
                {relatedInterests.map((interest, index) => (
                  <span key={interest.slug}>
                    {index > 0 ? ", " : ""}
                    <Link href={`/things-to-do/${interest.slug}`} className="text-ocean underline">
                      {interest.name.toLowerCase()}
                    </Link>
                  </span>
                ))}
                .
              </p>
            ) : null}
          </div>
          <aside className="h-max rounded-3xl bg-white p-5 ring-1 ring-dune">
            <h2 className="font-display text-2xl text-ocean">Practical</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <Fact term="Time to allow" value={place.duration} />
              <Fact term="Community" value={place.destinationName} />
              <Fact term="Good for" value={place.goodFor.join(", ")} />
              <Fact term="Seasons" value={place.seasons.join(", ")} />
            </dl>
            <p className="mt-4 text-sm leading-6 text-ink/75">{place.access}</p>
            <p className="mt-4 text-xs leading-5 text-ink/55">
              Hours, fees, and services change by season. Confirm details before a trip that depends on them. Eastward does not take bookings.
            </p>
          </aside>
        </Container>
      </section>

      <section id="map" className="scroll-mt-24 bg-cream px-5 py-12">
        <Container className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <GoogleMap
            query={placeQuery(place.name, place.locality)}
            zoom={15}
            title={`Map showing ${place.name}`}
          />
          <div>
            <h2 className="font-display text-3xl text-ocean">Find it</h2>
            <p className="mt-3 leading-7 text-ink/75">
              {place.locality}, Prince Edward Island. The pin is for orientation. Follow posted signs for parking and access.
            </p>
          </div>
        </Container>
      </section>

      <section className="px-5 py-12">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-ocean">Discover nearby</h2>
            <Button href={`/explore?destination=${place.destinationSlug}`} variant="ghost">
              More in {place.destinationName}
            </Button>
          </div>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {nearby.map((item) => (
              <li key={item.slug}>
                <PlaceCard
                  href={`/places/${item.slug}`}
                  name={item.name}
                  summary={item.summary}
                  kicker={item.categoryName}
                  meta={`${item.destinationName} · ${item.duration}`}
                  photo={item.photo}
                />
              </li>
            ))}
          </ul>
          {routes.length > 0 ? (
            <div className="mt-10">
              <h2 className="font-display text-2xl text-ocean">On these routes</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {routes.map((route) => (
                  <li key={route.slug}>
                    <Link href={`/plan/itineraries/${route.slug}`} className="block rounded-3xl bg-white p-5 ring-1 ring-dune">
                      <p className="text-xs uppercase tracking-[0.16em] text-sandstone">{route.duration}</p>
                      <h3 className="mt-1 font-display text-2xl text-ocean">{route.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-ink/75">{route.summary}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}

function Fact({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">{term}</dt>
      <dd className="mt-1 text-ink">{value}</dd>
    </div>
  );
}
