import React, { useState } from "react";
import { SwapIcon, WalletIcon } from "../helper/Icon";
import Image from "next/image";
import Link from "next/link";
import { Connection, PublicKey, clusterApiUrl, Transaction, SystemProgram } from "@solana/web3.js";
import { useWallet, WalletProvider, ConnectionProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

require('@solana/wallet-adapter-react-ui/styles.css');

const EXCHANGE_RATE = 20000; // 1 SOL = 20000 Lisana
const RECIPIENT_WALLET = new PublicKey('9JyJcgmcGqsrqD2SfV58yovHgCqykSUncKHdtFxhwiGS');

function Exchange() {
  const [solAmount, setSolAmount] = useState(''); // State to store the SOL amount
  const [lisanaAmount, setLisanaAmount] = useState(''); // State to store the Lisana amount
  const [isSolToLisana, setIsSolToLisana] = useState(true); // State to manage conversion direction
  const { wallet, publicKey, sendTransaction } = useWallet();

  // Function to handle SOL amount change
  const handleSolChange = (e) => {
    const value = e.target.value.replace(',', '.'); // Replace comma with dot for decimal
    setSolAmount(value);
    if (isSolToLisana && !isNaN(value) && value !== '') {
      setLisanaAmount((parseFloat(value) * EXCHANGE_RATE).toString());
    }
  };

  // Function to handle Lisana amount change
  const handleLisanaChange = (e) => {
    const value = e.target.value.replace(',', '.'); // Replace comma with dot for decimal
    setLisanaAmount(value);
    if (!isSolToLisana && !isNaN(value) && value !== '') {
      setSolAmount((parseFloat(value) / EXCHANGE_RATE).toString());
    }
  };

  // Function to handle swap
  const handleSwap = () => {
    setIsSolToLisana(!isSolToLisana);
    if (isSolToLisana) {
      setSolAmount((parseFloat(lisanaAmount) / EXCHANGE_RATE).toString());
    } else {
      setLisanaAmount((parseFloat(solAmount) * EXCHANGE_RATE).toString());
    }
  };

  // Function to handle transaction
  const handleTransaction = async () => {
    if (!publicKey) {
      alert('Please connect your wallet');
      return;
    }

    const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: RECIPIENT_WALLET,
        lamports: parseFloat(solAmount) * 1e9, // Convert SOL to lamports
      })
    );

    try {
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'confirmed');
      alert('Transaction successful');
    } catch (error) {
      console.error('Transaction failed', error);
      alert('Transaction failed');
    }
  };

  return (
    <>
      <div
        className="w-full bg-primary border-2 border-black rounded-3xl 
               shadow-[8px_8px_0px_0px_#0C0B0B] p-3 sm:p-5 xl:p-8"
      >
        <div className="flex flex-col gap-5 sm:gap-7 xl:gap-8">
          <WalletMultiButton />
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
                {isSolToLisana ? 'Amount in SOL you pay:' : 'Amount in Lisana you receive:'}
              </p>
              <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] flex items-center">
                <span className="me-2">
                  <WalletIcon />
                </span>{" "}
                {isSolToLisana ? (solAmount !== '' ? solAmount : '0.00') : (lisanaAmount !== '' ? lisanaAmount : '0.00')} {isSolToLisana ? 'SOL' : '$Lisana'}
              </p>
            </div>
            <div
              className="bg-[#466E7A] rounded-[58px] border border-black
           shadow-[2.333px_2.333px_0px_0px_#222120] p-1.5 w-full flex items-center justify-between"
            >
              <div className="border border-black bg-[#82AAB6] shadow-[1px_1px_0px_0px_#222120] p-1 items-center flex gap-x-2 rounded-full">
                <Image
                  src={isSolToLisana ? "/img/svg/sol.svg" : "/img/png/logo.png"}
                  width={32}
                  height={32}
                  alt={isSolToLisana ? "sol" : "lisana"}
                  className="max-w-[32px] h-auto w-full rounded-full overflow-hidden object-cover"
                />{" "}
                <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] pe-2">
                  {isSolToLisana ? 'SOL' : 'Lisana'}
                </p>
              </div>
              <input
                type="text"
                className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] pe-2 bg-transparent border-0 outline-none text-end placeholder:text-white"
                placeholder="0.00"
                value={isSolToLisana ? solAmount : lisanaAmount}
                onChange={isSolToLisana ? handleSolChange : handleLisanaChange}
                onFocus={() => isSolToLisana ? setSolAmount('') : setLisanaAmount('')}
              />
            </div>
            <div className="flex items-center my-2">
              <span className="w-full h-[2px] bg-[#2A5179]"></span>
              <button onClick={handleSwap}>
                <SwapIcon />
              </button>
              <span className="w-full h-[2px] bg-[#2A5179]"></span>
            </div>
            <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] pe-2">
              {isSolToLisana ? 'Amount in Lisana you receive:' : 'Amount in SOL you pay:'}
            </p>{" "}
            <div
              className="bg-[#466E7A] rounded-[58px] border border-black
           shadow-[2.333px_2.333px_0px_0px_#222120] p-1.5 w-full flex items-center justify-between mt-1"
            >
              <div className="border border-black bg-[#82AAB6] shadow-[1px_1px_0px_0px_#222120] p-1 items-center flex gap-x-2 rounded-full">
                <Image
                  src={!isSolToLisana ? "/img/svg/sol.svg" : "/img/png/logo.png"}
                  width={32}
                  height={32}
                  alt={!isSolToLisana ? "sol" : "lisana"}
                  className="max-w-[32px] h-auto w-full rounded-full overflow-hidden object-cover"
                />{" "}
                <p className="text-sm sm:text-base text-white text-shadows tracking-[0.64px] pe-2
