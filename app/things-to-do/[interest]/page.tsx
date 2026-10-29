import { notFound } from "next/navigation";
import { PlaceCard } from "@/components/cards";
import { Breadcrumbs, Button, Container, Eyebrow } from "@/components/ui";
import { getInterest, getPlacesForInterest, interests, itineraries } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export function generateStaticParams() {
  return interests.map((interest) => ({ interest: interest.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ interest: string }> }) {
  const { interest: slug } = await params;
  const interest = getInterest(slug);
  if (!interest) return {};
  return pageMeta({
    title: interest.name,
    description: interest.summary,
    path: `/things-to-do/${interest.slug}`,
  });
}

export default async function InterestPage({ params }: { params: Promise<{ interest: string }> }) {
  const { interest: slug } = await params;
  const interest = getInterest(slug);
  if (!interest) notFound();
  const places = getPlacesForInterest(interest.slug);
  const routes = itineraries.filter((itinerary) =>
    itinerary.stops.some((stop) => places.some((place) => place.slug === stop.placeSlug)),
  );

  return (
    <>
      <section className="border-b border-dune bg-cream px-5 py-14">
        <Container>
          <Breadcrumbs items={[{ href: "/things-to-do", label: "Things to do" }, { label: interest.name }]} />
          <Eyebrow>Things to do</Eyebrow>
          <h1 className="mt-3 font-display text-5xl text-ocean md:text-6xl">{interest.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">{interest.summary}</p>
          <div className="mt-6">
            <Button href={`/plan/build-your-day?interest=${interest.slug}`}>Build a day around this</Button>
          </div>
        </Container>
      </section>
      <section className="px-5 py-12">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {places.map((place) => (
              <li key={place.slug}>
                <PlaceCard
                  href={`/places/${place.slug}`}
                  name={place.name}
                  summary={place.summary}
                  kicker={place.categoryName}
                  meta={`${place.destinationName} · ${place.duration}`}
                  photo={place.photo}
                />
              </li>
            ))}
          </ul>
          {routes.length > 0 ? (
            <div className="mt-12">
              <h2 className="font-display text-3xl text-ocean">Routes that use these stops</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {routes.slice(0, 4).map((route) => (
                  <li key={route.slug}>
                    <Link href={`/plan/itineraries/${route.slug}`} className="block rounded-3xl bg-white p-5 ring-1 ring-dune">
                      <h3 className="font-display text-2xl text-ocean">{route.name}</h3>
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
