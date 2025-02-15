"use client";
import { cn } from "../../lib/utils"
import { motion } from "framer-motion";
import React from "react";

const transition2 = {
    duration: 0.5,
    ease: "easeInOut",
  };

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  titles,
  titleOpacity,
  title,
  description,
  className
}) => {
  return (
    (<div className={cn("sticky top-64", className)}>
       <motion.p
        className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text  text-black"
        style={{ opacity: titleOpacity }}
        transition={transition}
      >
        {titles}
      </motion.p>
      <p
        className="text-xs md:text-xl font-normal text-center text-black mt-4 max-w-lg mx-auto">
        {description ||
          `Scroll this component and see our path!`}
      </p>
      
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute -top-60  md:-top-40 w-full">
        <motion.path
          d="M750,0 V40 H1200 V500.34 H750 V600.66"
          stroke="#FFB7C5"
          strokeWidth="4"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[0],
          }}
          className=" size-5"
          transition={transition} />
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>)
  );
};
