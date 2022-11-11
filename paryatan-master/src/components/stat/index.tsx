import React from "react";

import data from "@public/meta.json";

import { Cards } from "..";

export const Stat: React.FC = () => {

  return (
    <div className="flex-1 w-screen ">
      <Cards circle={true} text={false}  />
    </div>
  )
}