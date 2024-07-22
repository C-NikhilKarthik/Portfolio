"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const [mousePosition, setMousePosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
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
      <div className="flex z-[3] flex-col -top-20 md:top-0 relative">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 2.5, duration: 0.7, ease: "easeOut" }}
          className="header1"
        >
          software Developer
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 2.58, duration: 0.7, ease: "easeOut" }}
          className="header-main"
        >
          Nikhil Karthik
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
        className="absolute z-[3] bottom-[44px] md:bottom-[88px] w-full flex items-center justify-center"
      >
        <div className="gap-10 flex flex-col w-[320px] font-rooftop">
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
      </motion.div>
    </section>
  );
}
