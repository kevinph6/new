import Image from "next/image";
import React from "react";

function Tokenomics() {
  return (
    <>
      <div className="bg-[#93BBC7]  py-24 xl:py-36 -mt-7">
        <div
          id="tokenomics"
          className="max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full"
        >
          <h1 className="text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal  leading-[100%] tracking-[1px] uppercase  text-white main-heading-2 text-center ">
            Tokenomics
          </h1>
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 lg:gap-10 items-center md:mt-24 mt-16">
            <div className="max-w-[624px] w-full">
              <Image
                src={"/img/png/chart.png"}
                width={624}
                height={624}
                alt="chart"
                className="w-full h-auto"
              />
            </div>
            <div className="max-w-[416px] w-full flex flex-col gap-6 lg:gap-9 xl:gap-12">
              <div className="flex flex-col gap-2.5 lg:gap-3.5 xl:gap-[18px]">
                <div className="w-full rounded-full bg-[#A0C8D4] h-4 sm:h-[21px]">
                  <span className="w-[20%] bg-[#21DA1D] rounded-full h-4 sm:h-[21px] block "></span>
                </div>
                <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px]">
                  5% CEX Listings
                </p>
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-3.5 xl:gap-[18px]">
                <div className="w-full rounded-full bg-[#A0C8D4] h-4 sm:h-[21px]">
                  <span className="w-[20%] bg-[#FD5066] rounded-full h-4 sm:h-[21px] block "></span>
                </div>
                <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px]">
                  5% Dev Team
                </p>
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-3.5 xl:gap-[18px]">
                <div className="w-full rounded-full bg-[#A0C8D4] h-4 sm:h-[21px]">
                  <span className="w-[80%] bg-[#16BAEE] rounded-full h-4 sm:h-[21px] block "></span>
                </div>
                <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px]">
                  90% Liquidity Pool
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Image
        src={"/img/png/down-cut-2.png"}
        width={1920}
        height={48}
        alt="cut image"
        className="w-full h-[48px] object-cover "
      />
    </>
  );
}

export default Tokenomics;
