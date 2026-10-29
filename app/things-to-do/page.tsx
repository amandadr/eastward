import Link from "next/link";
import { PlaceCard } from "@/components/cards";
import { Button, Container, Eyebrow } from "@/components/ui";
import { getPlaces, interests } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Things to do",
  description:
    "Coastal days, park walks, harbour food, music, family stops, and scenic drives in Eastern PEI.",
  path: "/things-to-do",
});

const groups = [
  { interest: "outdoor-recreation", eyebrow: "Outdoors", title: "Beaches, trails, and park walks" },
  { interest: "food-and-drink", eyebrow: "Food", title: "Where a meal fits the stop you are already making" },
  { interest: "arts-and-culture", eyebrow: "Culture", title: "Music, museums, and a theatre" },
];

export default function ThingsToDoPage() {
  const places = getPlaces();

  return (
    <>
      <section className="border-b border-dune bg-cream px-5 py-14 md:py-20">
        <Container>
          <Eyebrow>Things to do</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-ocean md:text-6xl">
            Choose the day, then the places that fit it
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">
            These pages group the same directory by interest. They are not tickets, tours, or a booking calendar.
          </p>
        </Container>
      </section>

      <section className="px-5 py-12">
        <Container className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest) => {
            const count = places.filter((place) => place.interests.includes(interest.slug)).length;
            return (
              <Link
                key={interest.slug}
                href={`/things-to-do/${interest.slug}`}
                className="rounded-3xl bg-white p-6 ring-1 ring-dune hover:ring-sandstone"
              >
                <h2 className="font-display text-3xl text-ocean">{interest.name}</h2>
                <p className="mt-2 text-sm leading-6 text-ink/75">{interest.summary}</p>
                <p className="mt-4 text-sm text-sandstone">{count} places</p>
              </Link>
            );
          })}
        </Container>
      </section>

      {groups.map((group) => {
        const list = places.filter((place) => place.interests.includes(group.interest)).slice(0, 3);
        return (
          <section key={group.interest} className="px-5 pb-12">
            <Container>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Eyebrow>{group.eyebrow}</Eyebrow>
                  <h2 className="mt-2 font-display text-3xl text-ocean">{group.title}</h2>
                </div>
                <Button href={`/things-to-do/${group.interest}`} variant="ghost">
                  View all
                </Button>
              </div>
              <ul className="mt-6 grid gap-5 md:grid-cols-3">
                {list.map((place) => (
                  <li key={place.slug}>
                    <PlaceCard
                      href={`/places/${place.slug}`}
                      name={place.name}
                      summary={place.summary}
                      kicker={place.destinationName}
                      meta={place.duration}
                      photo={place.photo}
                    />
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}
    </>
  );
}
