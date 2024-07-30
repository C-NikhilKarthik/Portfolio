"use client";
import About from "@/components/About";
import Curve from "@/components/Curve";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import PreLoader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Works from "@/components/Works";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="flex relative flex-col bg-main items-center">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      {/* {!isLoading && <MainScene />} */}
      <div className="z-[5]">
        <ScrollProgress />
        <Landing />
        <About />
        <Works />
        <Curve />
      </div>

      <Footer />
    </main>
  );
}
