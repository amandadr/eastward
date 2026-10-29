"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Eastward</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The east is a slower kind of island
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              West of here the island is built for crowds. East of Charlottetown
              the roads narrow, the traffic thins, and the distances between
              towns are measured in beaches and potato fields.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Six communities with their own harbors and main streets</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>
                  Five hundred kilometers of coastline along the Northumberland
                  Strait
                </p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Twelve lighthouses from Point Prim to East Point</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Plan" variant="secondary">
                Plan
              </Button>
              <Button
                title="Map"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Map
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
