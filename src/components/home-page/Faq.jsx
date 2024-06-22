"use client";
import React from "react";
import { faqs } from "../helper/Helper";
import FaqBox from "../common/FaqBox";
import Image from "next/image";

function Faq() {
  return (
    <>
      <div className="bg-[#abd3df]  py-24 xl:py-36 -mt-7">
        <div
          id="faq"
          className="max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full"
        >
          <h1 className="text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal  leading-[100%] tracking-[1px] uppercase  text-white main-heading-2 text-center ">
            FAQS
          </h1>
          <div className="mt-12 md:mt-16 lg:mt-20 max-w-[924px] mx-auto">
            {faqs.map((faq, index) => (
              <FaqBox key={index} question={faq.question} answer={faq.answer} />
            ))}
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

export default Faq;
