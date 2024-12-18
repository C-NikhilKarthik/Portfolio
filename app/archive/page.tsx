import Navbar from "@/components/Navbar";
import React from "react";
import { Archives, archiveType } from "@/data/archive";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Footer from "@/components/Footer";
import Curve from "@/components/Curve";

export default function page() {
  return (
    <div className="bg-[#12131a] min-h-screen overflow-x-hidden w-full text-white">
      <Navbar />
      <div className="flex flex-col font-clash">
        <h1 className="text-[clamp(36px,6dvw,80px)] w-full arc-heading px-6 md:px-[12vw]">
          Archive
        </h1>

        <div className="w-full bg-[#12131a] pb-10 md:px-[6vw] z-[5]">
          <div className="w-full text-gray-400 grid grid-cols-[1fr,max-content] md:grid-cols-[1fr,1fr,max-content,max-content] pb-[clamp(1.5em,4vw,2.5em)]">
            <div className="pl-6 lg:pl-[6vw] text-left">
              <h5>Project</h5>
            </div>
            <div className="hidden md:flex">
              <h5>Technologies</h5>
            </div>
            <div className="hidden md:flex w-[10vw]">
              <h5>Links</h5>
            </div>
            <div className="w-[25vw] md:w-[10vw] text-left">
              <h5>Year</h5>
            </div>
          </div>

          <ul className="list-none">
            {Archives?.map((proj: archiveType, i) => (
              <li
                key={i}
                className="w-full relative group flex flex-col justify-center text-white transition-all duration-300"
              >
                <div className="bg-main-text opacity-10 h-0 group-hover:h-full transition-[height] duration-500 absolute w-screen left-1/2 -translate-x-1/2 z-0"></div>

                <div className="h-[1px] w-full bg-gray-500" />
                <div className="py-[2em] w-full grid grid-cols-[1fr,max-content] md:grid-cols-[1fr,1fr,max-content,max-content]">
                  <div className="pl-6 lg:pl-[6vw] flex flex-col gap-4 md:justify-center text-left">
                    <h5>{proj?.project}</h5>
                    <div className="w-full flex flex-wrap md:hidden gap-2">
                      {proj?.tech?.map((t, i) => (
                        <div
                          key={i}
                          className="rounded px-2 py-1 border-gray-700 border bg-[#21222fb5]"
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex gap-3 pr-10 flex-wrap">
                    {proj?.tech?.map((t, i) => (
                      <div
                        key={i}
                        className="rounded px-2 py-1 border-gray-700 border bg-[#21222fb5]"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="w-[10vw] hidden z-[5] md:flex gap-4 text-right">
                    {proj?.Link && (
                      <a
                        href={proj?.Link}
                        target="_blank"
                        aria-label="External Link"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                    {proj?.GitHubLink && (
                      <a
                        href={proj?.GitHubLink}
                        target="_blank"
                        aria-label="GitHub Link"
                        rel="noopener noreferrer"
                      >
                        <FiGithub />
                      </a>
                    )}
                  </div>
                  <div className="w-[25vw] md:w-[10vw] flex flex-col gap-6 text-left">
                    <div className="flex md:hidden gap-4 items-center">
                      {proj?.Link && (
                        <a
                          href={proj?.Link}
                          target="_blank"
                          aria-label="External Link"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                      {proj?.GitHubLink && (
                        <a
                          href={proj?.GitHubLink}
                          target="_blank"
                          aria-label="GitHub Link"
                          rel="noopener noreferrer"
                        >
                          <FiGithub />
                        </a>
                      )}
                    </div>
                    <h5>{proj?.year}</h5>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Curve />
      </div>
      <Footer />
    </div>
  );
}
