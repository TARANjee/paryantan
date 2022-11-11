import React from "react";


export const Main = (props) => {
  console.log("Hello", props)
  return (
    <div className=" bg-no-repeat bg-cover " style={{ backgroundImage: `url('${props.height?'/images/rishikesh.jpg':'/images/hill-station.jpg'}')`, height: `${props.height ? `${props.height}px` : '360px'}` }}>
      <h1 className="text-5xl pt-16 font-extrabold text-white text-center">{props.title}</h1>
      {props.height !== 360 ? (
        <div className="mt-5 flex justify-center items-center ">
          <button type="button" className="px-4 py-2 rounded-2xl text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            {props.btnTitle}
          </button>
        </div>
        ):(<p></p>)
      }
    </div>
  );
};
