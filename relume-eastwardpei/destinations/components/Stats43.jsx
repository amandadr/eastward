"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats43() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Facts</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The east in numbers
            </h2>
            <p className="md:text-md">
              The region runs from the capital's edge to the Northumberland
              Strait. It is measured in working harbors, red cliffs, and long
              stretches of sand.
            </p>
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
          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <div className="border border-border-primary p-8">
              <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
                Communities to explore
              </h3>
              <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                6
              </p>
              <div className="my-4 h-px w-full bg-border-primary" />
              <p className="text-right">
                Distinct towns and villages with their own harbors and main
                streets.
              </p>
            </div>
            <div className="border border-border-primary p-8">
              <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
                Kilometers of coastline
              </h3>
              <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                500
              </p>
              <div className="my-4 h-px w-full bg-border-primary" />
              <p className="text-right">
                Red cliffs, dunes, and beaches along the Northumberland Strait.
              </p>
            </div>
            <div className="border border-border-primary p-8">
              <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
                Lighthouses to find
              </h3>
              <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                12
              </p>
              <div className="my-4 h-px w-full bg-border-primary" />
              <p className="text-right">
                Standing at points from Point Prim to East Point.
              </p>
            </div>
            <div className="border border-border-primary p-8">
              <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
                Local food producers
              </h3>
              <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                40
              </p>
              <div className="my-4 h-px w-full bg-border-primary" />
              <p className="text-right">
                Oyster farms, smokehouses, and markets worth a stop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
