import React from "react";

import data from "@public/meta.json";
import Image from "next/image";
import { Cards } from "..";
export const Travel: React.FC = () => {
  return (
    <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5">
      <div className="flex-1 justify-center items-center ">
        <h1 className="text-5xl font-bold mt-0 mb-6 text-center">What do you want to do today?</h1>
        <h3 className="  mb-8">Uttarakhand offers limitless opportunities for tourism and adventure. There is something for everyone - Pilgrimage, Temples, Wildlife tours, Bird Watching, Rafting, Mountaineering, Skiiing, Trekking, Camping, Yoga and Meditation and much more. Check out Uttarakhand Travel Blog for interesting articles about Uttarakhand.</h3>
      </div>
      <Cards />
    </div>
  )
}