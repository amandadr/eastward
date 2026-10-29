import { BuildYourDay } from "@/components/build-your-day";
import { Breadcrumbs, Container, Eyebrow } from "@/components/ui";
import { getDestinations, getPlaces, interests } from "@/lib/content";
import { many, one } from "@/lib/params";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Build your day",
  description: "Draft a half day, a full day, or two days in Eastern PEI from a base and a few interests.",
  path: "/plan/build-your-day",
});

const spans = new Set(["half", "day", "two"]);

export default async function BuildYourDayPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const spanValue = one(params.span);
  const span = spans.has(spanValue) ? (spanValue as "half" | "day" | "two") : "day";
  const known = new Set(interests.map((interest) => interest.slug));
  const selected = many(params.interest).filter((interest) => known.has(interest));

  return (
    <>
      <section className="border-b border-dune bg-cream px-5 py-12">
        <Container>
          <Breadcrumbs items={[{ href: "/plan", label: "Plan your trip" }, { label: "Build your day" }]} />
          <Eyebrow>Build your day</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-ocean">A list that fits the time you have</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">
            Choose a base, a pace, and what you care about. Eastward orders places from this guide into a rough driving sequence.
          </p>
        </Container>
      </section>
      <section className="px-5 py-10">
        <Container>
          <BuildYourDay
            places={getPlaces()}
            destinations={getDestinations()}
            interests={interests}
            initial={{ base: one(params.base), span, interests: selected }}
          />
        </Container>
      </section>
    </>
  );
}
