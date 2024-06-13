import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        scrub: 1,
      },
    });

    // First animation
    tl.to("#navbar", {
      color: "#e6f1ff",
      transitionProperty: "color",
      duration: 1,
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "top top",
        scrub: 1,
      },
    });

    // First animation
    t2.to("#navbar", {
      color: "#0a192f",
      transitionProperty: "color",
      duration: 1,
    });
  }, []);

  return (
    <nav
      id="navbar"
      className="w-full fixed top-0 left-0 p-4 z-20 flex backdrop-blur text-[#0a192f] bg-[#f8f9fa00] justify-between items-center"
    >
      <div className="text-xl font-semibold">Nikhil Karthik</div>

      <div className="flex gap-4 items-center">
        <div>Home</div>
        <div>About</div>
        <div>Work</div>
        <div>Contact</div>
      </div>
    </nav>
  );
}
