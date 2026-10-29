"use client";

import { Button } from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import { RxChevronRight } from "react-icons/rx";

export function Timeline21() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Timeline</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              When the east end shows its best face
            </h2>
            <p className="md:text-md">
              The water warms late and the crowds leave early. Here is what each
              season gives you.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Start" variant="secondary">
                Start
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
        </div>
        <div className="relative grid auto-cols-fr grid-flow-row grid-cols-1 items-center justify-items-center md:grid-flow-col md:grid-cols-[max-content_1fr] md:justify-items-stretch">
          <div className="relative hidden md:grid md:grid-cols-1 md:items-end md:gap-4">
            <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
              <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
            </div>
          </div>
          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">June</h3>
                <p>
                  Lupins line the roads and the lobster boats are working hard.
                  The water is cold but the villages are quiet.
                </p>
              </div>
            </Fragment>
          </div>
          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">July</h3>
                <p>
                  Basin Head and Greenwich fill with families. Book ferries and
                  beds a week ahead or sleep in the car.
                </p>
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="col-end-2 row-end-2 mb-8 self-start overflow-hidden md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 2"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Fragment>
          </div>
          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 3"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">August</h3>
                <p>
                  The warmest water of the year. Every fish shack is open and
                  the sun stays up past nine.
                </p>
              </div>
            </Fragment>
          </div>
          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  September
                </h3>
                <p>
                  The crowds thin and the light turns gold. Oysters are fat and
                  the roads belong to you again.
                </p>
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
              </div>
              <div className="col-end-2 row-end-2 mb-8 self-start overflow-hidden md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 4"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Fragment>
          </div>
          <div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
            <Fragment>
              <div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 5"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex size-full flex-col items-center md:h-auto md:flex-row">
                <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
                <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full hidden md:block" />
              </div>
              <div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
                <h3 className="mb-2 text-xl font-bold md:text-2xl">October</h3>
                <p>
                  The maples turn red around Montague. Many shacks close but the
                  lighthouses keep their watch.
                </p>
              </div>
            </Fragment>
          </div>
          <div className="absolute right-0 z-0 h-1 w-16 bg-gradient-to-r from-transparent to-white" />
        </div>
      </div>
    </section>
  );
}
