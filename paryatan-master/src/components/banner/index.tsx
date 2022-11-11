import React from "react";

import data from "@public/meta.json";
import Image from "next/image";
import { Main } from "..";

export const Banner: React.FC = () => {

  return (
    <div className="flex-1  ">
      <Main height={200} title="A Ride in the Ganges!" btnTitle="Rafting in Rishikesh" image={Image}  />
    </div>
  )
}