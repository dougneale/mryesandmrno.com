import React from "react";
import { SocialIcon } from "react-social-icons";

import homepage from "../lib/homepage";

export default function Index({videoUrls} : any) {
  console.log('hi')
  return (
    <div
    className="container lg:w-2/3 space-y-12 flex-col flex items-center pt-10"
  >
    <img className="w-1/2 sm:w-1/3 max-w-md" src={homepage.home_image} />
    <div className="space-x-5">
      <SocialIcon url="https://www.facebook.com/MrYesandMrNoFacebook" />
      <SocialIcon url="https://www.instagram.com/mryesandmrno" />
      <SocialIcon url="mailto:mryesandmrno@gmail.com" />
    </div>
    {videoUrls.map(url => (
      <iframe width="560" height="315" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
    )}    
  </div>
  );
}

export async function getStaticProps() {
  const videoUrls = homepage.youtube_video_urls
  return {
    props: {
      videoUrls,
    },
  }
}
