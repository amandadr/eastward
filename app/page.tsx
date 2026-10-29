import Link from "next/link";
import { DestinationCard, PlaceCard } from "@/components/cards";
import { PhotoFrame } from "@/components/photo-frame";
import { Button, Container, Eyebrow } from "@/components/ui";
import { getDestinations, getPhoto, getPlaces, interests, seasons } from "@/lib/content";

export default function HomePage() {
  const places = getPlaces().filter((place) => place.featured).slice(0, 6);
  const destinations = getDestinations().slice(0, 6);
  const hero = getPhoto("basin-head-fields");
  const gallery = [
    getPhoto("basin-head-cliffs"),
    getPhoto("souris-harbour"),
    getPhoto("georgetown"),
    getPhoto("panmure"),
    getPhoto("east-point"),
    getPhoto("wood-islands"),
  ].filter((photo) => photo !== null);

  return (
    <>
      <section className="relative min-h-[88vh] bg-ocean">
        {hero ? (
          <div className="absolute inset-0">
            <PhotoFrame photo={hero} label="Eastern PEI" priority sizes="100vw" className="h-full w-full" />
          </div>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/80 via-ocean-deep/35 to-transparent" />
        <Container className="relative flex min-h-[88vh] items-end px-5 py-12 md:py-16">
          <div className="max-w-xl rounded-[2rem] bg-foam/95 p-7 shadow-card md:p-10">
            <Eyebrow>Eastern Prince Edward Island</Eyebrow>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] text-ocean md:text-6xl">
              Find the quiet side of Prince Edward Island
            </h1>
            <p className="mt-4 text-lg leading-8 text-ink/80">
              Eastward is an independent guide to the beaches, fishing harbours, and red-dirt roads east of Charlottetown. Find a place, pick a community, and plan the day.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/explore">Explore the region</Button>
              <Button href="/plan" variant="secondary">
                Plan your trip
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="px-5 py-16 md:py-20">
        <Container>
          <Eyebrow>Three ways in</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-ocean md:text-5xl">
            Start with the coast, a community, or a kind of day.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Way
              href="/destinations"
              photo={getPhoto("georgetown")}
              kicker="Communities"
              title="Towns with a harbour at the end of the street"
              text="Souris, Georgetown, Montague, and the smaller villages between them."
            />
            <Way
              href="/explore/beaches"
              photo={getPhoto("basin-head-cliffs")}
              kicker="Coast"
              title="Red cliffs, singing sand, and quieter stretches"
              text="Basin Head, Greenwich, Panmure, and the beaches that do not make the poster."
            />
            <Way
              href="/things-to-do"
              photo={getPhoto("souris-harbour")}
              kicker="Things to do"
              title="Harbours, food, music, and a day on the road"
              text="Browse by what you want the day to feel like, then open the places."
            />
          </div>
        </Container>
      </section>

      <section className="bg-cream px-5 py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Places</Eyebrow>
              <h2 className="mt-3 font-display text-4xl text-ocean">Worth the drive</h2>
            </div>
            <Button href="/explore" variant="secondary">
              View the directory
            </Button>
          </div>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
        </Container>
      </section>

      <section className="px-5 py-16 md:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>The east end</Eyebrow>
            <h2 className="mt-3 font-display text-4xl text-ocean md:text-5xl">
              Shorter distances. Fewer reasons to hurry.
            </h2>
            <p className="mt-4 text-lg leading-8 text-ink/80">
              East of Charlottetown the towns are small, the roads are two lanes, and a day is a cluster of stops rather than a tour. Eastward is a directory for that kind of trip.
            </p>
            <ul className="mt-6 space-y-4">
              <Point title="Working harbours" text="Souris and Georgetown still run on boats. Walk the wharf before you look for lunch." />
              <Point title="Beaches with different jobs" text="Greenwich and Basin Head are the known ones. Cable Head and the in-town beaches cover the rest of a week." />
              <Point title="Lights at the corners" text="Point Prim, Wood Islands, Cape Bear, Panmure, and East Point mark the turns in the coast." />
            </ul>
            <div className="mt-6">
              <Button href="/destinations" variant="dark">
                Explore the area
              </Button>
            </div>
          </div>
          <PhotoFrame photo={getPhoto("georgetown-harbour")} label="Georgetown harbour" className="aspect-[4/5] rounded-[2rem]" />
        </Container>
      </section>

      <section className="bg-ocean px-5 py-16 text-foam md:py-20">
        <Container>
          <Eyebrow>How to go east</Eyebrow>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Three steps, then the island.</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Choose a base", "Montague for the rivers, Souris for the tip, Georgetown for the harbour.", "/destinations"],
              ["Build the day", "Pick a pace and a couple of interests. The guide drafts a driveable list.", "/plan/build-your-day"],
              ["Check the season", "Ferries, park fees, and kitchens all change between June and October.", "/plan#seasons"],
            ].map(([title, text, href], index) => (
              <li key={title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <p className="text-sm text-gold">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-foam/75">{text}</p>
                <Link href={href} className="mt-4 inline-block text-sm underline decoration-gold/70 underline-offset-4">
                  Continue
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="px-5 py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Communities</Eyebrow>
              <h2 className="mt-3 font-display text-4xl text-ocean">Where to point the car</h2>
            </div>
            <Button href="/destinations" variant="ghost">
              All destinations
            </Button>
          </div>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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

      <section className="bg-cream px-5 py-16 md:py-20">
        <Container>
          <Eyebrow>Seasons</Eyebrow>
          <h2 className="mt-3 font-display text-4xl text-ocean">The east changes more than the brochure suggests</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {seasons.map((season) => (
              <li key={season.id} className="rounded-3xl bg-foam p-5 ring-1 ring-dune">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sandstone">{season.months}</p>
                <h3 className="mt-2 font-display text-2xl text-ocean">{season.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/75">{season.summary}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="px-5 py-16 md:py-20">
        <Container>
          <Eyebrow>Interests</Eyebrow>
          <h2 className="mt-3 font-display text-4xl text-ocean">What the day is for</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest) => (
              <li key={interest.slug}>
                <Link href={`/things-to-do/${interest.slug}`} className="block h-full rounded-3xl bg-white p-6 ring-1 ring-dune hover:ring-sandstone">
                  <h3 className="font-display text-2xl text-ocean">{interest.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/75">{interest.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="px-5 pb-16">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo) =>
              photo ? (
                <figure key={photo.src} className="overflow-hidden rounded-[1.5rem]">
                  <PhotoFrame photo={photo} label="" className="aspect-[4/3]" />
                </figure>
              ) : null,
            )}
          </div>
          <p className="mt-4 text-sm text-ink/60">
            <Link href="/about#photos" className="underline decoration-dune underline-offset-4">
              Photograph credits
            </Link>
          </p>
        </Container>
      </section>

      <section className="px-5 pb-20">
        <Container className="rounded-[2rem] bg-sandstone px-6 py-12 text-white md:px-12">
          <h2 className="max-w-2xl font-display text-4xl md:text-5xl">Plan the day before you get in the car.</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/85">
            Pick a base, a pace, and what you care about. Eastward will line up places from this guide. It will not book them.
          </p>
          <div className="mt-6">
            <Button href="/plan/build-your-day" variant="secondary">
              Build your day
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function Way({
  href,
  photo,
  kicker,
  title,
  text,
}: {
  href: string;
  photo: ReturnType<typeof getPhoto>;
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <Link href={href} className="group overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-dune">
      <PhotoFrame photo={photo} label={kicker} className="aspect-[4/3]" />
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sandstone">{kicker}</p>
        <h3 className="mt-2 font-display text-2xl leading-tight text-ocean group-hover:text-sandstone-deep">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-ink/75">{text}</p>
      </div>
    </Link>
  );
}

function Point({ title, text }: { title: string; text: string }) {
  return (
    <li>
      <h3 className="font-display text-xl text-ocean">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-ink/75">{text}</p>
    </li>
  );
}
