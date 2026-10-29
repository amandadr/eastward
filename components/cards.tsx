import Link from "next/link";
import type { Photo } from "@/content/types";
import { PhotoFrame } from "@/components/photo-frame";

export function PlaceCard({
  href,
  name,
  summary,
  meta,
  kicker,
  photo,
}: {
  href: string;
  name: string;
  summary: string;
  meta: string;
  kicker: string;
  photo: Photo | null;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-dune/80 transition hover:-translate-y-0.5"
    >
      <PhotoFrame photo={photo} label={name} className="aspect-[4/3] w-full" />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-kelp">{kicker}</p>
        <h3 className="mt-2 font-display text-2xl leading-tight text-ocean group-hover:text-sandstone-deep">
          {name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-ink/75">{summary}</p>
        <p className="mt-4 text-sm text-ink/60">{meta}</p>
      </div>
    </Link>
  );
}

export function DestinationCard({
  href,
  name,
  tagline,
  summary,
  photo,
}: {
  href: string;
  name: string;
  tagline: string;
  summary: string;
  photo: Photo | null;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-dune/80"
    >
      <PhotoFrame photo={photo} label={name} className="aspect-[16/10] w-full" />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sandstone">{tagline}</p>
        <h3 className="mt-2 font-display text-3xl text-ocean">{name}</h3>
        <p className="mt-2 text-sm leading-6 text-ink/75">{summary}</p>
        <p className="mt-4 text-sm font-medium text-ocean">Explore the area</p>
      </div>
    </Link>
  );
}
