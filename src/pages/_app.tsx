import "@/styles/globals.css";

import React from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import SidebarLayout from "@/layouts/SidebarLayout";

import { isPrivateRoute } from "@/utils/getLayout";
import { Toaster } from "@/components/common/Toast";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      {isPrivateRoute(pathname) ? (
        <SidebarLayout>
          <Component {...pageProps} />
          <Toaster />
        </SidebarLayout>
      ) : (
        <>
          <Component {...pageProps} />
          <Toaster />
        </>
      )}
    </>
  );
}
