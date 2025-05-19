"use client";

import { type ReactNode } from "react";
import { celo } from "wagmi/chains";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";




export function Providers(props: { children: ReactNode }) {
  return (
    <MiniKitProvider
      
      projectId={process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}
      chain={celo}
      config={{
        appearance: {
          mode: "auto",
          theme: "mini-app-theme",
          name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
          logo: process.env.NEXT_PUBLIC_ICON_URL,
        },
      }}
    >
      {props.children}
    </MiniKitProvider>
  );
}
