import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top center",
        scrub: 1,
        // markers: true,
      },
    });

    // First animation
    tl.fromTo("#about", { scale: 0.9, y: 100 }, { scale: 1, y: 0 });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "center center",
        scrub: 1,
        // markers: true,
      },
    });

    t2.fromTo(
      "#line_about",
      { strokeDasharray: "0px 1px" },
      { strokeDasharray: "1px 1px" }
    );
  }, []);

  return (
    <section
      id="about"
      className="p-4 pb-10 px-10 h-full overflow-hidden min-h-screen rounded-t-2xl relative bg-gradient-to-b from-[#020c1b] to-[#233554] text-[var(--background-rgb)] flex justify-center w-full"
    >
      <svg
        className="w-screen absolute h-screen bg-transparent z-1 left-1/2 top-0 -translate-x-1/2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1200"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="30%" stopColor="#64ffda"></stop>
            <stop offset="100%" stopColor="#e6f1ff"></stop>
          </linearGradient>
        </defs>
        <path
          id="line_about"
          className=" stroke-[2rem]"
          strokeDasharray="1px 1px"
          d="M322.278,-157.333 C325.078,-147.633 253.578,174.467 261.878,357.467 270.278,541.867 250.178,625.967 189.478,702.967 98.878,802.867 30.378,823.567 -95.822,786.167 -236.922,744.167 -438.322,521.267 -195.822,446.967 69.778,365.667 258.778,497.267 337.478,548.867 385.078,579.967 405.478,601.067 453.678,642.067 502.878,684.067 451.141,850.593 535.633,781.317 580.165,744.804 589.778,878.167 633.778,886.467 670.478,893.367 717.678,821.267 684.478,808.167 646.778,793.367 635.978,815.067 633.078,828.267 626.078,858.867 655.678,921.467 701.178,924.567 746.378,927.667 759.178,845.267 774.978,890.767 779.078,902.467 774.578,952.367 787.878,960.367 804.178,970.067 813.478,928.467 828.578,946.767 846.478,968.467 753.578,1061.567 1414.078,1039.467 "
          fill="none"
          stroke="#64ffda"
          strokeWidth="10px"
          pathLength="1"
          strokeDashoffset="0px"
        ></path>
      </svg>
      <div className="mx-auto w-full max-w-[1000px] z-[2] gap-6 flex flex-col tracking-wider">
        <div className="about-header pt-40">About me</div>
        <div className="flex gap-10 flex-col md:flex-row-reverse items-center font-clash text-xl">
          <div className="flex w-fit flex-none justify-center">
            <div
              className="relative rounded z-[2] cursor-pointer image transition-[filter] duration-500
                        after:top-6 after:rounded-md after:left-6 w-full md:max-w-[300px] 
                        after:block after:w-full after:h-full after:border-4 after:-z-[1]
                      after:border-[#66fcf1] after:absolute hover:after:top-2 after:duration-500 after:transition-[top,left] hover:after:left-2"
            >
              <Image
                width={0}
                height={0}
                sizes={"100%"}
                src="/Photo.jpg"
                className="rounded z-10 h-full w-full object-cover"
                alt="Photo1"
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
            <div className="rounded-lg text-[#ccd6f6] border md:col-span-4 backdrop-blur-lg border-[#112240] p-4 hover:bg-slate-800/50 shadow-[inset_1px_2px_3px_0_rgba(148,163,184,0.1)] cursor-pointer">
              A dynamic and ambitious third-year B.Tech CSE student at IIIT
              Dharwad. I&apos;m passionate about technology, driven to innovate,
              and eager to create impactful solutions.
            </div>
            <div className="rounded-lg border md:col-span-3 border-[#112240] backdrop-blur-lg flex flex-col gap-2 p-4 hover:bg-slate-800/50 shadow-[inset_1px_2px_3px_0_rgba(148,163,184,0.1)] cursor-pointer">
              <div className="font-bold text-2xl">Interests</div>
              <div className="text-[#ccd6f6]">
                Frontend development with React, 3D graphics with Three.js, and
                exploring machine learning.
              </div>
            </div>
            <div className="rounded-lg exp-img bg-cover flex flex-col items-center backdrop-blur-lg justify-center hover:bg-slate-800/50 shadow-[inset_1px_2px_3px_0_rgba(148,163,184,0.1)] cursor-pointer p-4">
              <p className="text-4xl font-bold text-[#ccd6f6]">~2</p>
              <p className="text-[#ccd6f6] text-center text-sm">
                years of experience
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col flex-1 gap-4">
            <p>
              Hello! My name is Nikhil Karthik and I am a pre-final year student
              at IIIT Dharwad, pursuing CSE, B.Tech.
            </p>
            <p>
              Operating Systems, Astronomy, AI, and development are some of my
              main interests.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
