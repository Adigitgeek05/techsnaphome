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
      className="relative -top-44 bg-white mb-[15em] flex  justify-center item-center rounded-bl-[2.0em] rounded-br-[2.0em] min-h-screen text-4xl text-black flex-col font-extrabold   z-[4]  items-center transition-all duration-500"
      >
      Section
     
      <div className="flex w-[90%] bg-gradient-to-r from-purple-300 to-purple-500 text-black justify-center items-center h-80 rounded-4xl absolute -bottom-[10%]"> <h1>Techsnap</h1>  </div>
    </div>
   
  );
};

export default Section2;
