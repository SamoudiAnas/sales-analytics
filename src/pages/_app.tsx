import "@/styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/common/Toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
