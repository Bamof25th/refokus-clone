// import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl py-10 mx-auto flex gap-32">
        <div className="basis-1/2 ">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {["instagram", " twitter", "LinkedIn"].map((item, index) => (
              <a className="block mt-3 text-zinc-600 capitalize" key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Sitemaps</h4>
            {["home", "Work", "careers", "contact"].map((item, index) => (
              <a className="block mt-2 text-zinc-200 capitalize" key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3 flex flex-col items-end">
            <p className="text-right">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className="w-24 px-4 py-1 mt-8 bg-blue-600 "
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
