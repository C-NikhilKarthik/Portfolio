import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";

export default function Paragraph({
  paragraph,
  scrollYProgress,
}: {
  paragraph: string;
  scrollYProgress: MotionValue<number>;
}) {
  const words = paragraph.split(" ");
  return (
    <p className="flex text-[length:24px] justify-center about-para md:text-[length:30px] lg:text-[length:36px] leading-[1] py-10 max-w-[900px] text-main-text flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative mr-3 mt-3">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [1.5, 1]);
  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity, scale }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
};
