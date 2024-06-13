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
    <section className="p-4 bg-gradient-to-b from-[#a8b2d1] to-[#e6f1ff] h-screen flex flex-col justify-center w-full">
      <Navbar />
      <div className="header1">software Developer</div>
      <div className="header-main">Nikhil Karthik</div>
      {/* <Scene /> */}
    </section>
  );
}
