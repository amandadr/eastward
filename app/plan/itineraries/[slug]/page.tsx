import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Button, Container, Eyebrow } from "@/components/ui";
import { getDestination, getItinerary, getPlace, itineraries } from "@/lib/content";
import { distanceKm, driveNote } from "@/lib/geo";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return itineraries.map((itinerary) => ({ slug: itinerary.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const itinerary = getItinerary(slug);
  if (!itinerary) return {};
  return pageMeta({
    title: itinerary.name,
    description: itinerary.summary,
    path: `/plan/itineraries/${itinerary.slug}`,
  });
}

export default async function ItineraryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const itinerary = getItinerary(slug);
  if (!itinerary) notFound();
  const base = getDestination(itinerary.base);
  const days = [...new Set(itinerary.stops.map((stop) => stop.day))];

  return (
    <>
      <section className="border-b border-dune bg-cream px-5 py-12">
        <Container>
          <Breadcrumbs items={[{ href: "/plan", label: "Plan your trip" }, { label: itinerary.name }]} />
          <Eyebrow>{itinerary.duration}</Eyebrow>
          <h1 className="mt-3 font-display text-5xl text-ocean md:text-6xl">{itinerary.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">{itinerary.summary}</p>
          {base ? (
            <p className="mt-4 text-sm text-ink/70">
              Suggested base:{" "}
              <Link href={`/destinations/${base.slug}`} className="text-ocean underline">
                {base.name}
              </Link>
              . {base.gettingThere}
            </p>
          ) : null}
          <div className="mt-6">
            <Button href={`/plan/build-your-day?base=${itinerary.base}&span=${itinerary.duration === "Two days" ? "two" : "day"}`}>
              Adjust this in Build your day
            </Button>
          </div>
        </Container>
      </section>
      <section className="px-5 py-12">
        <Container className="max-w-3xl space-y-10">
          {days.map((day) => (
            <div key={day}>
              <h2 className="font-display text-3xl text-ocean">{days.length > 1 ? `Day ${day}` : "The day"}</h2>
              <ol className="mt-4 space-y-4">
                {itinerary.stops
                  .filter((stop) => stop.day === day)
                  .map((stop, index, list) => {
                    const place = getPlace(stop.placeSlug);
                    if (!place) return null;
                    const previousPlace = index > 0 ? getPlace(list[index - 1].placeSlug) : base;
                    const note = previousPlace ? driveNote(distanceKm(previousPlace, place)) : "";
                    return (
                      <li key={stop.placeSlug} className="rounded-3xl bg-white p-5 ring-1 ring-dune">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sandstone">
                          Stop {index + 1}
                        </p>
                        <h3 className="mt-1 font-display text-2xl text-ocean">
                          <Link href={`/places/${place.slug}`}>{place.name}</Link>
                        </h3>
                        <p className="mt-2 leading-7 text-ink/80">{stop.note}</p>
                        <p className="mt-2 text-sm text-ink/60">
                          {place.destinationName} · {place.duration}
                          {note ? <span className="mt-1 block">{note}</span> : null}
                        </p>
                      </li>
                    );
                  })}
              </ol>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
