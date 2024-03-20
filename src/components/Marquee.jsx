// import React from "react";
import { motion } from "framer-motion";

function Marquee({ imgUrls, direction }) {
  return (
    <div className="flex w-full overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imgUrls.map((url, index) => (
          <img className="" src={url} key={index} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imgUrls.map((url, index) => (
          <img className="" src={url} key={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
