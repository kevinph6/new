import React from "react";
import { SwapIcon, WalletIcon } from "../helper/Icon";
import Image from "next/image";
import Link from "next/link";

function Exchange() {
  return (
    <>
      <div
        className="w-full bg-primary border-2  border-black  rounded-3xl 
               shadow-[8px_8px_0px_0px_#0C0B0B] p-3 sm:p-5 xl:p-8"
      >
        <div className="flex flex-col gap-5 sm:gap-7 xl:gap-8">
          <div className="gap-1 lg:gap-2">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px]">
                1 SOL
              </p>
              <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px]">
                20,000 $Lisana
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px]">
                Current Raise
              </p>
              <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px]">
                $1.750
              </p>
            </div>
          </div>
          <div className="gap-1 lg:gap-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px]">
                Amount in SOL you pay:
              </p>
              <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px] flex items-center">
                <span className="me-2">
                  <WalletIcon />
                </span>{" "}
                0.00 SOL
              </p>
            </div>
            <div
              className="bg-[#466E7A] rounded-[58px]  border border-black
           shadow-[2.333px_2.333px_0px_0px_#222120] p-1.5 w-full flex items-center justify-between "
            >
              <div className="border border-black bg-[#82AAB6] shadow-[1px_1px_0px_0px_#222120] p-1 items-center flex gap-x-2 rounded-full ">
                <Image
                  src={"/img/svg/sol.svg"}
                  width={32}
                  height={32}
                  alt="sol"
                  className="max-w-[32px] h-auto w-full rounded-full overflow-hidden object-cover"
                />{" "}
                <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px] pe-2">
                  SOL
                </p>
              </div>
              <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px] pe-2">
                0.00
              </p>
            </div>
            <div className="flex items-center my-2">
              <span className="w-full h-[2px] bg-[#2A5179]"></span>
              <button>
                <SwapIcon />
              </button>
              <span className="w-full h-[2px] bg-[#2A5179]"></span>
            </div>
            <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px] pe-2">
              Amount in BART you receive:
            </p>{" "}
            <div
              className="bg-[#466E7A] rounded-[58px]  border border-black
           shadow-[2.333px_2.333px_0px_0px_#222120] p-1.5 w-full flex items-center justify-between  mt-1"
            >
              <div className="border border-black bg-[#82AAB6] shadow-[1px_1px_0px_0px_#222120] p-1 items-center flex gap-x-2 rounded-full  ">
                <Image
                  src={"/img/svg/sponge.svg"}
                  width={32}
                  height={32}
                  alt="sponge"
                  className="max-w-[32px] h-auto w-full rounded-full overflow-hidden object-cover"
                />{" "}
                <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px] pe-2">
                  SPONGE
                </p>
              </div>
              <p className="text-sm sm:text-base text-white text-shadows  tracking-[0.64px] pe-2">
                0.00
              </p>
            </div>
          </div>

          <Link
            href={"/"}
            className=" only-gradient-bg w-full py-3 md:py-4 text-center text-sm sm:text-base md:text-xl text-white text-shadows  tracking-[0.64px] border border-black shadow-[2.333px_2.333px_0px_0px_#222120] rounded-full  hover:shadow-[2.333px_2.333px_10px_0px_#222120] transition-all duration-300 ease-in-out "
          >
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Exchange;
