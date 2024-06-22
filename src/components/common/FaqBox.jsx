import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "../helper/Icon";

function FaqBox({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-b border-black bg-[#B7DFEB] p-4 md:p-6 mb-6 rounded-2xl shadow-[4px_4px_0px_0px_#000] transition-all duration-300 ease-in-out hover:shadow-[4px_4px_16px_0px_#000]">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px]">
            {question}
          </p>
          <span className="text-gray-900">
            {isOpen ? <MinusIcon /> : <PlusIcon />}
          </span>
        </div>
        {isOpen && (
          <p className="mt-4 md:mt-7 text-black text-sm md:text-base leading-[160%] tracking-[0.3px] ">
            {answer}
          </p>
        )}
      </div>
    </>
  );
}

export default FaqBox;
