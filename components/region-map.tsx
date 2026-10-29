import Link from "next/link";

// Eastern PEI, simplified from the Natural Earth coastline and cropped west of Charlottetown.
// ViewBox is 800×620. Pin percentages use the same frame.
const land =
  "M104.7 149.5 L175.4 148.5 L316.8 146.4 L372.1 140.1 L341.2 129.6 L341.2 120.4 L372.1 112.3 L468.1 112.8 L629.2 121.9 L684.7 144.8 L634.8 181.6 L584.1 199.5 L532.8 198.5 L506.3 215.1 L504.7 249.4 L486.6 266.3 L451.9 266.0 L442.4 276.6 L458.1 298.0 L447.6 304.3 L410.8 295.6 L402.9 301.9 L424.0 323.1 L420.0 333.7 L390.9 333.7 L396.7 348.2 L437.3 377.3 L441.9 404.9 L410.5 431.2 L410.1 447.0 L440.8 452.2 L444.4 465.0 L420.7 485.4 L381.7 499.6 L327.3 507.7 L281.2 501.3 L243.2 480.4 L222.3 457.2 L218.3 431.8 L200.3 420.0 L168.1 422.0 L173.8 409.8 L217.3 383.5 L228.2 371.8 L206.6 374.7 L195.9 363.7 L196.1 338.7 L173.7 321.9 L128.8 313.3 L126.7 289.1 L167.4 249.3 L167.0 243.7 L125.5 272.5 L104.7 286.8 Z";

export function RegionMap({
  pins,
  active,
}: {
  pins: { slug: string; name: string; x: number; y: number; label?: "left" | "right" }[];
  active?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-mist ring-1 ring-ocean/10">
      <div className="relative aspect-[800/620]">
        <svg
          viewBox="0 0 800 620"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <rect width="800" height="620" fill="#d5e3ea" />
          <path d={land} fill="#e7d3b5" stroke="#c4a888" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
        {pins.map((pin) => {
          const selected = pin.slug === active;
          const labelLeft = pin.label ? pin.label === "left" : pin.x > 64;
          return (
            <Link
              key={pin.slug}
              href={`/destinations/${pin.slug}`}
              className={`absolute flex -translate-y-1/2 items-center gap-2 rounded-full px-1 ${
                labelLeft ? "-translate-x-full flex-row-reverse" : ""
              }`}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            >
              <span
                className={`size-3 shrink-0 rounded-full ring-2 ring-foam ${
                  selected ? "bg-sandstone" : "bg-ocean"
                }`}
              />
              <span
                className={`whitespace-nowrap font-display text-sm md:text-base ${
                  selected ? "text-sandstone-deep" : "text-ocean"
                }`}
              >
                {pin.name}
              </span>
            </Link>
          );
        })}
      </div>
      <p className="px-5 pb-4 text-xs text-ocean/70">
        Eastern PEI, simplified. The left edge is toward Charlottetown. Not for navigation.
      </p>
    </div>
  );
}
