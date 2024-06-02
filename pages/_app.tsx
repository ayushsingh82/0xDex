"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { useEffect, useState } from "react";

// import { AnkrProvider } from '@ankr.com/ankr.js';
// const provider = new AnkrProvider('https://rpc.ankr.com/multichain/7d47913bb91e53342197adaf63ee31b0dbc7c5dab2ecbb3588e48dbd36f3d47f');

// const getUniprices = async () => {
//   try {
//     const result = await provider.getTokenPriceHistory({
//       blockchain: "eth",
//       contractAddress: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
//       //uni token
//       fromTimestamp: 1667195581,
//       interval: 86400, // 24h
//       limit: 337
//     });
//     console.log(result);
//   } catch (error) {
//     console.log('Error fetching price history');
//     throw error;
//   }
// };

// getUniprices();

// const getWethprise = async () => {
//   try {
//     const result = await provider.getTokenPriceHistory({
//       blockchain: "eth",
//       contractAddress: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
//       //uni token
//       fromTimestamp: 1667195581,
//       interval: 86400, // 24h
//       limit: 337
//     });
//     console.log(result);
//   } catch (error) {
//     console.log('Error fetching price history');
//     throw error;
//   }
// };

// getWethprise();

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "MzUaa0A87yexjd8UKcHm8HIr1f4aghxT",
    walletConnectProjectId: "a8024e8262cb4e7102941a3577b5a5c0",

    // Required
    appName: "0x Next.js Demo App",

    // Optional
    appDescription: "A Next.js demo app for 0x Swap API and ConnectKit",
  })
);

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);

  return (
    <div style={{ padding: "20px" }}>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <ConnectKitButton />
          {mounted && <Component {...pageProps} />}
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}
