import { PhotoCredit } from "@/components/photo-frame";
import { InquiryForm } from "@/components/inquiry-form";
import { Button, Container, Eyebrow } from "@/components/ui";
import { getDestinations, getPlaces, photoCredits } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Eastward",
  description:
    "Eastward is a private portfolio project: an independent guide to Eastern Prince Edward Island. It does not sell placements or bookings.",
  path: "/about",
});

export default function AboutPage() {
  const credits = photoCredits();

  return (
    <>
      <section className="border-b border-dune bg-cream px-5 py-14 md:py-20">
        <Container>
          <Eyebrow>About Eastward</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-ocean md:text-6xl">
            An independent guide to the east end of the Island
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">
            Eastward helps visitors find the coastal landscapes, fishing communities, and small towns of Eastern Prince Edward Island — the part of the province past Charlottetown and Cavendish.
          </p>
          <p className="mt-4 max-w-2xl rounded-3xl bg-foam px-5 py-4 text-base leading-7 text-ink/85 ring-1 ring-dune">
            This is a private portfolio project. It is a personal sample of editorial design and trip-planning UX, not an official tourism site and not a commercial product.
          </p>
        </Container>
      </section>

      <section className="px-5 py-14">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-ocean">A directory, not a magazine</h2>
            <p className="mt-4 leading-8 text-ink/80">
              The site is built for exploration and trip planning. Places, communities, interests, and routes point at each other so you can move from a lighthouse to the harbour next door without starting over.
            </p>
            <p className="mt-4 leading-8 text-ink/80">
              Eastward is not affiliated with Tourism PEI, a tourism association, or any business. No listing is paid for. There are no invented reviews, awards, or partnerships. Hours, fees, and ferry sailings still need checking with the operator before you go.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Fact value={String(getDestinations().length)} label="Communities" />
            <Fact value={String(getPlaces().length)} label="Places in the directory" />
            <Fact value="No" label="Paid placements" />
            <Fact value="No" label="Booking engine" />
          </div>
        </Container>
      </section>

      <section className="bg-cream px-5 py-14">
        <Container className="grid gap-8 md:grid-cols-3">
          <article>
            <h2 className="font-display text-2xl text-ocean">No paid placements</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              A wharf or a beach appears here because it is a real public place in the region, not because someone bought the spot.
            </p>
          </article>
          <article>
            <h2 className="font-display text-2xl text-ocean">Travel lightly</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              The dunes at Greenwich and the cliffs at Basin Head are fragile. Stay on marked paths, pack out what you bring, and give working harbours room to work.
            </p>
          </article>
          <article>
            <h2 className="font-display text-2xl text-ocean">Check before you rely on it</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              Ferry sailings, park fees, museum hours, and kitchen seasons change. The guide describes places. It does not know if they are open this Tuesday.
            </p>
          </article>
        </Container>
      </section>

      <section id="photos" className="scroll-mt-24 px-5 py-14">
        <Container>
          <h2 className="font-display text-4xl text-ocean">Photographs</h2>
          <p className="mt-3 max-w-2xl leading-7 text-ink/75">
            Pictures are of the places they claim to be. Most are used under Creative Commons licences, with credit, licence, and source linked below. A few images are used with credit to the rights holder and are not Creative Commons.
          </p>
          <ul className="mt-6 space-y-3">
            {credits.map((photo) => (
              <li key={photo.id}>
                <PhotoCredit photo={photo} />
                <p className="text-sm text-ink/70">{photo.alt}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="privacy" className="scroll-mt-24 bg-cream px-5 py-14">
        <Container className="max-w-3xl">
          <h2 className="font-display text-4xl text-ocean">Privacy notes</h2>
          <p className="mt-4 leading-7 text-ink/80">
            Eastward is a private portfolio project. It does not run an account system, analytics SDK, or newsletter signup. The demonstration inquiry form does not send email and does not store what you type.
          </p>
          <p className="mt-4 leading-7 text-ink/80">
            Place and destination pages can embed a Google Maps iframe when a Maps Embed API key is configured. That embed is a third-party request to Google. Find, directions, and more-info links also open Google in a new tab. Your host may still see ordinary web-server request logs.
          </p>
        </Container>
      </section>

      <section className="px-5 py-14">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-ocean">A note, if you want to leave one</h2>
            <p className="mt-3 leading-7 text-ink/75">
              There is no Eastward office on Main Street and no public phone number. The form is here so the planning pages have a real interaction. It does not send email or keep a copy of what you typed.
            </p>
            <div className="mt-6">
              <Button href="/explore">Start exploring</Button>
            </div>
          </div>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl bg-ocean p-5 text-foam">
      <p className="font-display text-4xl text-gold">{value}</p>
      <p className="mt-2 text-sm text-foam/85">{label}</p>
    </div>
  );
}
