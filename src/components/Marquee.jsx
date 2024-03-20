import React from "react";

function Marquee({ imgUrls }) {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imgUrls.map((url, index) => (
        <img className="w-[6vw] flex-shrink-0" src={url} key={index} />
      ))}
      {imgUrls.map((url, index) => (
        <img className="w-[6vw] flex-shrink-0" src={url} key={index} />
      ))}
    </div>
  );
}

export default Marquee;
