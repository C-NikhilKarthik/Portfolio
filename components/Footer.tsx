"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="relative bg-[#1C1D20] z-[2] text-white w-full flex flex-col items-center justify-center"
    >
      <div className="pt-[200px] w-full max-w-[1800px] bg-[#1C1D20]">
        <div className="border-b border-b-gray-500 pb-[100px] mx-[40px] md:mx-[200px] relative">
          <span className="flex items-center">
            <h2 className="text-[5vw] leading-[1.1]">Let&apos;s work</h2>
          </span>
          <h2 className="text-[5vw] leading-[1.1]">together</h2>
          <motion.div
            style={{ x }}
            className="absolute left-0 -translate-x-1/5 -translate-y-1/2"
          >
            <Link
              href={"/contact"}
              className="w-[150px] md:w-[180px] aspect-square bg-[#8a84e3] text-white rounded-full absolute flex items-center justify-center"
            >
              <p className="z-[2] relative">Get in touch</p>
            </Link>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            className={"absolute top-[30%] left-full"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className="flex flex-col md:flex-row gap-5 border-gray-500 border w-fit px-6 py-4 rounded-full mt-[100px] mx-[40px] md:mx-[200px]">
          <p>nikhilkarthik241103@gmail.com</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 justify-between mt-[200px] p-5">
          <div className="flex gap-[10px] items-end">
            <span className="flex flex-col gap-4">
              <h3 className="px-1 text-gray-400">Version</h3>
              <p className="px-1 cursor-pointer ">2024 © Edition</p>
            </span>
            {/* <span className="flex flex-col gap-4">
              <h3 className="text-gray-400">Local Time</h3>
              <p>11:49 PM GMT+2</p>
            </span> */}
          </div>
          <span className="flex border-b border-b-gray-500 md:border-b-0 flex-col gap-4 pb-4 md:pb-0 md:items-end">
            <h3 className="text-gray-400">Socials</h3>
            <div className="flex gap-4 flex-wrap">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/nikhilkarthik24/"
              >
                Linkedin
              </a>
              <a target="_blank" href="https://www.x.com/@nikhilkarthik24/">
                Twitter
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/nikhilkarthik_24/"
              >
                Instagram
              </a>
            </div>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
