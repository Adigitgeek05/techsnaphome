"use client";
import React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import Cursor from "../Cursor/Cursor.jsx";
import vitelogo from "/background.svg";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const cursorRef = useRef(null);
  const controls = useAnimation();
  const [progress, setProgress] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, { scale: 8, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <>
      <div className="bg-white min-w-screen min-h-screen ">
        <div className="flex flex-col mt-4 items-center">
          <div className="w-[90%] flex h-20   justify-center ">
            <div className="bg-black w-[20%]">
              <div className="bg-white w-full h-20 rounded-br-4xl" />
            </div>
            <div className="  w-[60%]    bg-black rounded-t-4xl " />
            <div className="bg-black w-[20%]">
              <div className="bg-white w-full h-20 rounded-bl-4xl" />
            </div>
          </div>
          <div className="bg-black text-white flex flex-col items-center justify-center p-10 w-[95%] h-[95vh] border-4 border-t-0  rounded-b-lg rounded-t-4xl relative m-auto">
            <Cursor ref={cursorRef} />
            <h3
              className="text-2xl md:text-3xl font-bold py-0"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
               Choose your career and start your project now !
            </h3>
            <p className="text-lg text-gray-400 mt-4 py-6">
             
            </p>
            <div className="w-[800px] h-[300px] overflow-hidden flex justify-center items-center">
              <img src={vitelogo} alt="Background Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
