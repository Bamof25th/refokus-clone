// import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover }) {
  return (
    <div
      className={` bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full flex justify-between items-center">
        <h3 className=""> ON Heading</h3>
        <IoIosArrowRoundForward />
      </div>
      <h1 className="text-3xl font-medium  mt-5">Wehatever heading.</h1>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-5 border-2 border-zinc-50 mt-5">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium mt-5">lorem7</p>
        )}
      </div>
    </div>
  );
}

export default Card;
