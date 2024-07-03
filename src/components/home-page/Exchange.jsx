import React, { useState } from "react";
import { SwapIcon, WalletIcon } from "../helper/Icon";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const exchangeRate = 20000; // 1 SOL = 20000 Lisana
const ownerWallet = "9JyJcgmcGqsrqD2SfV58yovHgCqykSUncKHdtFxhwiGS";

function Exchange() {
  const [solAmount, setSolAmount] = useState(""); // State to store the SOL amount
  const [lisanaAmount, setLisanaAmount] = useState(""); // State to store the Lisana amount
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle SOL amount change
  const handleSolChange = (e) => {
    const value = e.target.value.replace(",", "."); // Replace comma with dot for decimal
    setSolAmount(value);
    setLisanaAmount(value ? (parseFloat(value) * exchangeRate).toFixed(2) : "");
  };

  // Function to handle Lisana amount change
  const handleLisanaChange = (e) => {
    const value = e.target.value.replace(",", "."); // Replace comma with dot for decimal
    setLisanaAmount(value);
    setSolAmount(value ? (parseFloat(value) / exchangeRate).toFixed(2) : "");
  };

  // Function to handle form submission
  const handleBuyNow = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (solAmount === "") {
      toast.error("Small amount to buy is 0.1 SOL");

      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-primary border-2 border-black rounded-3xl shadow-[8px_8px_0px_0px_#0C0B0B] p-3 sm:p-5 xl:p-8">
      {isSubmitted ? (
        <div className="text-white text-center">
          <p>
            In order to continue your purchase of {lisanaAmount} Lisana, send{" "}
            {solAmount} SOL to this wallet: <br />
            <span className="font-bold text-black">{ownerWallet}</span>
          </p>
          <CopyToClipboard
            text={ownerWallet}
            onCopy={() => toast.success("Wallet Address Copied!")}
          >
            <button className="mt-2 only-gradient-bg w-full py-3 md:py-4 text-center text-sm sm:text-base md:text-xl text-white text-shadows tracking-[0.64px] border border-black shadow-[2.333px_2.333px_0px_0px_#222120] rounded-full hover:shadow-[2.333px_2.333px_10px_0px_#222120] transition-all duration-300 ease-in-out">
              Copy Address
            </button>
          </CopyToClipboard>
        </div>
      ) : (
        <div className="flex flex-col gap-5 sm:gap-7 xl:gap-8">
          <div className="gap-1 lg:gap-2">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px]">
                1 SOL
              </p>
              <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px]">
                20,000 $Lisana
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px]">
                Current Raise
              </p>
              <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px]">
                $439,287 USD
              </p>
            </div>
          </div>
          <div className="gap-1 lg:gap-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px]">
                Amount in SOL you pay:
              </p>
              <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] flex items-center">
                <span className="me-2">
                  <WalletIcon />
                </span>
                {solAmount !== "" ? solAmount : "0.00"} SOL
              </p>
            </div>
            <div className="bg-[#466E7A] rounded-[58px] border border-black shadow-[2.333px_2.333px_0px_0px_#222120] p-1.5 w-full flex items-center justify-between">
              <div className="border border-black bg-[#82AAB6] shadow-[1px_1px_0px_0px_#222120] p-1 items-center flex gap-x-2 rounded-full">
                <Image
                  src="/img/svg/sol.svg"
                  width={32}
                  height={32}
                  alt="sol"
                  className="max-w-[32px] h-auto w-full rounded-full overflow-hidden object-cover"
                />
                <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] pe-2">
                  SOL
                </p>
              </div>
              <input
                type="number"
                className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] pe-2 bg-transparent border-0 outline-none text-end placeholder:text-white"
                placeholder="0.00"
                value={solAmount}
                onChange={handleSolChange}
                onFocus={() => setSolAmount("")}
              />
            </div>
            <div className="flex items-center my-2">
              <span className="w-full h-[2px] bg-[#2A5179]"></span>
              <button>
                <SwapIcon />
              </button>
              <span className="w-full h-[2px] bg-[#2A5179]"></span>
            </div>
            <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] pe-2">
              Amount in Lisana you receive:
            </p>
            <div className="bg-[#466E7A] rounded-[58px] border border-black shadow-[2.333px_2.333px_0px_0px_#222120] p-1.5 w-full flex items-center justify-between mt-1">
              <div className="border border-black bg-[#82AAB6] shadow-[1px_1px_0px_0px_#222120] p-1 items-center flex gap-x-2 rounded-full">
                <Image
                  src="/img/png/logo.png"
                  width={32}
                  height={32}
                  alt="Lisana"
                  className="max-w-[32px] h-auto w-full rounded-full overflow-hidden object-cover"
                />
                <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] pe-2">
                  Lisana
                </p>
              </div>
              <input
                type="number"
                className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] pe-2 bg-transparent border-0 outline-none text-end placeholder:text-white"
                placeholder="0.00"
                value={lisanaAmount}
                onChange={handleLisanaChange}
                onFocus={() => setLisanaAmount("")}
              />
            </div>
          </div>
          <button
            onClick={handleBuyNow}
            className="only-gradient-bg w-full py-3 md:py-4 text-center text-sm sm:text-base md:text-xl text-white text-shadows tracking-[0.64px] border border-black shadow-[2.333px_2.333px_0px_0px_#222120] rounded-full hover:shadow-[2.333px_2.333px_10px_0px_#222120] transition-all duration-300 ease-in-out"
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Exchange;
