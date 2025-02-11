"use client";
import React from "react"
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimation } from "framer-motion";
import {motion} from "framer-motion"
import Cursor from "../Cursor/Cursor.jsx";
import vitelogo from '/background.svg'
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

  useEffect(() => {
    document.body.style.overflow = isZoomed ? "auto" : "hidden"; // Prevent or allow scrolling
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isZoomed]);

  const handleScroll = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    setProgress((prev) => {
      let newProgress = prev + event.deltaY * 0.1;
      newProgress = Math.max(0, Math.min(100, newProgress));

      if (newProgress >= 100) setIsZoomed(true);
      else if (newProgress <= 0) setIsZoomed(false);

      // Calculate scale & border radius
      const scaleValue = 1 - (100 - newProgress) * 0.005; // Smooth zoom effect
      const borderRadiusValue = `${Math.max(0, 20 - newProgress * 0.2)}px`;
      const insetValue = `${Math.max(0, 20 - newProgress * 0.2)}px`;

      controls.start({ scale: scaleValue, borderRadius: borderRadiusValue, inset: insetValue });

      return newProgress;
    });
  }, [controls]);

  return (
    <>
      <motion.div
      
        className="bg-black fixed text-white flex flex-col items-center justify-center p-5"
        animate={controls}
        initial={{ scale: 0.8, borderRadius: "20px", inset: "20px" }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        onWheel={handleScroll}
      >

        <div className="w-full h-0 relative bg-[#000] ">
          <div className="absolute bottom-[1em] w-[80%] rounded-t-4xl left-[50%] translate-[-50%] h-[9rem] bg-black"></div>
        </div>
  
          <Cursor ref={cursorRef} />
          <h1
            className="text-4xl md:text-6xl font-extrabold py-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            TECHSNAP
          </h1>
          <p className="text-lg text-gray-400 mt-4 py-10">
            Fast, responsive, and SEO-optimized web solutions for your business.
          </p>
          <div className="w-[800px] h-[300px] overflow-hidden flex justify-center items-center">
          <img src={vitelogo} alt="Background Image" />
          </div>
        
      </motion.div>

      {/* Normal scrolling resumes after zoom */}
      {isZoomed && (
        // <div className="h-screen w-full bg-gray-800 text-white flex flex-col items-center justify-center">
        //   <h2 className="text-2xl font-bold">Now You Can Scroll</h2>
        //   <p>Normal scrolling resumes...</p>
        // </div>
        <></>
      )}

      {/* Another Section */}
      <div className="h-screen bg-white"></div>
    </>
  );
}
