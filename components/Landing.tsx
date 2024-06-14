import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Landing() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const mainSection = document.querySelector("#main-section") as HTMLElement;
  //   const main1 = document.querySelector("#main1") as HTMLElement;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".header-main",
  //       start: "top center",
  //       scrub: 1,
  //       markers: true,
  //     },
  //   });

  //   // First animation
  //   tl.fromTo(
  //     ".header-main",
  //     { y: 0 },
  //     { y: 50, letterSpacing: ".3rem", transitionProperty: "letter-spacing" }
  //   );
  // }, []);
  return (
    <section
      id="#home"
      className="p-4 relative bg-gradient-to-b from-[#a8b2d1] to-[#e6f1ff] h-screen flex flex-col justify-center w-full"
    >
      <Navbar />
      <div className="header1">software Developer</div>
      <div className="header-main">Nikhil Karthik</div>
      <div className="flex flex-col gap-4">
        <div className="located">Located in India</div>
        <div className="flex w-full items-center justify-center">
          <div className="h-[24px] w-[3.875rem] rounded-l-full bg-[#FF671F]"></div>
          <div className="h-[24px] w-[3.875rem] bg-[#FFFFFF] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="20"
              height="20"
              viewBox="-10 -10 20 20"
              fill="#06038d"
            >
              <title>Ashoka Chakra</title>
              <circle
                fill="none"
                stroke="#06038d"
                r="8.625"
                strokeWidth="1.25"
              />
              <circle r="1.6" />
              <g id="d">
                <g id="c">
                  <g id="b">
                    <g id="a">
                      <path d="m0-8 .3 4.81409L0-.80235-.3-3.18591z" />
                      <circle transform="rotate(7.5)" r="0.35" cy="-8" />
                    </g>
                    <use xlinkHref="#a" transform="scale(-1)" />
                  </g>
                  <use xlinkHref="#b" transform="rotate(15)" />
                </g>
                <use xlinkHref="#c" transform="rotate(30)" />
              </g>
              <use xlinkHref="#d" transform="rotate(60)" />
              <use xlinkHref="#d" transform="rotate(120)" />
            </svg>
          </div>
          <div className="h-[24px] w-[3.875rem] rounded-r-full bg-[#046A38]"></div>
        </div>
      </div>
      {/* <Scene /> */}

      <div className="absolute left-0 bottom-6 w-full flex flex-col items-center">
        <div className="font-clash text-[#0a192f] text-[clamp(1rem,1.8vw,1.5rem)] h-[clamp(1.4rem,2vw,2.5rem)]">
          Scroll down to explore
        </div>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="guidance:down-arrow">
            <path
              d="M6.25 20C7.1775 20 8.5625 20.9163 9.725 21.8438C11.225 23.0363 12.5338 24.4612 13.5325 26.095C14.2813 27.32 15 28.805 15 30M15 30C15 28.805 15.7187 27.3187 16.4675 26.095C17.4675 24.4612 18.7762 23.0363 20.2737 21.8438C21.4375 20.9163 22.825 20 23.75 20M15 30V0"
              stroke="#0a192f"
              strokeWidth="1.25"
            ></path>
          </g>
        </svg>
      </div>
    </section>
  );
}
