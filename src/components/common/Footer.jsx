import Image from "next/image";
import Link from "next/link";
import React from "react";
import { mediaicons } from "../helper/Helper";

function Footer() {
  return (
    <>
      <footer className="bg-[#abd3df] pb-7 md:pb-10 lg:pb-12  pt-24 xl:pt-36 -mt-7">
        <div className="max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full">
          <div className="flex flex-wrap md:flex-nowrap flex-row justify-between  gap-7 ">
            <div className="max-w-[666px] w-full">
              <Link href={"/"} className="flex items-center gap-2 lg:gap-3">
                <Image
                  className="max-w-[55px] h-auto w-full"
                  src="/img/png/logo.png"
                  width="55"
                  height="55"
                  alt="page-logo"
                />{" "}
                <span className="text-2xl sm:text-[28px] lg:text-[38px] text-white leading-[100%] tracking-[0.76px]  uppercase small-heading">
                  Lisana
                </span>
              </Link>
              <p className="text-sm md:text-base xl:text-lg text-white text-shadows leading-[160%] mt-3">
                Welcome to Lisana! Dive into a playful universe where
                cryptocurrency meets the charm of our furry companions.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4">
              <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px]  ">
                Company
              </p>
              <ul className="list-none p-0 flex flex-col gap-1">
                <li>
                  <Link
                    href={"#about"}
                    className="text-sm sm:text-base text-shadows text-white uppercase transition-all duration-300 ease-in-out nav-links"
                  >
                    About
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href={"#howtobuy"}
                    className="text-sm sm:text-base text-shadows text-white uppercase transition-all duration-300 ease-in-out nav-links"
                  >
                    HOW TO BUY
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href={"#tokenomics"}
                    className="text-sm sm:text-base text-shadows text-white uppercase transition-all duration-300 ease-in-out nav-links"
                  >
                    TOKENOMICS
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href={"#roadmap"}
                    className="text-sm sm:text-base text-shadows text-white uppercase transition-all duration-300 ease-in-out nav-links"
                  >
                    ROADMAP
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href={"#faq"}
                    className="text-sm sm:text-base text-shadows text-white uppercase transition-all duration-300 ease-in-out nav-links"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>{" "}
            <div className="flex flex-col gap-3 lg:gap-4">
              <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px]  ">
                Follow us
              </p>
              <div className="flex items-center gap-x-3 md:gap-x-4 xl:gap-x-[18px]  ">
                {mediaicons.map((item, index) => (
                  <Link
                    key={index}
                    target="_blank"
                    href={item.link}
                    className="  w-12 h-12 rounded-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out only-gradient-bg border border-black
                     shadow-[2.333px_2.333px_0px_0px_#222120;] 
                    hover:shadow-[3.935px_3.935px_10px_0px_#222120] hover:-translate-y-1 "
                  >
                    <span className="scale-75">{item.icon}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="my-6 md:my-8 w-full h-[1px] bg-[#4E545D]"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm sm:text-base text-shadows text-white ">
              © 2024 Lisana. All rights reserved.
            </p>
            <div className="flex items-center gap-3 flex-row">
              <Link
                href={"/"}
                className="text-sm sm:text-base text-shadows text-white "
              >
                Terms of use
              </Link>
              <span className="w-2 h-2 rounded-full bg-[#2C98B8] block"></span>{" "}
              <Link
                href={"/"}
                className="text-sm sm:text-base text-shadows text-white "
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
