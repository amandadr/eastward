"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui";

type NavLink = { href: string; label: string; note?: string };

export function SiteHeader({
  destinations,
  interests,
}: {
  destinations: NavLink[];
  interests: NavLink[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-dune/80 bg-foam/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-3 lg:gap-4">
        <Link href="/" className="flex items-center gap-2 text-ocean">
          <Mark />
          <span className="font-display text-2xl tracking-tight">Eastward</span>
        </Link>

        <nav aria-label="Primary" className="ml-2 hidden items-center gap-1 lg:flex xl:ml-4">
          <TopLink href="/explore">Explore</TopLink>
          <Menu label="Destinations" href="/destinations" links={destinations} />
          <Menu label="Things to do" href="/things-to-do" links={interests} />
          <Menu
            label="Plan"
            href="/plan"
            links={[
              { href: "/plan/build-your-day", label: "Build your day", note: "A day from your interests and base" },
              { href: "/plan#itineraries", label: "Itineraries", note: "Routes already paced for the east" },
              { href: "/plan#seasons", label: "Seasons", note: "What changes from June to October" },
              { href: "/plan#getting-here", label: "Getting here", note: "Bridge, ferry, and the airport" },
            ]}
          />
          <TopLink href="/about">About</TopLink>
        </nav>

        <form action="/explore" role="search" className="ml-auto hidden lg:block">
          <label htmlFor="site-search" className="sr-only">
            Search places
          </label>
          <input
            id="site-search"
            name="q"
            placeholder="Search places"
            className="w-36 rounded-full border border-dune bg-white px-4 py-2 text-sm outline-none ring-sandstone placeholder:text-ink/40 focus:ring-2 xl:w-56"
          />
        </form>
        <Button href="/plan" className="hidden shrink-0 sm:inline-flex">
          Plan your visit
        </Button>
        <button
          type="button"
          className="ml-auto inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-ocean ring-1 ring-ocean/15 lg:ml-0 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[75vh] overflow-auto border-t border-dune px-5 py-4 lg:hidden">
          <form action="/explore" role="search" className="mb-4">
            <label htmlFor="mobile-search" className="sr-only">
              Search places
            </label>
            <input
              id="mobile-search"
              name="q"
              placeholder="Search places"
              className="w-full rounded-full border border-dune bg-white px-4 py-2 text-sm"
            />
          </form>
          <MobileGroup title="Explore" links={[{ href: "/explore", label: "All places" }]} />
          <MobileGroup title="Destinations" links={[{ href: "/destinations", label: "All communities" }, ...destinations]} />
          <MobileGroup title="Things to do" links={[{ href: "/things-to-do", label: "All interests" }, ...interests]} />
          <MobileGroup
            title="Plan"
            links={[
              { href: "/plan", label: "Plan your trip" },
              { href: "/plan/build-your-day", label: "Build your day" },
              { href: "/plan#itineraries", label: "Itineraries" },
            ]}
          />
          <Link href="/about" className="block py-2 font-medium text-ocean">
            About Eastward
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

function TopLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-ocean hover:bg-cream">
      {children}
    </Link>
  );
}

function Menu({ label, href, links }: { label: string; href: string; links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="inline-flex items-center">
        <Link
          href={href}
          className="whitespace-nowrap rounded-l-full px-3 py-2 text-sm font-medium text-ocean hover:bg-cream"
        >
          {label}
        </Link>
        <button
          type="button"
          className="rounded-r-full px-2 py-2 text-sm text-ink/55 hover:bg-cream hover:text-ocean"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={`${label} menu`}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">▾</span>
        </button>
      </div>
      {open ? (
        <div id={menuId} className="absolute left-0 top-full z-30 w-80 pt-2">
          <div className="rounded-2xl border border-dune bg-foam p-2 shadow-card">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3 py-2 hover:bg-cream"
                onClick={() => setOpen(false)}
              >
                <span className="block text-sm font-medium text-ocean">{link.label}</span>
                {link.note ? <span className="mt-0.5 block text-xs leading-5 text-ink/65">{link.note}</span> : null}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileGroup({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="mb-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sandstone-deep">{title}</p>
      <ul className="mt-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="block py-1.5 text-ocean">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#163A4A" />
      <path d="M6 22h14l6-9" fill="none" stroke="#F7F3EC" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="26" cy="13" r="2.2" fill="#C4623A" />
    </svg>
  );
}
