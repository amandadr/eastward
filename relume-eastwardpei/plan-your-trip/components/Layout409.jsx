"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { Fragment, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });
  const calculateScale = (index, totalSections) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);
    return useTransform(scrollYProgress, [start, end], [1, 0.8]);
  };
  return { containerRef, calculateScale };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Layout409() {
  const render = useTablet();
  const render = useMobile();
  const useScroll = useRelume();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Tools</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Essential planning tools
          </h1>
          <p className="md:text-md">
            Maps, calendars, and the numbers you need when the road ends.
          </p>
        </div>
        <div
          ref={useScroll.containerRef}
          className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0"
          ref={useScroll.containerRef}
        >
          <Fragment>
            <ConditionalRender condition={render.isMobile}>
              <div className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white">
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
                    <p className="mb-2 font-semibold">Tagline</p>
                    <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      Medium length section heading goes here
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-last">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                    />
                  </div>
                </Fragment>
              </div>
            </ConditionalRender>
            <ConditionalRender condition={render.isTablet}>
              <motion.div
                className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
                style={{ scale: useScroll.calculateScale(0, 4) }}
              >
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
                    <p className="mb-2 font-semibold">Maps</p>
                    <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      Downloadable maps of every eastern route
                    </h2>
                    <p>
                      PDF maps of Route 16, Route 2, and the back roads to the
                      beaches. Print them or save them offline.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <Button title="Download" variant="secondary">
                        Download
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
                  <div className="order-last flex flex-col items-center justify-center md:order-last">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 1"
                    />
                  </div>
                </Fragment>
              </motion.div>
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <ConditionalRender condition={render.isMobile}>
              <div className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white">
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
                    <p className="mb-2 font-semibold">Tagline</p>
                    <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      Medium length section heading goes here
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-first">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 2"
                    />
                  </div>
                </Fragment>
              </div>
            </ConditionalRender>
            <ConditionalRender condition={render.isTablet}>
              <motion.div
                className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
                style={{ scale: useScroll.calculateScale(1, 4) }}
              >
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
                    <p className="mb-2 font-semibold">Maps</p>
                    <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      Downloadable maps of every eastern route
                    </h2>
                    <p>
                      PDF maps of Route 16, Route 2, and the back roads to the
                      beaches. Print them or save them offline.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <Button title="Download" variant="secondary">
                        Download
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
                  <div className="order-last flex flex-col items-center justify-center md:order-first">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 2"
                    />
                  </div>
                </Fragment>
              </motion.div>
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <ConditionalRender condition={render.isMobile}>
              <div className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white">
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
                    <p className="mb-2 font-semibold">Tagline</p>
                    <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      Medium length section heading goes here
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-last">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 3"
                    />
                  </div>
                </Fragment>
              </div>
            </ConditionalRender>
            <ConditionalRender condition={render.isTablet}>
              <motion.div
                className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
                style={{ scale: useScroll.calculateScale(2, 4) }}
              >
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-first">
                    <p className="mb-2 font-semibold">Maps</p>
                    <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      Downloadable maps of every eastern route
                    </h2>
                    <p>
                      PDF maps of Route 16, Route 2, and the back roads to the
                      beaches. Print them or save them offline.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <Button title="Download" variant="secondary">
                        Download
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
                  <div className="order-last flex flex-col items-center justify-center md:order-last">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 3"
                    />
                  </div>
                </Fragment>
              </motion.div>
            </ConditionalRender>
          </Fragment>
          <Fragment>
            <ConditionalRender condition={render.isMobile}>
              <div className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white">
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
                    <p className="mb-2 font-semibold">Tagline</p>
                    <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      Medium length section heading goes here
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                  <div className="order-last flex flex-col items-center justify-center md:order-first">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 4"
                    />
                  </div>
                </Fragment>
              </div>
            </ConditionalRender>
            <ConditionalRender condition={render.isTablet}>
              <motion.div
                className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
                style={{ scale: useScroll.calculateScale(3, 4) }}
              >
                <Fragment>
                  <div className="order-first flex flex-col justify-center p-6 md:p-8 lg:p-12 md:order-last">
                    <p className="mb-2 font-semibold">Maps</p>
                    <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                      Downloadable maps of every eastern route
                    </h2>
                    <p>
                      PDF maps of Route 16, Route 2, and the back roads to the
                      beaches. Print them or save them offline.
                    </p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                      <Button title="Download" variant="secondary">
                        Download
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
                  <div className="order-last flex flex-col items-center justify-center md:order-first">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image 4"
                    />
                  </div>
                </Fragment>
              </motion.div>
            </ConditionalRender>
          </Fragment>
        </div>
      </div>
    </section>
  );
}
