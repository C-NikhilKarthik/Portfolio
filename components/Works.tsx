import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Project from "./Project";
import Image from "next/image";

const projects = [
  {
    title: "IIIT Dharwad",
    src: "IIIT_Dharwad.png",
    color: "#000000",
  },
  {
    title: "Landing Page",
    src: "Portfolio.png",
    color: "#8C8C8C",
  },
  {
    title: "SnapMark",
    src: "Snapmark.jpeg",
    color: "#EFE8D3",
  },
  {
    title: "BlogPenn",
    src: "BlogPenn.png",
    color: "#706D63",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Works() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  let xMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let yMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let xMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  let yMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  let xMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);
  let yMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current?.(x);
    yMoveContainer.current?.(y);
    xMoveCursor.current?.(x);
    yMoveCursor.current?.(y);
    xMoveCursorLabel.current?.(x);
    yMoveCursorLabel.current?.(y);
  };

  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    // First animation
    tl.fromTo(
      "#work",
      { backgroundColor: "#141820" },
      {
        backgroundColor: "#12131a",
        duration: 1,
        transitionProperty: "background-color",
      }
    );
  }, []);

  return (
    <section id="work" className="py-20 w-full z-[5] overflow-hidden flex">
      <div
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        className="w-full mx-auto max-w-[1200px] px-10 flex flex-col gap-20"
      >
        <p className="work-header pt-20">Selected Work</p>

        <div className="flex flex-col font-clash text-[#233554] border-t border-light-text">
          {projects.map((project, index) => (
            <Project
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
            />
          ))}

          <>
            <motion.div
              ref={modalContainer}
              variants={scaleAnimation}
              initial="initial"
              animate={active ? "enter" : "closed"}
              className="fixed top-1/2 left-1/2 bg-white pointer-events-none overflow-hidden z-3 h-[350px] w-[400px]"
            >
              <div
                style={{ top: index * -100 + "%" }}
                className="relative h-full w-full transition-[top_0.5s_cubic-bezier(0.76,0,0.24,1)]"
              >
                {projects.map((project, index) => {
                  const { src, color } = project;
                  return (
                    <div
                      className="h-full w-full flex items-center justify-center"
                      style={{ backgroundColor: color }}
                      key={`modal_${index}`}
                    >
                      <Image
                        src={`/projects/${src}`}
                        width={300}
                        height={0}
                        alt="image"
                        className="h-auto"
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              ref={cursor}
              className="w-[80px] h-[80px] rounded-[50%] bg-[#8a84e3] text-white fixed z-3 flex items-center justify-center pointer-events-none"
              variants={scaleAnimation}
              initial="initial"
              animate={active ? "enter" : "closed"}
            ></motion.div>
            <motion.div
              ref={cursorLabel}
              className="w-[80px] h-[80px] rounded-[50%] text-white fixed z-3 flex items-center justify-center pointer-events-none bg-transparent"
              variants={scaleAnimation}
              initial="initial"
              animate={active ? "enter" : "closed"}
            >
              View
            </motion.div>
          </>
        </div>
      </div>
    </section>
  );
}
