import Link from "next/link";
import { Button } from "@/components/ui";
import {
  googleMapsDirections,
  googleMapsEmbed,
  googleMapsInfo,
  googleMapsSearch,
} from "@/lib/geo";

export function GoogleMap({
  query,
  zoom,
  title,
  description,
  className = "h-80 w-full rounded-[2rem] border-0 bg-mist",
}: {
  query: string;
  zoom: number;
  title: string;
  description?: string;
  className?: string;
}) {
  const embed = googleMapsEmbed(query, zoom);

  return (
    <div>
      {embed ? (
        <iframe title={title} src={embed} className={className} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div
          className={`flex items-center justify-center bg-mist px-6 text-center text-sm leading-6 text-ink/65 ${className}`}
          role="status"
        >
          Map embed is unavailable without NEXT_PUBLIC_GOOGLE_MAPS_API_KEY. Find, directions, and more info still work below.
        </div>
      )}
      {description ? <p className="mt-3 leading-7 text-ink/75">{description}</p> : null}
      <div className="mt-5 flex flex-wrap gap-3">
        <Button href={googleMapsSearch(query)} variant="dark" external>
          Find on Google Maps
        </Button>
        <Button href={googleMapsDirections(query)} variant="secondary" external>
          Get directions
        </Button>
        <Button href={googleMapsInfo(query)} variant="ghost" external>
          More info
        </Button>
      </div>
      {embed ? (
        <p className="mt-3 text-xs leading-5 text-ink/60">
          The map embed is provided by Google.{" "}
          <Link href="/about#privacy" className="underline decoration-dune underline-offset-2 hover:decoration-sandstone">
            Privacy notes
          </Link>
        </p>
      ) : null}
    </div>
  );
}
