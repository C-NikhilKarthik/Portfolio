import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import Paragraph from "@/components/Character";

// gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end center"],
  });

  return (
    <div id="about-main" ref={container} className="relative w-full h-[450vh]">
      <section
        id="about"
        className="sticky top-0 flex items-center justify-center min-h-[100vh] overflow-hidden bg-[#141820]"
      >
        <div className="max-w-[90%]">
          <div className="relative">
            <div className="flex items-center justify-center gap-[17px] mb-[83px] text-[length:18px] text-center text-main-text">
              [Hi <div className="block w-8 h-[1px] bg-main-text"></div> there]
            </div>
            <Paragraph
              scrollYProgress={scrollYProgress}
              paragraph="I CRAFT EXCEPTIONAL DIGITAL EXPERIENCES.CREATING INNOVATIVE SOLUTIONS TO COMPLEX PROBLEMS."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
