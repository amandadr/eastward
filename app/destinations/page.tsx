import { DestinationCard, PlaceCard } from "@/components/cards";
import { FaqList } from "@/components/faq-list";
import { RegionMap } from "@/components/region-map";
import { Button, Container, Eyebrow } from "@/components/ui";
import { faqs, getDestinations, getPlaces } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Destinations",
  description:
    "Communities east of Charlottetown, from St. Peters Bay and Souris to Georgetown, Murray River, and Wood Islands.",
  path: "/destinations",
});

export default function DestinationsPage() {
  const destinations = getDestinations();
  const harbours = getPlaces().filter((place) => place.category === "harbours").slice(0, 3);
  const culture = getPlaces().filter((place) => place.category === "culture").slice(0, 3);

  return (
    <>
      <section className="border-b border-dune bg-cream px-5 py-14 md:py-20">
        <Container>
          <Eyebrow>Destinations</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-ocean md:text-6xl">
            The communities east of Charlottetown
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">
            Each community in this guide has its own harbour, beach, or reason to stop. Pick a base, then branch out. Nothing here is more than an easy drive from the next town.
          </p>
        </Container>
      </section>

      <section className="px-5 py-12">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <RegionMap
            pins={destinations.map((destination) => ({
              slug: destination.slug,
              name: destination.name,
              x: destination.map.x,
              y: destination.map.y,
              label: destination.map.label,
            }))}
          />
          <div>
            <h2 className="font-display text-3xl text-ocean">Browse by community</h2>
            <p className="mt-3 leading-7 text-ink/75">
              The map is a sketch of the east end. Open a town for the places, the practical notes, and Google Maps for finding, directions, and more info.
            </p>
            <ul className="mt-5 divide-y divide-dune">
              {destinations.map((destination) => (
                <li key={destination.slug} className="py-3">
                  <a href={`/destinations/${destination.slug}`} className="font-medium text-ocean hover:text-sandstone-deep">
                    {destination.name}
                  </a>
                  <p className="text-sm text-ink/65">{destination.tagline}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-cream px-5 py-14">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <li key={destination.slug}>
                <DestinationCard
                  href={`/destinations/${destination.slug}`}
                  name={destination.name}
                  tagline={destination.tagline}
                  summary={destination.summary}
                  photo={destination.photo}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="px-5 py-14">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Harbours</Eyebrow>
            <h2 className="mt-3 font-display text-4xl text-ocean">Working water, close to the street</h2>
            <p className="mt-3 leading-7 text-ink/75">
              The boats come into Souris, Georgetown, and the south-shore harbours. Oysters, chowder, and the catch show up where the wharves are, on the days the kitchens are open.
            </p>
          </div>
          <div>
            <Eyebrow>Culture</Eyebrow>
            <h2 className="mt-3 font-display text-4xl text-ocean">Stages, stations, and one French settlement</h2>
            <p className="mt-3 leading-7 text-ink/75">
              A community theatre in Georgetown, a railway museum at Elmira, a fiddle festival at Rollo Bay, and the Roma site where the rivers meet. All of them are seasonal.
            </p>
          </div>
        </Container>
        <Container className="mt-8 grid gap-5 md:grid-cols-3">
          {[...harbours, ...culture].map((place) => (
            <PlaceCard
              key={place.slug}
              href={`/places/${place.slug}`}
              name={place.name}
              summary={place.summary}
              kicker={place.categoryName}
              meta={place.destinationName}
              photo={place.photo}
            />
          ))}
        </Container>
      </section>

      <section className="bg-ocean px-5 py-14 text-foam">
        <Container className="grid gap-8 md:grid-cols-3">
          <Stat value={String(destinations.length)} label="Communities in this guide" />
          <Stat value={String(getPlaces().length)} label="Places you can open and plan around" />
          <Stat value="Under an hour" label="Between most of these towns" />
        </Container>
      </section>

      <section className="px-5 py-14">
        <Container className="max-w-3xl">
          <h2 className="font-display text-4xl text-ocean">Straight answers</h2>
          <div className="mt-6">
            <FaqList items={faqs.slice(0, 5)} />
          </div>
          <div className="mt-8">
            <Button href="/plan">Plan your route</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl text-gold">{value}</p>
      <p className="mt-2 text-sm leading-6 text-foam/75">{label}</p>
    </div>
  );
}
