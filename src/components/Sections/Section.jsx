import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "../Cursor/Cursor";

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const sectionRef = useRef(null);
  const cursorRef =useRef(null);
  useEffect(()=> {
    gsap.set("#cursor", {scale: 1});
  })
 
  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { borderRadius: "40px" }, 
      {
        borderRadius: "40px 40px 0 0", 
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10px", // When it starts sticking
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-zinc-900 min-h-screen text-4xl text-white flex flex-col font-extrabold  top-0 z-[4] justify-center items-center transition-all duration-500"
      >
      Courses
    </div>
  );
};

export default Section;
