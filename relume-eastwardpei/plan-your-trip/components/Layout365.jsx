"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout365() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Services</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Planning help that knows the east
            </h2>
            <p className="md:text-md">
              We know the harbors, the tides, and the back roads.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            <div className="flex flex-col border border-border-primary md:grid md:grid-cols-2">
              <div className="block flex-col justify-center p-6 md:flex">
                <div>
                  <p className="mb-2 font-semibold">Itineraries</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Custom consultations built around your days
                  </h3>
                  <p>
                    Tell us your pace and we map the beaches, lighthouses, and
                    fish shacks to match it.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Start
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary md:grid md:grid-cols-2">
              <div className="block flex-col justify-center p-6 md:flex">
                <div>
                  <p className="mb-2 font-semibold">Itineraries</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Custom consultations built around your days
                  </h3>
                  <p>
                    Tell us your pace and we map the beaches, lighthouses, and
                    fish shacks to match it.
                  </p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Start
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch border border-border-primary lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
              <div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">Partners</p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Local partner recommendations you can trust
                  </h3>
                  <p>
                    We only send you to inns, captains, and kitchens we have
                    eaten at ourselves. No filler, no tourist traps.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button title="Explore" variant="secondary">
                    Explore
                  </Button>
                  <Button
                    title="Guide"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Guide
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
