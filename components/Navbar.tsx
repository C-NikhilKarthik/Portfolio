import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";

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
      color: "#f0f1fa",
      transitionProperty: "color",
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
    });
  }, []);

  return (
    <>
      <motion.nav
        id="navbar"
        variants={navbarColors}
        initial={false}
        animate={open ? "open" : "closed"}
        className="w-full fixed top-0 left-0 p-4 z-20 flex font-clash backdrop-blur text-[#0a192f] bg-[#f8f9fa00] justify-between items-center"
      >
        <div className="text-xl font-semibold">Nikhil Karthik</div>

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
            className="w-full h-full bg-gradient-to-b from-[#020c1b] to-[#233554]"
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
            <span className="text-[#ccd6f6] font-clash text-[length:1em]">
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

          <div className="absolute bottom-0 justify-between text-[#f0f1fa] w-full p-10 gap-4 flex flex-col-reverse md:flex-row">
            <div className="flex gap-[10px] items-center md:items-start">
              <div className="flex flex-col gap-4">
                <p style={{ color: "gray" }}>Version</p>
                <div className="">2.0.0 © 2024</div>
              </div>
              <div className="flex flex-col gap-4">
                <p style={{ color: "gray" }}>Resource</p>
                <div className="">Portfolio v1.0.0</div>
              </div>
            </div>
            <div className="flex gap-4 flex-col items-center md:items-end">
              <p style={{ color: "gray", width: "fit-content" }}>
                Social Media
              </p>
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
