"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing18() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Plan</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Trip tools
          </h2>
          <p className="md:text-md">
            Free guides and simple tools to build your eastern route.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
            <div>
              <div className="rb-6 mb-6 text-center md:mb-8">
                <h6 className="text-md font-bold md:text-xl">Free guide</h6>
                <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                  $0
                </h1>
                <p>No cost</p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Points East Coastal Drive map</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Beach and harbor directory</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Seasonal event calendar</p>
                </div>
              </div>
            </div>
            <div>
              <Button title="Get it" className="w-full">
                Get it
              </Button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
            <div>
              <div className="rb-6 mb-6 text-center md:mb-8">
                <h6 className="text-md font-bold md:text-xl">Itinerary pack</h6>
                <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                  $10
                </h1>
                <p>One time</p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Three day route plan</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Printable town guides</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Oyster trail map</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Lighthouse checklist</p>
                </div>
              </div>
            </div>
            <div>
              <Button title="Get it" className="w-full">
                Get it
              </Button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
            <div>
              <div className="rb-6 mb-6 text-center md:mb-8">
                <h6 className="text-md font-bold md:text-xl">Full planner</h6>
                <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                  $25
                </h1>
                <p>One time</p>
              </div>
              <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Custom route builder</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Local food reservations</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Charter booking links</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Offline maps</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Updates all season</p>
                </div>
              </div>
            </div>
            <div>
              <Button title="Get it" className="w-full">
                Get it
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
