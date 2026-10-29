import Image from "next/image";
import type { Photo } from "@/content/types";

const washes = [
  "from-ocean via-ocean to-kelp",
  "from-sandstone-deep via-ocean to-ocean-deep",
  "from-kelp via-ocean to-ocean-deep",
  "from-ocean-deep via-[#245066] to-kelp",
];

export function PhotoFrame({
  photo,
  label,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  className = "",
}: {
  photo: Photo | null;
  label: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  if (!photo) {
    const wash = washes[label.length % washes.length];
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br ${wash} ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_42%)]" />
        <p className="absolute bottom-4 left-4 right-4 font-display text-2xl leading-tight text-foam">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-ocean ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectFit: "cover", objectPosition: photo.focus ?? "center" }}
      />
    </div>
  );
}

export function PhotoCredit({ photo }: { photo: Photo }) {
  return (
    <p className="text-xs text-ink/60">
      Photo: {photo.credit}
      {photo.license && photo.licenseUrl ? (
        <>
          ,{" "}
          <a
            href={photo.licenseUrl}
            className="underline decoration-dune underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {photo.license}
          </a>
          .
        </>
      ) : (
        <>. Used with credit; not a Creative Commons work.</>
      )}
      {photo.sourceUrl ? (
        <>
          {" "}
          <a
            href={photo.sourceUrl}
            className="underline decoration-dune underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </>
      ) : null}
    </p>
  );
}
