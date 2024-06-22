import React from "react";
import Gallery from "../common/Gallery";
import Image from "next/image";

function CoinHub() {
  return (
    <>
      <div className="bg-[#93BBC7]  py-24 xl:py-36 -mt-7">
        <div
          id="tokenomics"
          className="max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full"
        >
          <h1 className="text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal  leading-[100%] tracking-[1px] uppercase  text-white main-heading-2 text-center ">
            Lisana coin Hub
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px]  max-w-[730px] mx-auto text-center mt-6 sm:mt-8 lg:mt-10">
            Hey there, fellow Lisana lovers! Welcome to the cozy corner of the
            internet, the Lisana MEME hub!
          </p>
          <div className="mt-20">
            <Gallery />
          </div>
        </div>
      </div>
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

export default CoinHub;
