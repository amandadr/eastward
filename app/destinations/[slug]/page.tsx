import { notFound } from "next/navigation";
import { PlaceCard } from "@/components/cards";
import { FaqList } from "@/components/faq-list";
import { PhotoCredit, PhotoFrame } from "@/components/photo-frame";
import { GoogleMap } from "@/components/google-map";
import { RegionMap } from "@/components/region-map";
import { Breadcrumbs, Button, Container, Eyebrow, JsonLd } from "@/components/ui";
import { faqs, getDestination, getDestinations, getPlacesForDestination } from "@/lib/content";
import { destinationQuery } from "@/lib/geo";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getDestinations().map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  return pageMeta({
    title: destination.name,
    description: destination.summary,
    path: `/destinations/${destination.slug}`,
    image: destination.photo?.src,
  });
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const places = getPlacesForDestination(destination.slug);
  const all = getDestinations();
  const neighbours = destination.nearby
    .map((item) => all.find((candidate) => candidate.slug === item))
    .filter((item) => item !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.summary,
    url: `${site.url}/destinations/${destination.slug}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: destination.latitude,
      longitude: destination.longitude,
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Prince Edward Island",
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-dune bg-cream">
        <Container className="grid gap-8 px-5 py-12 lg:grid-cols-2 lg:items-end">
          <div>
            <Breadcrumbs items={[{ href: "/destinations", label: "Destinations" }, { label: destination.name }]} />
            <Eyebrow>{destination.tagline}</Eyebrow>
            <h1 className="mt-3 font-display text-5xl text-ocean md:text-6xl">{destination.name}</h1>
            <p className="mt-4 text-lg leading-8 text-ink/80">{destination.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`/explore?destination=${destination.slug}`}>Explore the area</Button>
              <Button href="#map" variant="secondary">
                View on map
              </Button>
              <Button href={`/plan/build-your-day?base=${destination.slug}`} variant="ghost">
                Plan your visit
              </Button>
            </div>
          </div>
          <figure>
            <PhotoFrame photo={destination.photo} label={destination.name} priority className="aspect-[4/3] rounded-[2rem]" />
            {destination.photo ? (
              <figcaption className="mt-2">
                <PhotoCredit photo={destination.photo} />
              </figcaption>
            ) : null}
          </figure>
        </Container>
      </section>

      <section className="px-5 py-12">
        <Container>
          <h2 className="font-display text-3xl text-ocean">In and around {destination.name}</h2>
          <ul className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {places.map((place) => (
              <li key={place.slug}>
                <PlaceCard
                  href={`/places/${place.slug}`}
                  name={place.name}
                  summary={place.summary}
                  kicker={place.categoryName}
                  meta={place.duration}
                  photo={place.photo}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-cream px-5 py-12">
        <Container className="grid gap-5 md:grid-cols-3">
          <Note title="Getting there" text={destination.gettingThere} />
          <Note title="Staying" text={destination.staying} />
          <Note title="Nearby" text={neighbours.map((item) => item.name).join(", ")} />
        </Container>
      </section>

      <section id="map" className="scroll-mt-24 px-5 py-12">
        <Container className="grid gap-8 lg:grid-cols-2">
          <RegionMap
            active={destination.slug}
            pins={all.map((item) => ({
              slug: item.slug,
              name: item.name,
              x: item.map.x,
              y: item.map.y,
              label: item.map.label,
            }))}
          />
          <div>
            <h2 className="font-display text-3xl text-ocean">On the ground</h2>
            <p className="mt-3 leading-7 text-ink/75">{destination.gettingThere}</p>
            <div className="mt-5">
              <GoogleMap
                query={destinationQuery(destination.name)}
                zoom={12}
                title={`Map of ${destination.name}`}
                className="h-64 w-full rounded-[1.5rem] border-0 bg-mist"
              />
            </div>
          </div>
        </Container>
      </section>

      {neighbours.length > 0 ? (
        <section className="px-5 pb-4">
          <Container>
            <h2 className="font-display text-3xl text-ocean">Discover nearby</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {neighbours.map((item) => (
                <li key={item.slug}>
                  <Button href={`/destinations/${item.slug}`} variant="secondary">
                    {item.name}
                  </Button>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="px-5 py-12">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl text-ocean">Before you go</h2>
          <div className="mt-4">
            <FaqList items={faqs.slice(0, 4)} />
          </div>
        </Container>
      </section>
    </>
  );
}

function Note({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-foam p-5 ring-1 ring-dune">
      <h3 className="font-display text-2xl text-ocean">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/75">{text}</p>
    </div>
  );
}
