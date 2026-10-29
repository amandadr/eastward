"use client";

import type { Faq } from "@/content/types";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-dune border-y border-dune">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-ocean marker:content-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <span aria-hidden="true" className="text-2xl font-light text-sandstone group-open:hidden">
              +
            </span>
            <span aria-hidden="true" className="hidden text-2xl font-light text-sandstone group-open:inline">
              –
            </span>
          </summary>
          <p className="mt-4 max-w-3xl leading-7 text-ink/80">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
