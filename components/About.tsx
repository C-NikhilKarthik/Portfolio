"use client";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useAnimation,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Paragraph from "@/components/Character";
import Image from "next/image";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {
  // const imageControls = useAnimation();

  useEffect(() => {
    const splitAbsolute = new SplitText("#about-behind", {
      type: "words,chars",
    });

    const mySplitText = new SplitText("#about-text", { type: "words,chars" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-main",
        start: "top top",
        end: "center center",
        scrub: 1,
      },
    });

    tl.from(splitAbsolute.chars, {});

    tl.fromTo(
      mySplitText.chars,
      {
        opacity: 0,
        scale: 1.3,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
      }
    );

    tl.fromTo(
      "#about2",
      {
        opacity: 0,
        translateY: "100%",
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 1.5,
      },
      ">"
    );

    tl.fromTo(
      "#photo",
      {
        scale: 0.3,
        opacity: 0,
        translateY: "40vh",
      },
      {
        scale: 1,
        opacity: 1,
        translateY: 0,
        duration: 2,
      },
      "+=1"
    );

    tl.to(
      "#text-span",
      {
        translateY: -100,
        duration: 2,
      },
      "-=2" // Adjust the timing as needed
    );

    tl.to(
      "#about2",
      {
        translateY: -100,
        duration: 2,
      },
      "<" // Adjust the timing as needed
    );
  }, []);

  return (
    <>
      <div id="about-main" className="relative w-full h-[450vh]">
        <section
          id="about"
          className="sticky top-0 flex items-center justify-center min-h-[100vh] overflow-hidden bg-[#141820]"
        >
          <div id="text-span" className="max-w-[90%]">
            <div className="relative">
              <div className="flex items-center justify-center gap-[17px] mb-[83px] text-[length:18px] text-center text-main-text">
                [Hi <div className="block w-8 h-[1px] bg-main-text"></div>{" "}
                there]
              </div>
              <span className="font-atypdisplay text-[length:24px] about-para md:text-[length:30px] lg:text-[length:36px]">
                <span
                  id="about-behind"
                  className="absolute opacity-20 text-center max-w-[900px] text-main-text "
                >
                  I CRAFT EXCEPTIONAL DIGITAL EXPERIENCES. CREATING INNOVATIVE
                  SOLUTIONS TO COMPLEX PROBLEMS.
                </span>
                <motion.span
                  id="about-text"
                  className="max-w-[900px] text-main-text text-center inline-block"
                >
                  I CRAFT EXCEPTIONAL DIGITAL EXPERIENCES. CREATING INNOVATIVE
                  SOLUTIONS TO COMPLEX PROBLEMS.
                </motion.span>
              </span>
            </div>
          </div>
          <motion.div
            id="about2"
            className="absolute bottom-3 gap-6 flex w-full max-w-[350px] items-center flex-col md:max-w-[500px] text-center transition-all justify-center"
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 0H8.5V6.58579L3.84315 1.92893L2.42893 3.34315L7.08578 8H0.5V10H7.08579L2.42893 14.6569L3.84315 16.0711L8.5 11.4142V18H10.5V11.4142L15.1569 16.0711L16.5711 14.6569L11.9142 10H18.5V8H11.9142L16.5711 3.34315L15.1569 1.92893L10.5 6.58579V0Z"
                fill="#8892b0"
              ></path>
            </svg>
            <div className="text-secondary-text font-atypdisplay">
              I&apos;m Nikhil Karthik, a Web Developer and ML enthusiast based
              in Bangalore, with a deep passion for innovative technology
              solutions.
            </div>
          </motion.div>

          <motion.div className="hidden md:flex absolute" id="photo">
            <Image
              height={0}
              width={0}
              alt={"main photo"}
              sizes="100%"
              className="w-[250px] h-auto object-cover rounded-lg"
              src={"/Photo.jpg"}
            />
          </motion.div>
        </section>
      </div>
      <div className="w-full flex md:hidden">
        <Image
          height={0}
          width={0}
          alt={"main photo"}
          sizes="100%"
          className="w-full h-auto object-cover rounded-lg"
          src={"/Photo.jpg"}
        />
      </div>
    </>
  );
}
