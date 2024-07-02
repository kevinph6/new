import { useState } from 'react';
import { InstagramIcon, TeligramIcon, TwitterIcon } from "./Icon";

export const mediaicons = [
  { icon: <TeligramIcon />, link: "https://telegram.org/" },
  { icon: <TwitterIcon />, link: "https://x.com" },
  { icon: <InstagramIcon />, link: "https://www.instagram.com" },
];

const BuyLisana = () => {
  const [copied, setCopied] = useState(false);
  const walletAddress = '9JyJcgmcGqsrqD2SfV58yovHgCqykSUncKHdtFxhwiGS';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied status after 2 seconds
    });
  };

  return (
    <div>
      <p>
        To buy $Lisana, you need to send SOL to the following address:
      </p>
      <div onClick={copyToClipboard} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
        {walletAddress}
      </div>
      {copied && <span style={{ color: 'green' }}>Copied!</span>}
      <p>
        After the presale ends, you will receive your tokens.
      </p>
    </div>
  );
};

export const faqs = [
  {
    question: "Why Lisana?",
    answer:
      "Innovative Fusion: Lisana combines digital art and gaming like never before, offering a unique and engaging experience.\n" +
      "Secure Ownership: Using Solana blockchain technology, we ensure your digital assets are secure and truly yours.\n" +
      "Fair Rewards: Our platform guarantees fair compensation and rewards for both artists and gamers through transparent transactions.\n" +
      "Vibrant Community: Join a thriving community of creators and players, and participate in exclusive events and tournaments.\n" +
      "Cutting-Edge Technology: Leveraging the speed and efficiency of the Solana blockchain, Lisana provides a seamless and enjoyable user experience.",
  },
  {
    question: "What is the contract address?",
    answer:
      "The real question is: why not? $lisana is riding the waves of meme coins on the rising BASE Solana. Moon is programmed.",
  },
  {
    question: "Where can we buy?",
    answer: <BuyLisana />,
  },
  {
    question: "How can I contact the team?",
    answer:
      "The real question is: why not? $lisana is riding the waves of meme coins on the rising BASE Solana. Moon is programmed.",
  },
];
