import Link from "next/link";

export function SiteFooter({
  destinations,
}: {
  destinations: { href: string; label: string }[];
}) {
  return (
    <footer className="border-t border-dune bg-ocean text-foam">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-3xl">Eastward</p>
          <p className="mt-3 text-sm leading-6 text-foam/75">
            An independent guide to the beaches, harbours, and small towns of Eastern Prince Edward Island.
          </p>
        </div>
        <FooterColumn
          title="Explore"
          links={[
            { href: "/explore", label: "All places" },
            { href: "/explore/beaches", label: "Beaches" },
            { href: "/explore/lighthouses", label: "Lighthouses" },
            { href: "/explore/harbours", label: "Harbours" },
            { href: "/things-to-do", label: "Things to do" },
          ]}
        />
        <FooterColumn title="Communities" links={destinations} />
        <FooterColumn
          title="Plan"
          links={[
            { href: "/plan", label: "Plan your trip" },
            { href: "/plan/build-your-day", label: "Build your day" },
            { href: "/plan#itineraries", label: "Itineraries" },
            { href: "/about", label: "About Eastward" },
            { href: "/about#photos", label: "Photo credits" },
            { href: "/about#privacy", label: "Privacy notes" },
          ]}
        />
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs leading-5 text-foam/70">
          Eastward is a private portfolio project. It is not Tourism PEI, it does not book rooms or tours, and listings are not paid placements. Hours, fees, and ferry sailings change — confirm them before you go.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-foam/85 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
