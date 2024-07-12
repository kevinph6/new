"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HamburgerIcon } from "../helper/Icon";
import MobileHeader from "./MobileHeader";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    if (isOpen) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
      html.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
      html.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative bg-[rgba(179,219,231,0.20)] px-4 sm:px-6 lg:px-8 2xl:px-10   py-5 md:py-6 z-10 backdrop-blur-md  ">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              className="max-w-[55px] h-auto w-full"
              src="/img/png/logo.png"
              width="55"
              height="55"
              alt="page-logo"
            />
          </Link>
          <div className=" items-center gap-x-4 lg:gap-x-6 xl:gap-x-8 hidden lg:flex">
            <Link
              href="#about"
              className="text-white text-center text-base leading-[160%] tracking-[0.64px]  uppercase text-shadows active nav-links"
            >
              About
            </Link>{" "}
            <Link
              href="#howtobuy"
              className="text-white text-center text-base   tracking-[0.64px]  uppercase text-shadows nav-links"
            >
              HOW TO BUY
            </Link>{" "}
            {/* <Link
              href="#tokenomics"
              className="text-white text-center text-base   tracking-[0.64px]  uppercase text-shadows nav-links"
            >
              TOKENOMICS
            </Link>{" "} */}
            <Link
              href="#roadmap"
              className="text-white text-center text-base   tracking-[0.64px]  uppercase text-shadows nav-links"
            >
              ROADMAP
            </Link>{" "}
            <Link
              href="#faq"
              className="text-white text-center text-base   tracking-[0.64px]  uppercase text-shadows nav-links"
            >
              FAQ
            </Link>
            <Link
              target="_blank"
              href="/whitepaper.pdf"
              download
              className="text-white text-center text-base   tracking-[0.64px]  uppercase text-shadows nav-links"
            >
              Whitepaper
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            {/* <WalletMultiButton /> */}
            <Link
              href="#buy"
              className="only-gradient-bg py-3 px-4 sm:px-8 md:py-4 text-sm sm:text-base md:text-xl text-white text-shadows tracking-[0.64px] border border-black shadow-[2.333px_2.333px_0px_0px_#222120] rounded-full hover:shadow-[2.333px_2.333px_10px_0px_#222120] transition-all duration-300 ease-in-out"
            >
              Buy Now
            </Link>

            <button className="lg:hidden" onClick={toggleOpen}>
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#abd3df] lg:bg-transparent transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <MobileHeader toggleOpen={toggleOpen} />
      </div>
    </>
  );
};

export default Header;
