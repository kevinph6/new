"use client";
import Image from "next/image";
import { useState } from "react";

function AnotherWayJoin() {
  const [copied, setCopied] = useState(false);
  const textToCopy = " 0x0bf9cc2ea2af3d2230d25389101bf3a12b8ea544";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <>
      <div className="bg-[#93BBC7]  py-24 xl:py-36 -mt-7">
        <div className="max-w-[1017px] px-4 sm:px-6 lg:px-8 2xl:px-10 mx-auto w-full">
          <h1 className="text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-normal  leading-[100%] tracking-[1px] uppercase  text-white main-heading-2 text-center   ">
            Another Way to <br className="hidden sm:block" /> Join the Presale
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] mt-5 lg:mt-6 text-center lg:px-16 xl:px-0 ">
            Having trouble with the DApp or want a simpler method? Participate
            in the $LISANA presale by sending your chosen SOL amount directly to
          </p>
          <div className="flex flex-col gap-6 lg:gap-8 mt-12 md:mt-16 xl:mt-20">
            <div>
              <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] text-center ">
                $LISANA
              </p>{" "}
              <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] text-center mt-2 ">
                (Minimum 0.5 SOL, Maximum Unlimited).
              </p>
            </div>
            <div className="max-w-[390px] w-full sm:max-w-[600px] md:max-w-[705px] mx-auto border-2 border-black rounded-3xl bg-[#B7DFEB] shadow-[8px_8px_0px_0px_#0C0B0B] py-6 lg:py-8 px-5 lg:px-6 flex flex-col sm:flex-row gap-5 lg:gap-10">
              <div className="max-w-[164px] min-w-[164px] bg-white rounded-lg p-1 w-full mx-auto sm:mx-0 ">
                <Image
                  src={"/img/png/qrcode.png"}
                  width={164}
                  height={164}
                  alt="qr code "
                  className="w-full h-auto"
                />
              </div>
              <div className="  flex flex-col justify-between text-center sm:text-start">
                <p className="text-lg md:text-xl xl:text-2xl text-white text-shadows2 leading-[160%] tracking-[0.48px] mt-2 ">
                  Address
                </p>
                <div>
                  <p className="text-sm md:text-base xl:text-lg text-white text-shadows leading-[160%]     mt-3 text-ellipsis overflow-hidden  truncate	 ">
                    9JyJcgmcGqsrqD2SfV58yovHgCqykSUncKHdtFxhwiGS
                  </p>
                  <button
                    className="gradient-bg text-white text-base md:text-lg lg:text-xl px-5 md:px-6 py-3 md:py-4 mt-2"
                    onClick={handleCopy}
                  >
                    {copied ? "Copied!" : "Copy Address"}
                  </button>
                </div>
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

export default AnotherWayJoin;
