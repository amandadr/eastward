import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { InquiryForm } from "@/components/inquiry-form";
import { Button, Container, Eyebrow, JsonLd } from "@/components/ui";
import { faqs, gettingHere, getDestination, getPlace, itineraries, planningSteps, seasons, stayTypes } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Plan your trip",
  description:
    "Seasonal timing, ferries, where to base yourself, and ready-made routes for Eastern Prince Edward Island.",
  path: "/plan",
});

export default function PlanPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    url: `${site.url}/plan`,
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <section className="border-b border-dune bg-cream px-5 py-14 md:py-20">
        <Container>
          <Eyebrow>Plan your trip</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-ocean md:text-6xl">
            Seasonal timing, short drives, and a day you can actually keep
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">
            Eastward is a planning guide, not a travel agency. Use it to choose a base, pace a day, and know what to confirm before you leave.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/plan/build-your-day">Build your day</Button>
            <Button href="#itineraries" variant="secondary">
              See itineraries
            </Button>
          </div>
        </Container>
      </section>

      <section className="px-5 py-14">
        <Container>
          <h2 className="font-display text-4xl text-ocean">Four steps</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {planningSteps.map((step, index) => (
              <li key={step.title} className="rounded-3xl bg-white p-5 ring-1 ring-dune">
                <p className="text-sm text-sandstone">0{index + 1}</p>
                <h3 className="mt-2 font-display text-2xl text-ocean">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="seasons" className="scroll-mt-24 bg-ocean px-5 py-14 text-foam">
        <Container>
          <h2 className="font-display text-4xl">When the east end shows its best face</h2>
          <p className="mt-3 max-w-2xl text-foam/75">
            The water warms late. The crowds at the two famous beaches leave earlier than you might think. Here is the shape of the year.
          </p>
          <ol className="mt-8 space-y-4">
            {seasons.map((season) => (
              <li key={season.id} className="grid gap-2 border-t border-white/15 py-4 md:grid-cols-[10rem_12rem_1fr]">
                <p className="text-gold">{season.months}</p>
                <h3 className="font-display text-2xl">{season.name}</h3>
                <p className="text-sm leading-6 text-foam/80">{season.summary}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="getting-here" className="scroll-mt-24 px-5 py-14">
        <Container>
          <Eyebrow>Getting here</Eyebrow>
          <h2 className="mt-3 font-display text-4xl text-ocean">Bridge, ferry, or a flight into Charlottetown</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {gettingHere.map((item) => (
              <article key={item.title} className="rounded-3xl bg-cream p-6">
                <h3 className="font-display text-2xl text-ocean">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/75">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="stay" className="scroll-mt-24 bg-cream px-5 py-14">
        <Container>
          <h2 className="font-display text-4xl text-ocean">Where to sleep</h2>
          <p className="mt-3 max-w-2xl text-ink/75">
            Types of stays, not a hotel inventory. Eastward does not list individual inns or take reservations.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {stayTypes.map((item) => (
              <article key={item.title} className="rounded-3xl bg-foam p-6 ring-1 ring-dune">
                <h3 className="font-display text-2xl text-ocean">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/75">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="itineraries" className="scroll-mt-24 px-5 py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Itineraries</Eyebrow>
              <h2 className="mt-3 font-display text-4xl text-ocean">Routes already paced</h2>
            </div>
            <Button href="/plan/build-your-day" variant="secondary">
              Or build your own
            </Button>
          </div>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {itineraries.map((itinerary) => {
              const base = getDestination(itinerary.base);
              return (
                <li key={itinerary.slug}>
                  <Link href={`/plan/itineraries/${itinerary.slug}`} className="block h-full rounded-3xl bg-white p-6 ring-1 ring-dune">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sandstone">
                      {itinerary.duration}
                      {base ? ` · from ${base.name}` : ""}
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-ocean">{itinerary.name}</h3>
                    <p className="mt-2 leading-7 text-ink/75">{itinerary.summary}</p>
                    <p className="mt-4 text-sm text-ocean">
                      {itinerary.stops.length} stops, including {getPlace(itinerary.stops[0].placeSlug)?.name}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="bg-cream px-5 py-14">
        <Container className="max-w-3xl">
          <h2 className="font-display text-4xl text-ocean">Questions people commonly ask</h2>
          <div className="mt-6">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      <section className="px-5 py-14">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl text-ocean">Ask about roads, tides, or where the fish is freshest</h2>
            <p className="mt-3 leading-7 text-ink/75">
              The form shows how a planning question could look. This portfolio demonstration does not deliver messages or store them. See{" "}
              <a href="/about#privacy" className="underline decoration-dune underline-offset-2 hover:decoration-sandstone">
                privacy notes
              </a>
              .
            </p>
          </div>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}
