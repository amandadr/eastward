"use client";

import { useState } from "react";

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl bg-cream p-6 ring-2 ring-sandstone" role="status" aria-live="polite">
        <p className="font-display text-2xl text-ocean">Nothing was sent</p>
        <p className="mt-3 leading-7 text-ink/80">
          This is a portfolio demonstration. Eastward has no public inbox. The form does not deliver a message, store what you typed, or share it with anyone.
        </p>
        <button
          type="button"
          className="mt-5 rounded-full bg-ocean px-5 py-2.5 text-sm font-medium text-foam hover:bg-ocean-deep"
          onClick={() => setSent(false)}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 rounded-3xl bg-white p-5 ring-1 ring-dune md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      noValidate
    >
      <p className="rounded-2xl bg-cream px-4 py-3 text-sm leading-6 text-ink/80 md:col-span-2">
        Demonstration only. Submitting shows a confirmation on this page. Nothing is emailed or stored.
      </p>
      <Field label="Name" name="name" autoComplete="name" />
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <label className="block text-sm font-medium text-ocean">
        Topic
        <select name="topic" className="mt-2 w-full rounded-2xl border border-dune bg-foam px-3 py-2 font-normal" defaultValue="roads">
          <option value="roads">Roads and driving</option>
          <option value="beaches">Beaches and tides</option>
          <option value="food">Where to eat</option>
          <option value="itinerary">Shaping a day</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-ocean">
        Which best describes you?
        <select name="visitor" className="mt-2 w-full rounded-2xl border border-dune bg-foam px-3 py-2 font-normal" defaultValue="first">
          <option value="first">First visit</option>
          <option value="returning">Returning visitor</option>
          <option value="islander">Islander</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-ocean md:col-span-2">
        Note
        <textarea name="note" rows={4} className="mt-2 w-full rounded-2xl border border-dune bg-foam px-3 py-2 font-normal" />
      </label>
      <p className="text-sm leading-6 text-ink/70 md:col-span-2">
        Eastward does not have a public inbox. See{" "}
        <a href="/about#privacy" className="underline decoration-dune underline-offset-2 hover:decoration-sandstone">
          privacy notes
        </a>{" "}
        for what this page does and does not collect.
      </p>
      <div>
        <button type="submit" className="rounded-full bg-sandstone px-5 py-2.5 text-sm font-medium text-white hover:bg-sandstone-deep">
          Try the form
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm font-medium text-ocean">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-2xl border border-dune bg-foam px-3 py-2 font-normal"
      />
    </label>
  );
}
