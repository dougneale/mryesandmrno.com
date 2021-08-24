import Head from "next/head";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Copyright from "./Copyright";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
        <meta name="google-site-verification" content="hubFm75NNgR-gWDW2ov-ajMyInxd0Ueike0zduYFLGQ" />
        <title>Mr Yes and Mr No - Next Generation Food</title>
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer className="container pt-10 pb-7 flex flex-col space-y-6 justify-center items-center">
        <div className="space-x-5">
          <SocialIcon url="https://www.facebook.com/MrYesandMrNo" />
          <SocialIcon url="https://www.instagram.com/mryesandmrno" />
          <SocialIcon url="mailto:mryesandmrno@gmail.com" />
        </div>
        <Copyright />
        </footer>
    </div>
  );
}
