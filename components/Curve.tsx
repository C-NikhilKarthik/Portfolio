"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Curve() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <motion.div
      ref={container}
      style={{ height }}
      className="bg-red-500 w-full relative"
    >
      <div className="h-[1050%] w-[120%] -left-[10%] rounded-[0_0_50%_50%] bg-[#12131a] z-[5] absolute shadow-[0px_60px_50px_rgba(0,0,0,0.748)]"></div>
    </motion.div>
  );
}
