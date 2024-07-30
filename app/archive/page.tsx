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
          <div className="w-full text-gray-400 flex pb-[clamp(1.5em,4vw,2.5em)]">
            <div className="pl-6 lg:pl-[6vw] text-left w-[86%] md:w-[44%]">
              <h5>Project</h5>
            </div>
            <div className="w-[32%] hidden md:flex">
              <h5>Technologies</h5>
            </div>
            <div className="w-[10%] hidden md:flex">
              <h5>Links</h5>
            </div>
            <div className="w-[14%] pr-[6vw] text-right">
              <h5>Year</h5>
            </div>
          </div>

          <ul className="list-none">
            {Archives?.map((proj: archiveType, i) => (
              <li
                key={i}
                className="w-full  text-white hover:text-slate-500 transition-all duration-300"
              >
                <div className="h-[1px] w-full bg-gray-500" />
                <div className="py-[2em] flex w-full">
                  <div className="pl-6 lg:pl-[6vw] flex flex-col gap-4 md:justify-center text-left w-[76%] md:w-[44%]">
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
                  <div className="w-[32%] hidden md:flex gap-3 pr-10 flex-wrap">
                    {proj?.tech?.map((t, i) => (
                      <div
                        key={i}
                        className="rounded px-2 py-1 border-gray-700 border bg-[#21222fb5]"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="w-[10%] hidden md:flex gap-4 items-center text-right">
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
                  <div className="w-[24%] pr-[6vw] flex flex-col gap-6 text-right">
                    <div className="flex md:hidden gap-4 items-center justify-end">
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
