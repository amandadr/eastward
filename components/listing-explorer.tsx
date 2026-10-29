"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { PlaceView, Term } from "@/content/types";
import { filterPlaces } from "@/lib/filters";
import { PlaceCard } from "@/components/cards";

export function ListingExplorer({
  places,
  categories,
  destinations,
  category,
  initialQuery = "",
  initialDestination = "",
  initialSeason = "",
}: {
  places: PlaceView[];
  categories: Term[];
  destinations: { slug: string; name: string }[];
  category?: string;
  initialQuery?: string;
  initialDestination?: string;
  initialSeason?: string;
}) {
  const router = useRouter();
  const [q, setQ] = useState(initialQuery);
  const [destination, setDestination] = useState(initialDestination);
  const [season, setSeason] = useState(initialSeason);

  const results = useMemo(
    () =>
      filterPlaces(places, {
        q,
        category,
        destination: destination || undefined,
        season: season || undefined,
      }),
    [places, q, category, destination, season],
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (destination) params.set("destination", destination);
    if (season) params.set("season", season);
    const path = category ? `/explore/${category}` : "/explore";
    const next = params.size ? `${path}?${params.toString()}` : path;
    const current = `${window.location.pathname}${window.location.search}`;
    if (current !== next) router.replace(next, { scroll: false });
  }, [q, destination, season, category, router]);

  return (
    <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
      <form
        role="search"
        className="h-max space-y-5 rounded-3xl bg-white p-5 ring-1 ring-dune"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <label htmlFor="directory-search" className="text-sm font-medium text-ocean">
            Search
          </label>
          <input
            id="directory-search"
            value={q}
            onChange={(event) => setQ(event.target.value)}
            placeholder="Basin Head, harbour, trail"
            className="mt-2 w-full rounded-2xl border border-dune bg-foam px-3 py-2 text-sm"
          />
        </div>
        <fieldset>
          <legend className="text-sm font-medium text-ocean">Category</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <FilterLink href={buildHref("/explore", { q, destination, season })} current={!category}>
              All
            </FilterLink>
            {categories.map((item) => (
              <FilterLink
                key={item.slug}
                href={buildHref(`/explore/${item.slug}`, { q, destination, season })}
                current={category === item.slug}
              >
                {item.name}
              </FilterLink>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="destination-filter" className="text-sm font-medium text-ocean">
            Community
          </label>
          <select
            id="destination-filter"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-dune bg-foam px-3 py-2 text-sm"
          >
            <option value="">All of Eastern PEI</option>
            {destinations.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="season-filter" className="text-sm font-medium text-ocean">
            Season
          </label>
          <select
            id="season-filter"
            value={season}
            onChange={(event) => setSeason(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-dune bg-foam px-3 py-2 text-sm"
          >
            <option value="">Any season</option>
            <option value="spring">Late spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Early fall</option>
            <option value="winter">Late fall and winter</option>
          </select>
        </div>
        <button
          type="button"
          className="text-sm text-ocean underline decoration-dune underline-offset-4"
          onClick={() => {
            setQ("");
            setDestination("");
            setSeason("");
          }}
        >
          Clear filters
        </button>
      </form>

      <div>
        <p className="text-sm text-ink/70" aria-live="polite">
          {results.length} {results.length === 1 ? "place" : "places"}
        </p>
        {results.length === 0 ? (
          <p className="mt-6 rounded-3xl bg-white p-8 text-ink/75 ring-1 ring-dune">
            Nothing in the guide matches those filters. Clear them to see the full directory.
          </p>
        ) : (
          <ul className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((place) => (
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
        )}
      </div>
    </div>
  );
}

function FilterLink({ href, current, children }: { href: string; current: boolean; children: string }) {
  return (
    <a
      href={href}
      aria-current={current ? "page" : undefined}
      className={`rounded-full px-3 py-1 text-sm ${
        current ? "bg-ocean text-foam" : "bg-cream text-ocean hover:bg-dune"
      }`}
    >
      {children}
    </a>
  );
}

function buildHref(
  path: string,
  filters: { q: string; destination: string; season: string },
) {
  const params = new URLSearchParams();
  if (filters.q) params.set("q", filters.q);
  if (filters.destination) params.set("destination", filters.destination);
  if (filters.season) params.set("season", filters.season);
  const query = params.toString();
  return query ? `${path}?${query}` : path;
}
