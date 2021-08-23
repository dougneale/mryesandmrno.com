import React from "react";
import { SocialIcon } from "react-social-icons";

import homepage from "../lib/homepage";

export default function Index({videoUrls} : any) {
  return (
    <div
    className="container space-y-16 flex-col flex items-center pt-10"
  >
    <img className="max-w-xs" src={homepage.home_image} />
    {videoUrls.map(url => (
        <div className="w-full max-w-xl">
          <div className="youtube-container">
            <iframe src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
    ))}    
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
