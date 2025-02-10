import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "../Cursor/Cursor";
import FooterUp from "./FooterUp";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const cursorRef =useRef(null);
  useEffect(()=> {
    gsap.set("#cursor", {scale: 1});
  })
 


  return (
    <div
      ref={sectionRef}
      className="relative -top-20 bg-orange-500 mb-[11em] rounded-bl-[2.5em] rounded-br-[2.5em] min-h-screen text-4xl text-white flex flex-col font-extrabold   z-[4] justify-center items-center transition-all duration-500"
      >
      Section
     
      
    </div>
   
  );
};

export default Section2;
