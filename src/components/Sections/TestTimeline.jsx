"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect }  from "../ui/lineAnimation"

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
 const titleOpacity = useTransform(scrollYProgress, [0, 0.10, 0.40, 0.60, 0.98], [1, 1, 1, 1, 1]);
  const titles = useTransform(scrollYProgress, [0, 0.10, 0.40, 0.60, 0.98], [
    "Our Journey",
    "Our Journey",
    "Our Success",
    "Our Future",
    "End",
  ]);
 

  return (
    (<div
      className="h-[400vh] bg-black  w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}>
      <GoogleGeminiEffect
      titleOpacity={titleOpacity}
      titles={titles}
        pathLengths={[
          pathLengthFirst,
         
        ]} />
    </div>)
  );
}
