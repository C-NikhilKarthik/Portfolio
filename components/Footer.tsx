import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="h-[85vh] w-full relative"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100% 0 100%)" }}
    >
      <div className="h-[185vh] w-full relative -top-[100vh]">
        <div className="h-[85vh] w-full sticky top-[15vh] overflow-hidden">
          <svg
            className="bg-transparent z-[1] w-1/5 h-auto absolute top-[120px] right-[-20px] rotate-[20deg]"
            width="324"
            height="187"
            viewBox="0 0 324 187"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.0201 162.484C39.0972 161.054 38.5282 160.704 38.2834 160.083C31.2973 115.52 39.7717 74.2552 67.4449 38.1125C74.4104 28.9684 83.599 21.8181 94.253 16.7456C116.994 5.6754 143.121 10.5014 160.396 28.8075C169.454 38.2972 176.457 48.958 178.269 62.3169C174.109 66.905 169.814 71.3313 166.25 75.9713C160.473 83.5687 157.756 92.1827 159.75 101.807C161.062 108.972 165.131 113.827 169.896 114.242C176.149 114.787 180.688 110.982 182.654 105.752C185.401 98.4911 187.281 90.8542 188.701 83.3273C189.585 78.4539 189.305 73.179 189.295 68.2278C209.922 55.6233 232.217 66.416 241.958 93.5166C239.906 96.3381 237.693 99.2956 235.777 102.279C228.923 113.533 226.646 125.636 231.379 138.199C233.201 143.008 236.106 147.461 242.223 147.844C246.852 148.097 251.392 144.292 253.761 137.898C257.369 127.712 257.105 117.188 255.786 106.722C255.211 103.072 254.636 99.4213 253.898 95.9068C284.984 75.3626 326.383 83.919 335.921 118.353C337.893 116.424 339.812 115.091 340.242 113.629C340.699 111.868 339.856 109.545 338.959 107.816C330.025 91.8869 317.688 80.4615 298.82 78.3679C284.716 76.6893 271.161 78.9589 257.8 84.0956C255.934 84.8332 254.068 85.5707 252.066 86.1464C251.904 86.2823 251.471 86.0946 250.442 85.8549C249.383 84.2626 247.891 82.4825 246.724 80.4306C231.954 55.8922 216.623 49.4564 187.947 56.4093C186.968 53.9239 185.717 51.1147 184.765 48.3315C178.536 32.3378 168.417 19.6053 153.622 10.516C129.587 -4.32858 100.793 -2.78635 77.1978 14.51C64.3596 23.8926 54.4492 35.7804 46.762 49.662C28.3132 83.3079 21.3978 118.859 29.2647 156.897C29.5391 158.871 30.1112 160.871 30.3856 162.845C30.3591 163.143 30.1705 163.576 29.6046 164.877C23.696 160.462 19.8422 154.876 15.8262 149.426C11.7837 144.273 7.92987 138.687 3.64263 132.913C-0.165951 136.932 0.111583 140.556 1.44454 144.123C3.18438 148.175 4.59998 152.498 7.15049 155.871C14.1504 164.881 21.448 173.917 29.3942 182.41C35.7128 188.961 41.0695 187.778 44.1672 179.947C50.6041 163.256 56.9054 146.403 63.2067 129.551C64.2028 126.787 64.6034 123.972 65.3814 120.289C59.2374 120.204 57.7284 123.673 56.2458 126.844C51.2883 138.714 45.9239 150.097 40.0201 162.484ZM243.018 138.913C235.119 126.524 236.42 113.586 246.066 104.675C247.441 116.196 249.031 126.985 243.018 138.913ZM172.044 105.278C166.311 93.828 168.999 83.8613 179.703 76.543C179.669 87.0408 179.28 96.4578 172.044 105.278Z"
              fill="none"
              strokeDasharray="1px 1px"
              stroke="#F0F1FA"
              strokeWidth="1px"
              pathLength="1"
              strokeDashoffset="0px"
            ></path>
          </svg>
          <div className="bg-[#100d12f2]  relative font-clash text-white py-16 px-12 md:py-8 h-full w-full flex flex-col items-center md:justify-center">
            <div className="relative w-[90%] h-[30%]">
              <div className="h-full w-full py-10 flex flex-col relative justify-center items-center gap-5">
                <span className="text-[length:2rem] text-center">
                  Ready to level up your project ?
                </span>
                <a
                  target="_self"
                  aria-label="/contact"
                  className="w-full"
                  href="/contact"
                >
                  <div className="border border-[#868686] text-align text-white rounded-3xl px-10 py-5">
                    <div className="ml-5 ">
                      <span className="w-full inline-flex">
                        <p className="mr-5 w-full font-august text-center text-[length:8vw] uppercase">
                          Get in touch !!!
                        </p>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 justify-between w-full p-10 gap-4 flex flex-col-reverse md:flex-row">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
