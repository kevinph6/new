"use client";

import React from "react";
import { BallIcon } from "../helper/Icon";
import Link from "next/link";
import { mediaicons } from "../helper/Helper";
import CountdownTimer from "./CountdownTimer";
import Exchange from "./Exchange";
import Image from "next/image";

function Hero() {
  const targetDate = new Date("2024-08-30T23:59:59");

  return (
    <>
      <div className="min-h-[100vh] flex flex-col  justify-center w-full  ">
        <div className="max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full">
          <div className="flex md:flex-row flex-col items-center py-12 sm:py-16 justify-between gap-14 md:gap-5 xl:gap-10">
            <div className="md:max-w-[630px]">
              <div className="">
                <div
                  className="flex items-center gap-3 bg-[url(/img/png/audit-bg.png)] bg-no-repeat
                 bg-[100%,100%] max-w-[220px]  lg:max-w-[230px]  py-2.5 px-2.5 lg:px-3 w-full mb-4"
                >
                  <span className="w-3 h-3 rounded-full bg-[#2411F5] block"></span>
                  <p className="text-white text-base lg:text-lg   tracking-[0.37px]">
                    Audit KYC Verified
                  </p>
                </div>
                <h1 className="text-[50px] md:text-[60px] lg:text-[70px] xl:text-[95px] font-normal  leading-[100%] tracking-[1px] uppercase  text-white main-heading text-clean font-milky      inline    ">
                  Welcome to
                  <span className=" flex flex-wrap lg:flex-nowrap">
                    <span className="-ml-2 lg:-ml-4 ">
                      <Image
                        src={"/img/png/mona-1.png"}
                        width={347}
                        height={115}
                        alt="mona"
                        className=" max-w-[150px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[220px] xl:max-w-[340px] h-auto pt-1 sm:pt-0"
                      />
                    </span>
                    Lisana
                  </span>
                </h1>
                <p className="text-white text-lg sm:text-xl    xl:text-[30px]  text-shadows2 tracking-[0.58px] leading-[140%]  mt-6 lg:mt-8  ">
                  The Mona Lisa's story never ended, forever blended into the
                  world of crypto and gaming.
                </p>
                <div className="flex items-center gap-x-4 md:gap-x-6 xl:gap-x-8 mt-6 xl:mt-12">
                  {mediaicons.map((item, index) => (
                    <Link
                      key={index}
                      target="_blank"
                      href={item.link}
                      className="xl:w-20 xl:h-20 sm:w-16 sm:h-16 w-12 h-12 rounded-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out only-gradient-bg border-[1.5px] border-black shadow-[3.935px_3.935px_0px_0px_#222120] 
                    hover:shadow-[3.935px_3.935px_10px_0px_#222120] hover:-translate-y-1 "
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-w-[475px]  w-full flex flex-col gap-y-6">
              <div
                className="w-full bg-primary border-2  border-black  rounded-3xl 
               shadow-[8px_8px_0px_0px_#0C0B0B] p-3 sm:p-5 xl:p-8"
              >
                <h2 className="text-center text-white heading-shadow text-base sm:text-lg lg:text-[22px] font-thin uppercase ">
                  Buy the lisana now
                </h2>
                <CountdownTimer targetDate={targetDate} />
              </div>
              <Exchange />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/img/png/cut-img-2.png"}
        width={1920}
        height={48}
        alt="cut image"
        className="w-full h-[48px] object-cover"
      />
    </>
  );
}

export default Hero;
