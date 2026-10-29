import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="px-5 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sandstone-deep">404</p>
      <h1 className="mt-3 font-display text-5xl text-ocean">That page is not on the map</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-ink/75">
        The guide covers Eastern Prince Edward Island. Try the directory, or go back to the communities.
      </p>
      <div className="mt-6 flex gap-3">
        <Button href="/explore">Explore</Button>
        <Button href="/destinations" variant="secondary">
          Destinations
        </Button>
      </div>
    </Container>
  );
}
