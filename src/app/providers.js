"use client";

import {
  PhantomWalletAdapter,
  TrustWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import "@solana/wallet-adapter-react-ui/styles.css";

const rpcUrl =
  "https://mainnet.helius-rpc.com/?api-key=a6960cc7-9546-44ef-b51c-83c7026d34e3";
const wallets = [new PhantomWalletAdapter(), new TrustWalletAdapter()];

export default function Providers({ children }) {
  return (
    <ConnectionProvider endpoint={rpcUrl}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
