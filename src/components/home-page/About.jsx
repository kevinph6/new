import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <div className="bg-[#93BBC7]  py-24 xl:py-36 -mt-7">
        <div
          id="about"
          className="max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full"
        >
          <h1 className="text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal  leading-[100%] tracking-[1px] uppercase  text-white main-heading-2 text-center ">
            About Us
          </h1>
          <div className="flex lg:flex-row flex-col gap-10   justify-between items-center pt-10">
            <div className=" max-w-[529px] w-full">
              <div className="flex flex-row">
                <div className="relative z-[1] transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden hover:z-10">
                  <Image
                    src={"/img/png/about-1.png"}
                    width={306}
                    height={316}
                    className="w-full h-auto object-cover "
                    alt="about img"
                  />
                </div>
                <div className=" -ml-6 sm:-ml-20 relative z-[2] mt-4 sm:mt-10 transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden hover:z-10">
                  <Image
                    src={"/img/png/about-2.png"}
                    width={305}
                    height={235}
                    className="w-full h-auto object-cover "
                    alt="about img"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-row -mt-14 sm:-mt-20">
                <div className="relative z-[3] sm:-mt-3 sm:ml-3   transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden hover:z-10">
                  <Image
                    src={"/img/png/about-3.png"}
                    width={308}
                    height={239}
                    className="w-full h-auto object-cover "
                    alt="about img"
                  />
                </div>
                <div className=" -ml-8 sm:-ml-14    relative z-[1] -mt-6 transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden hover:z-10  ">
                  <Image
                    src={"/img/png/about-4.png"}
                    width={307}
                    height={316}
                    className="w-full h-auto object-cover  "
                    alt="about img"
                  />
                </div>
              </div>
            </div>
            <div
              className="max-w-[662px] w-full p-4 sm:p-6 border-2 border-black  rounded-3xl bg-[#A0C8D4] 
            shadow-[8px_8px_0px_0px_#0C0B0B] "
            >
              <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px]  ">
                Lisana is a revolutionary platform that merges the worlds of digital art and gaming using the power of the Solana blockchain. 
                We offer a unique experience where players can own, trade, and earn from their in-game assets and digital art collections. 
                Our platform features engaging, board game-inspired digital games, complete with NFT integration for secure ownership and transparent transactions. 
                Join us in reshaping the digital landscape, where creativity meets interactive entertainment. 🚀
                
              </p>
            </div>
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

export default About;
