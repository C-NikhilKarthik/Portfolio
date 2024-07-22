"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import Globe from "./Globe";

const gridVariants = {
  open: (index: number) => ({
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
    },
  }),
  closed: (index: number) => ({
    y: "-100%",
    transition: {
      delay: (4 - index) * 0.08,
      duration: 0.5,
    },
  }),
};

const containerVariants = {
  open: {
    translateY: 0, // Move down when open
  },
  closed: {
    translateY: "-100%", // Move up when closed
  },
};

const sidebarVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  closed: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const navbarColors = {
  open: {
    color: "#f0f1fa",
    transition: {
      duration: 0.5,
    },
  },
};

const navItemVariants = {
  open: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5 + index * 0.1,
      duration: 0.5,
    },
  }),
  closed: {
    x: 100,
    opacity: 0,
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        id="navbar"
        variants={navbarColors}
        initial={false}
        animate={open ? "open" : "closed"}
        className="w-full fixed top-0 left-0 p-4 md:px-10 lg:px-24 z-20 flex font-clash backdrop-blur text-light-text bg-[#f8f9fa00] justify-between items-center"
      >
        <div className="text-xl font-semibold">Nikhil Karthik</div>

        <div className="hidden md:flex gap-6 items-center absolute left-1/2 -translate-x-1/2">
          <div className="relative w-[3rem] h-[3rem]">
            <Globe />
          </div>
          <p className="font-AtylDisplay">Based in Bengaluru, India</p>
        </div>

        <div className="cursor-pointer">
          {!open && <RxHamburgerMenu onClick={() => setOpen(!open)} />}
          {open && <IoClose onClick={() => setOpen(!open)} />}
        </div>
      </motion.nav>

      <motion.div
        className="fixed top-0 w-screen left-0 overflow-hidden h-screen transition-all duration-300 z-10 grid grid-cols-5"
        initial={false}
        animate={open ? "open" : "closed"} // Apply animation based on the open state
        variants={containerVariants} // Define animation variants for the container
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            custom={i}
            className="w-full h-full bg-gradient-to-b from-[#12131a] to-[#1d232c]"
            variants={gridVariants}
          ></motion.div>
        ))}

        <motion.div
          className="absolute top-0 h-screen w-screen flex pt-20 md:pt-0 md:items-center justify-center"
          initial={false}
          animate={open ? "open" : "closed"}
          variants={sidebarVariants}
        >
          <div className="flex text-[#f0f1fa] font-august items-center flex-col w-full">
            <span className="text-[#a1b7ff] font-clash text-[length:1em]">
              Navigation
            </span>
            {["Home", "About", "Work", "Contact"].map((text, index) => (
              <Link
                href={`/#${text.toLowerCase()}`}
                onClick={() => setOpen(!open)}
                key={index}
              >
                <motion.div
                  custom={index}
                  className="text-[clamp(2.5rem,5vw,5rem)] uppercase"
                  variants={navItemVariants}
                  initial="closed"
                  animate={open ? "open" : "closed"}
                >
                  {text}
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="absolute bottom-0 justify-between text-[#fafbff] font-clash w-full py-10 px-5 gap-4 flex flex-col-reverse md:flex-row">
            <div className="font-AtylDisplay text-center border-t border-[#a1b7ff6e] md:border-0 pt-4 flex flex-col gap-5">
              <div>Based in Bengaluru, India</div>
              <div className="bg-[#a1b7ff0d] border border-[#a1b7ff46] backdrop-blur flex w-full justify-center p-[14px] gap-[11px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7.5"
                    stroke="#03FF93"
                    strokeOpacity="0.3"
                  />
                  <circle cx="8" cy="8" r="3" fill="#03FF93" />
                </svg>
                <div className="font-atypdisplay text-[#fafbff]">
                  Available for Work
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-col items-center md:items-end">
              <p className="text-[#a1b7ff]">Social Media</p>
              <div className="flex gap-[10px]">
                <div className="">GitHub</div>
                <div className="">LinkedIn</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
