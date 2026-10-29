"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { PlaceView, Term } from "@/content/types";
import { buildDay } from "@/lib/filters";
import { distanceKm, driveNote } from "@/lib/geo";

export function BuildYourDay({
  places,
  destinations,
  interests,
  initial,
}: {
  places: PlaceView[];
  destinations: {
    slug: string;
    name: string;
    latitude: number;
    longitude: number;
    nearby: string[];
  }[];
  interests: Term[];
  initial: { base: string; span: "half" | "day" | "two"; interests: string[] };
}) {
  const router = useRouter();
  const [base, setBase] = useState(initial.base);
  const [span, setSpan] = useState(initial.span);
  const [selected, setSelected] = useState<string[]>(initial.interests);

  useEffect(() => {
    const params = new URLSearchParams();
    if (base) params.set("base", base);
    params.set("span", span);
    selected.forEach((interest) => params.append("interest", interest));
    const next = `/plan/build-your-day?${params.toString()}`;
    const current = `${window.location.pathname}${window.location.search}`;
    if (current !== next) router.replace(next, { scroll: false });
  }, [base, span, selected, router]);

  const route = useMemo(
    () => buildDay(places, destinations, { base: base || undefined, span, interests: selected }),
    [places, destinations, base, span, selected],
  );

  function toggle(slug: string) {
    setSelected((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[20rem_1fr]">
      <form
        className="h-max space-y-6 rounded-3xl bg-white p-5 ring-1 ring-dune"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <label htmlFor="base" className="text-sm font-medium text-ocean">
            Where are you starting?
          </label>
          <select
            id="base"
            value={base}
            onChange={(event) => setBase(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-dune bg-foam px-3 py-2 text-sm"
          >
            <option value="">Anywhere in the east</option>
            {destinations.map((destination) => (
              <option key={destination.slug} value={destination.slug}>
                {destination.name}
              </option>
            ))}
          </select>
        </div>
        <fieldset>
          <legend className="text-sm font-medium text-ocean">Time</legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {(
              [
                ["half", "Half day"],
                ["day", "Full day"],
                ["two", "Two days"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={span === value}
                onClick={() => setSpan(value)}
                className={`rounded-2xl px-2 py-2 text-sm ${
                  span === value ? "bg-ocean text-foam" : "bg-cream text-ocean"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-medium text-ocean">Interests</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {interests.map((interest) => {
              const on = selected.includes(interest.slug);
              return (
                <button
                  key={interest.slug}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(interest.slug)}
                  className={`rounded-full px-3 py-1 text-sm ${
                    on ? "bg-sandstone text-white" : "bg-cream text-ocean"
                  }`}
                >
                  {interest.name}
                </button>
              );
            })}
          </div>
        </fieldset>
        <p className="text-xs leading-5 text-ink/60">
          The list updates as you choose, and the address updates with it so you can share a setup.
        </p>
      </form>

      <div>
        <h2 className="font-display text-3xl text-ocean">A day you could actually drive</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/70">
          Ordered from your starting point using the places in this guide. It is a draft, not a booking and not a promise that a site is open.
        </p>
        {route.length === 0 ? (
          <p className="mt-6 rounded-3xl bg-cream p-6 text-ink/75">
            Those interests do not overlap with a place near that base. Try fewer interests, or start anywhere in the east.
          </p>
        ) : (
          <ol className="mt-6 space-y-4">
            {route.map((place, index) => {
              const previous = index === 0 ? destinations.find((item) => item.slug === base) : route[index - 1];
              const note = previous ? driveNote(distanceKm(previous, place)) : "Start here.";
              return (
                <li key={place.slug} className="rounded-3xl bg-white p-5 ring-1 ring-dune">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sandstone">
                    Stop {index + 1}
                    {span === "two" ? ` · Day ${index < 3 ? 1 : 2}` : ""}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-ocean">
                    <Link href={`/places/${place.slug}`} className="hover:text-sandstone-deep">
                      {place.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/75">{place.summary}</p>
                  <p className="mt-3 text-sm text-ink/60">
                    {place.destinationName} · {place.duration}
                    <span className="mt-1 block">{note}</span>
                  </p>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
}
