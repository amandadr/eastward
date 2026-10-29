"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Product10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">Experiences</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              Things to do
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">
              Book the experiences that make the east worth the drive.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Lighthouse tour</h3>
                <div className="text-sm">Tour</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$45</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Book this"
              className="mt-3 w-full md:mt-4"
            >
              Book this
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Beach day</h3>
                <div className="text-sm">Pass</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$15</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Book this"
              className="mt-3 w-full md:mt-4"
            >
              Book this
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Oyster tasting</h3>
                <div className="text-sm">Tasting</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$60</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Book this"
              className="mt-3 w-full md:mt-4"
            >
              Book this
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Fiddle workshop</h3>
                <div className="text-sm">Workshop</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$35</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Book this"
              className="mt-3 w-full md:mt-4"
            >
              Book this
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Fishing charter</h3>
                <div className="text-sm">Charter</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$120</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Book this"
              className="mt-3 w-full md:mt-4"
            >
              Book this
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Studio visit</h3>
                <div className="text-sm">Art</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$25</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Book this"
              className="mt-3 w-full md:mt-4"
            >
              Book this
            </Button>
          </div>
        </div>
        <div className="mt-10 flex justify-center md:mt-14 lg:mt-16">
          <Button variant="secondary" size="primary" title="View all">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
