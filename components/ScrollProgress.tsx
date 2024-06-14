"use client";
import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="progress-container"
      className="h-[20vh] w-[8px] fixed right-3 top-1/2 -translate-y-1/2 z-30 bg-[#1415164d] rounded-full backdrop-blur"
    >
      <div
        className="bg-[#64ffda] w-full flex top-0 relative rounded-full"
        style={{
          height: `${scrollPercentage}%`,
        }}
      />
    </div>
  );
}
