import React from "react";
import { SocialIcon } from "react-social-icons";


export default function Index() {
  console.log('hi')
  return (
    <div
    className="container lg:w-2/3 space-y-12 flex-col flex items-center pt-10"
  >
    <img className="w-1/3 max-w-md" src="images/Logo.png" />
    <div>
      <div className="flex flex-row space-x-9 font-medium text-xl">
        <a href="/our-story">
          <span className=" hover:text-blue-800">Our Story</span>
        </a>
        <a href="/our-food">
          <span className=" hover:text-blue-800">Our Food</span>
        </a>
        <a href="/contact">
          <span className=" hover:text-blue-800">Contact Us</span>
        </a>
      </div>
    </div>
    <div className="space-x-5">
      <SocialIcon url="https://www.facebook.com/MrYesandMrNoFacebook" />
      <SocialIcon url="https://www.instagram.com/mryesandmrno" />
      <SocialIcon url="mailto:mryesandmrno@gmail.com" />
    </div>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/aTNCly7Ylo4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/52jaLNehOu4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  );
}
