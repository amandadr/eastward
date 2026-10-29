"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout395() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Browse</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Find your kind of east
          </h1>
          <p className="md:text-md">
            Three ways to spend a day beyond Charlottetown
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
                <p className="mb-2 font-semibold">Outdoor</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Walk the dunes, paddle the bays and ride the Confederation
                  Trail
                </h2>
                <p>Beaches, kayaks, lighthouses and long empty roads</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Browse"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Browse
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
                <p className="mb-2 font-semibold">Culinary</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Eat oysters where they grow and lobster from the boat
                </h2>
                <p>Suppers, markets and tastings run by island families</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Browse"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Browse
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
                <p className="mb-2 font-semibold">Culture</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Throw clay, hear fiddlers and walk through heritage halls
                </h2>
                <p>Workshops, music nights and museums in small towns</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Browse"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Browse
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
