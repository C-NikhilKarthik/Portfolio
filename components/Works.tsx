import Link from "next/link";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Works() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    // First animation
    tl.fromTo(
      "#work",
      { backgroundColor: "#141820" },
      {
        backgroundColor: "#12131a",
        duration: 1,
        transitionProperty: "background-color",
      }
    );
  }, []);
  return (
    <section id="work" className="py-20 w-full z-[5] overflow-hidden flex">
      <div className="w-full mx-auto max-w-[1200px] px-10 flex flex-col gap-20">
        <p className="work-header pt-20">Selected Work</p>

        <div className="flex flex-col font-clash text-[#233554] border-t border-light-text">
          <Link
            href={"/"}
            className="w-full group relative px-0 hover:px-12 transition-[padding] duration-500 flex items-center border-b border-light-text"
          >
            <div className="w-full flex z-[4] justify-between flex-col md:flex-row gap-4 items-center py-10">
              <p className="text-4xl font-bold text-light-text">IIIT Dharwad</p>
              <p className="text-sm text-[#8892b0]">
                Design & Development © 2024
              </p>
            </div>
            <div className="bg-main-text opacity-10 h-0 group-hover:h-full transition-[height] duration-500 absolute w-screen left-1/2 -translate-x-1/2 z-0"></div>
          </Link>
          <Link
            href={"/"}
            className="w-full group relative px-0 hover:px-12 transition-[padding] duration-500 flex items-center border-b border-light-text"
          >
            <div className="w-full flex z-[4] justify-between flex-col md:flex-row gap-4 items-center py-10">
              <p className="text-4xl font-bold text-light-text">IIIT Dharwad</p>
              <p className="text-sm text-[#8892b0]">
                Design & Development © 2024
              </p>
            </div>
            <div className="bg-main-text opacity-10 h-0 group-hover:h-full transition-[height] duration-500 absolute w-screen left-1/2 -translate-x-1/2 z-0"></div>
          </Link>
          <Link
            href={"/"}
            className="w-full group relative px-0 hover:px-12 transition-[padding] duration-500 flex items-center border-b border-light-text"
          >
            <div className="w-full flex z-[4] justify-between flex-col md:flex-row gap-4 items-center py-10">
              <p className="text-4xl font-bold text-light-text">IIIT Dharwad</p>
              <p className="text-sm text-[#8892b0]">
                Design & Development © 2024
              </p>
            </div>
            <div className="bg-main-text opacity-10 h-0 group-hover:h-full transition-[height] duration-500 absolute w-screen left-1/2 -translate-x-1/2 z-0"></div>
          </Link>
          <Link
            href={"/"}
            className="w-full group relative px-0 hover:px-12 transition-[padding] duration-500 flex items-center border-b border-light-text"
          >
            <div className="w-full flex z-[4] justify-between flex-col md:flex-row gap-4 items-center py-10">
              <p className="text-4xl font-bold text-light-text">IIIT Dharwad</p>
              <p className="text-sm text-[#8892b0]">
                Design & Development © 2024
              </p>
            </div>
            <div className="bg-main-text opacity-10 h-0 group-hover:h-full transition-[height] duration-500 absolute w-screen left-1/2 -translate-x-1/2 z-0"></div>
          </Link>
          <Link
            href={"/"}
            className="w-full group relative px-0 hover:px-12 transition-[padding] duration-500 flex items-center border-b border-light-text"
          >
            <div className="w-full flex z-[4] justify-between flex-col md:flex-row gap-4 items-center py-10">
              <p className="text-4xl font-bold text-light-text">IIIT Dharwad</p>
              <p className="text-sm text-[#8892b0]">
                Design & Development © 2024
              </p>
            </div>
            <div className="bg-main-text opacity-10 h-0 group-hover:h-full transition-[height] duration-500 absolute w-screen left-1/2 -translate-x-1/2 z-0"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
