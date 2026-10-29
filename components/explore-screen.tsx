import { ListingExplorer } from "@/components/listing-explorer";
import { Breadcrumbs, Container, Eyebrow } from "@/components/ui";
import { categories, getDestinations, getPlaces } from "@/lib/content";

export function ExploreScreen({
  title,
  lede,
  category,
  query,
  destination,
  season,
}: {
  title: string;
  lede: string;
  category?: string;
  query: string;
  destination: string;
  season: string;
}) {
  const destinations = getDestinations();

  return (
    <>
      <section className="border-b border-dune bg-cream px-5 py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={
              category
                ? [
                    { href: "/explore", label: "Explore" },
                    { label: title },
                  ]
                : [{ label: "Explore" }]
            }
          />
          <Eyebrow>Directory</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-ocean md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">{lede}</p>
        </Container>
      </section>
      <section className="px-5 py-10 md:py-14">
        <Container>
          <ListingExplorer
            places={getPlaces()}
            categories={categories}
            destinations={destinations.map((item) => ({ slug: item.slug, name: item.name }))}
            category={category}
            initialQuery={query}
            initialDestination={destination}
            initialSeason={season}
          />
        </Container>
      </section>
    </>
  );
}
