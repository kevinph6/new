"use client";
import Link from "next/link";
import React from "react";
import { CrossIcon } from "../helper/Icon";

const MobileHeader = ({ toggleOpen }) => {
  return (
    <>
      <div className="h-screen w-screen lg:hidden flex items-center justify-center flex-col relative">
        <button className="absolute top-10 right-4" onClick={toggleOpen}>
          {" "}
          <CrossIcon />
        </button>

        <div className=" flex flex-col items-center gap-8  ">
          <Link
            onClick={toggleOpen}
            href="/#about"
            className="text-white text-center text-base leading-[160%] tracking-[0.64px]  uppercase text-shadows active nav-links"
          >
            About
          </Link>{" "}
          <Link
            onClick={toggleOpen}
            href="/#howtobuy"
            className="text-white text-center text-base   tracking-[0.64px]  uppercase text-shadows nav-links"
          >
            HOW TO BUY
          </Link>{" "}
          <Link
            onClick={toggleOpen}
            href="/#roadmap"
            className="text-white text-center text-base   tracking-[0.64px]  uppercase text-shadows nav-links"
          >
            ROADMAP
          </Link>{" "}
          <Link
            target="_blank"
            href="/pdf/whitepaper_lisana.pdf"
            download
            onClick={toggleOpen}
            className="text-white text-center text-base   tracking-[0.64px]  uppercase text-shadows nav-links"
          >
            Whitepaper
          </Link>{" "}
          <Link
            onClick={toggleOpen}
            href="/#faq"
            className="text-white text-center text-base   tracking-[0.64px]  uppercase text-shadows nav-links"
          >
            FAQ
          </Link>
        </div>
        <div className="flex gap-6 4xl:gap-7 pt-7"></div>
      </div>
    </>
  );
};

export default MobileHeader;
