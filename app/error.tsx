"use client";

import { useEffect } from "react";
import { Button, Container } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="px-5 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sandstone-deep">Something went wrong</p>
      <h1 className="mt-3 font-display text-5xl text-ocean">The page could not load</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-ink/75">
        Try again, or go back to the directory. The guide is still here even when one page fails.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-sandstone px-5 py-2.5 text-sm font-medium text-white hover:bg-sandstone-deep"
        >
          Try again
        </button>
        <Button href="/explore" variant="secondary">
          Explore
        </Button>
      </div>
    </Container>
  );
}
