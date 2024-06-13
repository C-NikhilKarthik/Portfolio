"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import MainScene from "@/components/MainScene";
import PreLoader from "@/components/Preloader";
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
    <main className="flex relative flex-col items-center">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      {/* {!isLoading && <MainScene />} */}
      <Landing />
      <About />
      <Works />
      <Footer />
    </main>
  );
}
