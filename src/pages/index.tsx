import React from "react";

import homepage from "../lib/homepage";

export default function Index({ videoUrls }: any) {
  return (
    // <div className="container space-y-16 flex-col flex items-center pt-10">
    <div className="flex flex-col">
      <div className="bg-cover border-black border-4 bg-no-repeat bg-truck h-96 lg:h-home bg-center from-white to-transparent">
        {/* <div className=" w-full h-full bg-gradient-to-b via-transparent from-white to-transparent"></div> */}
      </div>
      <div className="relative -top-8 h-14 flex items-center justify-center z-10">
        <img
          className="bg-white h-36 rounded-full border-black border-4 "
          src={homepage.home_image}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const videoUrls = homepage.youtube_video_urls;
  return {
    props: {
      videoUrls,
    },
  };
}
