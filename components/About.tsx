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

export default function About() {
  // const imageControls = useAnimation();

  const element = useRef(null);
  const photo = useRef(null);

  const { scrollYProgress: elementScrollYProgress } = useScroll({
    target: element,
    offset: ["start start", "0.4 end"],
  });

  const { scrollYProgress: textScrollYProgress } = useScroll({
    target: element,
    offset: ["0.4 start", "0.6 end"],
  });

  // Photo animation starts after character animation
  const { scrollYProgress: photoScrollYProgress } = useScroll({
    target: element,
    offset: ["0.6 start", "0.9 end"],
  });

  const y = useTransform(photoScrollYProgress, [0, 1], [200, 0]);
  const scale = useTransform(photoScrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(photoScrollYProgress, [0, 1], [0, 1]);

  const y_text = useTransform(textScrollYProgress, [0, 1], [200, 0]);
  const opacity_text = useTransform(textScrollYProgress, [0, 1], [0, 1]);
  return (
    <>
      <div id="about" ref={element} className="relative w-full h-[500vh]">
        <section
          ref={photo}
          id="about"
          className="sticky top-0 flex items-center justify-center min-h-[100vh] overflow-hidden bg-[#141820]"
        >
          <div id="text-span" className="max-w-[90%]">
            <div className="relative">
              <div className="flex items-center justify-center gap-[17px] mb-[83px] text-[length:18px] text-center text-main-text">
                [Hi <div className="block w-8 h-[1px] bg-main-text"></div>{" "}
                there]
              </div>
              <span className="md:font-atypdisplay font-rooftop text-[length:24px] about-para md:text-[length:30px] lg:text-[length:36px]">
                <Paragraph
                  scrollYProgress={elementScrollYProgress}
                  paragraph={
                    "I CRAFT EXCEPTIONAL DIGITAL EXPERIENCES. CREATING INNOVATIVE SOLUTIONS TO COMPLEX PROBLEMS."
                  }
                />
              </span>
            </div>
          </div>
          <motion.div
            id="about2"
            style={{
              translateY: y_text,
              opacity: opacity_text,
            }}
            className="absolute bottom-6 gap-6 flex w-full max-w-[350px] items-center flex-col md:max-w-[500px] text-center transition-all justify-center"
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

          <motion.div
            className="hidden md:flex absolute"
            id="photo"
            style={{
              translateY: y,
              scale: scale,
              opacity: opacity,
            }}
          >
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
