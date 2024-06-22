import Image from "next/image";
import React from "react";

function Roadmap() {
  return (
    <>
      <div className="bg-[#abd3df]  py-24 xl:py-36 -mt-7">
        <div
          id="roadmap"
          className="max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full"
        >
          <h1 className="text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal  leading-[100%] tracking-[1px] uppercase  text-white main-heading-2 text-center ">
            Roadmap
          </h1>
          <div className="flex flex-row flex-nowrap mt-12 lg:mt-[70px] justify-between">
            <div className="max-w-[500px] w-full md:block hidden"></div>
            <div className="sm:max-w-[80px] max-w-[50px] lg:max-w-[129px] min-w-[50px] sm:min-w-[80px] lg:min-w-[129px]">
              <div className="flex flex-col justify-center items-center h-full relative">
                <Image
                  src={"/img/png/rocket.png"}
                  width={129}
                  height={202}
                  alt="rocket"
                  className="w-full h-auto"
                />{" "}
                <div className="lg:w-1.5 w-0.5 sm:w-1 bg-black h-full -ml-0.5 sm:-ml-1 lg:-ml-1.5 -mt-2.5 sm:-mt-3.5 lg:-mt-6 relative">
                  {" "}
                  <div className="absolute -left-2 sm:-left-1.5   top-10 xl:top-12    z-10  w-[200px]">
                    <Image
                      src={"/img/png/right-line.png"}
                      width={166}
                      height={14}
                      alt="line"
                      className="w-full max-w-[200px] h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="max-w-[500px] w-full mt-[86px] sm:mt-32 lg:mt-48 relative z-20  ">
              <div className="flex flex-col gap-y-4">
                <div className="border-2 border-black px-5 xl:px-8 py-4 xl:py-6 rounded-3xl shadow-[4px_4px_0px_0px_#0C0B0B] bg-[#B7DFEB] ">
                  <p className=" text-2xl sm:text-[28px] lg:text-[32px] text-white leading-[100%] tracking-[0.6px]  uppercase small-heading ">
                    PHASE 1
                  </p>
                </div>

                <div className="border-2 border-black p-5 xl:p-8 rounded-3xl shadow-[8px_8px_0px_0px_#0C0B0B] bg-[#B7DFEB] ">
                  <ul className="flex flex-col gap-2.5 md:gap-3 xl:gap-4">
                    <li className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] flex items-start gap-2 lg:gap-3 ">
                      <span className="w-2 h-2 mt-2 lg:w-3 lg:h-3 rounded-full bg-black block "></span>
                      5% Dev Team
                    </li>
                    <li className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] flex items-start gap-2 lg:gap-3 ">
                      <span className="w-2 h-2 mt-2 lg:w-3 lg:h-3 rounded-full bg-black block "></span>
                      Website Landing Page
                    </li>
                    <li className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] flex items-start gap-2 lg:gap-3 ">
                      <span className="w-2 h-2 mt-2 lg:w-3 lg:h-3 rounded-full bg-black block "></span>
                      Presale
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse md:flex-row flex-nowrap justify-between">
            <div className="max-w-[500px] w-full mt-10  md:-mt-20 relative z-20">
              <div className="flex flex-col gap-y-4">
                <div className="border-2 border-black px-5 xl:px-8 py-4 xl:py-6 rounded-3xl shadow-[4px_4px_0px_0px_#0C0B0B] bg-[#B7DFEB] ">
                  <p className=" text-2xl sm:text-[28px] lg:text-[32px] text-white leading-[100%] tracking-[0.6px]  uppercase small-heading ">
                    PHASE 2
                  </p>
                </div>

                <div className="border-2 border-black p-5 xl:p-7 rounded-3xl shadow-[8px_8px_0px_0px_#0C0B0B] bg-[#B7DFEB] ">
                  <ul className="flex flex-col gap-2.5 md:gap-3 xl:gap-4">
                    <li className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] flex items-start gap-2 lg:gap-3 ">
                      <span className="w-2 h-2 mt-2 lg:w-3 lg:h-3 rounded-full bg-black block "></span>
                      Public Presale
                    </li>
                    <li className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] flex items-start gap-2 lg:gap-3 ">
                      <span className="w-2 h-2 mt-2 lg:w-3 lg:h-3 rounded-full bg-black block "></span>
                      Dexscreener and Birdseye Update
                    </li>
                    <li className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] flex items-start gap-2 lg:gap-3 ">
                      <span className="w-2 h-2 mt-2 lg:w-3 lg:h-3 rounded-full bg-black block "></span>
                      Build Community
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            <div className="sm:max-w-[80px] max-w-[50px] lg:max-w-[129px] min-w-[50px] sm:min-w-[80px] lg:min-w-[129px]">
              <div className="flex flex-col justify-center items-center h-full relative">
                <div className="lg:w-1.5 w-0.5 sm:w-1 bg-black h-full -ml-0.5 sm:-ml-1 lg:-ml-1.5 -mt-2.5 sm:-mt-3.5 lg:-mt-6 relative">
                  <div className="absolute -left-2 md:left-auto  md:-right-1.5   top-[70px] md:-top-12 lg:-top-10 xl:-top-8    z-10  w-[200px]">
                    <Image
                      src={"/img/png/left-line.png"}
                      width={166}
                      height={14}
                      alt="line"
                      className="w-full max-w-[200px] h-auto md:block hidden"
                    />{" "}
                    <Image
                      src={"/img/png/right-line.png"}
                      width={166}
                      height={14}
                      alt="line"
                      className="w-full max-w-[200px] h-auto md:hidden "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[500px] w-full md:block hidden"></div>
          </div>
          <div className="flex flex-row flex-nowrap   justify-between">
            <div className="max-w-[500px] w-full md:block hidden"></div>
            <div className="sm:max-w-[80px] max-w-[50px] lg:max-w-[129px] min-w-[50px] sm:min-w-[80px] lg:min-w-[129px]">
              <div className="flex flex-col justify-center items-center h-full relative">
                <div className="lg:w-1.5 w-0.5 sm:w-1 bg-black h-full -ml-0.5 sm:-ml-1 lg:-ml-1.5 -mt-2.5 sm:-mt-3.5 lg:-mt-6 relative">
                  <div className="absolute -left-2 sm:-left-1.5 top-[70px] md:top-10 xl:top-12 z-10 w-[200px]">
                    <Image
                      src={"/img/png/right-line.png"}
                      width={166}
                      height={14}
                      alt="line"
                      className="w-full max-w-[200px] h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="max-w-[500px] w-full mt-10 md:mt-3 lg:mt-0   relative z-20  ">
              <div className="flex flex-col gap-y-4">
                <div className="border-2 border-black px-5 xl:px-8 py-4 xl:py-6 rounded-3xl shadow-[4px_4px_0px_0px_#0C0B0B] bg-[#B7DFEB] ">
                  <p className=" text-2xl sm:text-[28px] lg:text-[32px] text-white leading-[100%] tracking-[0.6px]  uppercase small-heading ">
                    PHASE 1
                  </p>
                </div>

                <div className="border-2 border-black p-5 xl:p-8 rounded-3xl shadow-[8px_8px_0px_0px_#0C0B0B] bg-[#B7DFEB] ">
                  <ul className="flex flex-col gap-2.5 md:gap-3 xl:gap-4">
                    <li className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] flex items-start gap-2 lg:gap-3 ">
                      <span className="w-2 h-2 mt-2 lg:w-3 lg:h-3 rounded-full bg-black block "></span>
                      5% Dev Team
                    </li>
                    <li className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] flex items-start gap-2 lg:gap-3 ">
                      <span className="w-2 h-2 mt-2 lg:w-3 lg:h-3 rounded-full bg-black block "></span>
                      Website Landing Page
                    </li>
                    <li className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] flex items-start gap-2 lg:gap-3 ">
                      <span className="w-2 h-2 mt-2 lg:w-3 lg:h-3 rounded-full bg-black block "></span>
                      Presale
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/img/png/down-cut-3.png"}
        width={1920}
        height={48}
        alt="cut image"
        className="w-full h-[48px] object-cover "
      />
    </>
  );
}

export default Roadmap;
