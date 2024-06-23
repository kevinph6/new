import Image from "next/image";
import Link from "next/link";
import React from "react";

function HowToBuy() {
  return (
    <>
      <div className="bg-[#abd3df]  py-24 xl:py-36 -mt-7">
        <div
          id="howtobuy"
          className="max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full"
        >
          <h1 className="text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal  leading-[100%] tracking-[1px] uppercase  text-white main-heading-2 text-center ">
            How To Buy
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px]  max-w-[950px] mx-auto text-center mt-6 sm:mt-8">
            Welcome to the Lisana family! Joining the herd is a simple and
            exciting journey. Follow these steps to become a proud owner of
            Lisana Coins:
          </p>

          <div className="flex flex-col md:flex-row mt-12 md:mt-16 lg:mt-20 gap-y-10     md:justify-between gap-x-10  ">
            <div
              className="max-w-[640px] mx-auto md:mx-0 w-full p-4 sm:p-6 xl:p-8 border-2 border-black  rounded-3xl bg-[#A0C8D4] 
            shadow-[8px_8px_0px_0px_#0C0B0B] hover:shadow-[6px_6px_20px_0px_#0C0B0B] transition-all duration-300 ease-in-out  h-full "
            >
              <div className="flex flex-col  text-center h-full justify-between">
                <div>
                  <div className="sm:max-w-[96px] max-w-[60px] mx-auto w-full">
                    <Image
                      src={"/img/svg/cripto-wallet.svg"}
                      width={96}
                      height={96}
                      alt="icon"
                      className="w-full h-auto "
                    />
                  </div>
                  <p className="my-2 md:my-3 text-2xl sm:text-[28px] lg:text-[32px] text-white leading-[100%] tracking-[0.6px]  uppercase small-heading ">
                    Create a Crypto wallet
                  </p>
                  <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] text-center mt-3 md:mt-5 lg:mt-6">
                    Set up a crypto wallet on your smartphone or add crypto
                    wallet extension to your browser.
                  </p>
                </div>
                <div className="mt-7 md:mt-10 xl:mt-12 flex flex-row justify-center">
                  <Link
                    href={""}
                    className="text-lg md:text-xl xl:text-2xl text-white   leading-[160%] tracking-[0.48px] text-center gradient-bg hover:shadow-[2.333px_2.333px_10px_0px_#222120] md:py-4 py-2.5 px-4 md:px-6 "
                  >
                    Create Wallet
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="max-w-[640px] mx-auto md:mx-0 w-full p-4 sm:p-6 xl:p-8 border-2 border-black  rounded-3xl bg-[#A0C8D4] 
            shadow-[8px_8px_0px_0px_#0C0B0B] hover:shadow-[6px_6px_20px_0px_#0C0B0B] transition-all duration-300 ease-in-out "
            >
              <div className="flex flex-col  text-center h-full justify-between">
                <div>
                  <div className="sm:max-w-[96px] max-w-[60px] mx-auto w-full">
                    <Image
                      src={"/img/svg/lisana.svg"}
                      width={96}
                      height={96}
                      alt="icon"
                      className="w-full h-auto "
                    />
                  </div>
                  <p className="my-2 md:my-3 text-2xl sm:text-[28px] lg:text-[32px] text-white leading-[100%] tracking-[0.6px]  uppercase small-heading ">
                    Buy $Lisana{" "}
                  </p>
                  <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] text-center mt-3 md:mt-5 lg:mt-6">
                    Visit the link to exchange (SWAP) SOL for Lisana tokens on
                    Raydium.
                  </p>
                </div>
                <div className="mt-7 md:mt-10 xl:mt-12 flex flex-row justify-center ">
                  <Link
                    href={""}
                    className="text-lg md:text-xl xl:text-2xl text-white   leading-[160%] tracking-[0.48px] text-center gradient-bg hover:shadow-[2.333px_2.333px_10px_0px_#222120] md:py-4 py-2.5 px-4 md:px-6 "
                  >
                    Swap Now
                  </Link>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>{" "}
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

export default HowToBuy;
