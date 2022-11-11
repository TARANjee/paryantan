import React from "react";

import data from "@public/meta.json";

export const Cards= (props) => {

  return (
    <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {(data?.plugins ?? []).map((plugin) => (
          <div className="flex flex-col justify-center">
            <div
              key={plugin.name}
              className={`col-span-1 flex justify-center text-white rounded-md border border-gray-300 p-5 w-full bg-no-repeat bg-cover ${props.circle ? "rounded-full" : ""}`}
              style={{ backgroundImage: `url('${props.circle ? plugin.img : plugin.tourImage}')`, width: "200px", height: " 200px" }}
            >
              <h2 className="text-xl self-center justify-self-center font-semibold mb-2">{props.circle ? " " : plugin.name}`</h2>

            </div>
            {props.circle ?
              <p className="text-center text-lg font-bold mt-2">{plugin.tourName} </p> :" "
            }
          </div>
        ))}
      </div>

    </div >
  );
};
