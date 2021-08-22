import Head from "next/head";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Copyright from "./Copyright";
import Navigation from "./Navigation";
import { SocialList } from "./SocialList";

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
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer className="container py-7 flex flex-col space-y-3 justify-center items-center">
        <div className="space-x-5">
          <SocialIcon url="https://www.facebook.com/MrYesandMrNoFacebook" />
          <SocialIcon url="https://www.instagram.com/mryesandmrno" />
          <SocialIcon url="mailto:mryesandmrno@gmail.com" />
        </div>
        <Copyright />
        </footer>
    </div>
  );
}
