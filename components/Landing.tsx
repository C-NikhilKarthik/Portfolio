"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handle(e: any) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    document.addEventListener("mousemove", handle);
    return () => {
      document.removeEventListener("mousemove", handle);
    };
  }, []);

  return (
    <section className="w-screen h-screen relative flex flex-col items-center bg-main justify-center">
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition duration-1000 lg:absolute"
        style={{
          background: `radial-gradient(440px at ${mousePosition.x}px ${
            mousePosition.y +
            (typeof window !== "undefined" ? window.pageYOffset : 0)
          }px, #5925bb80, transparent 70%)`,
        }}
      ></div>
      <Navbar />
      <div className="absolute bg-[url('/hero-bg.svg')] bg-cover h-full w-full z-[2]"></div>
      <div className="flex z-[3] flex-col">
        <div className="header1">software Developer</div>
        <div className="header-main">Nikhil Karthik</div>
      </div>
      <div className="absolute z-[3] bottom-[44px] md:bottom-[88px] w-full flex items-center justify-center">
        <div className="gap-10 flex flex-col w-[280px] font-AtypDisplay">
          <div className="flex w-full justify-between text-main-text text-[length:16px]">
            <p className="">[About</p>
            <p className="">me]</p>
          </div>
          <div className="flex flex-col uppercase items-end text-end text-light-text text-[length:14px]">
            <p>Combining innovative design</p>
            <p>with strategic foresight to craft captivating, user-centric </p>
            <p>digital experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
