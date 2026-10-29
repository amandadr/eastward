"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout395_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Plan</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            How to go east
          </h1>
          <p className="md:text-md">
            Three steps to a trip that feels your own.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Browse</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Find the towns and beaches that pull you
                </h2>
                <p>Start with Souris, Georgetown, or the Greenwich dunes.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Destinations"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Destinations
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Build</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Save the places you want to see
                </h2>
                <p>Map your route along the Points East Coastal Drive.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Plan"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Plan
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Book</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Reserve a table or a boat before you go
                </h2>
                <p>
                  Oyster tastings, fishing charters, and ceilidhs fill fast.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Experiences"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Experiences
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
