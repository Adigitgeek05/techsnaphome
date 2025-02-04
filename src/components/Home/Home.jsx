import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "../Cursor/Cursor.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  
  const cursorRef = useRef(null);
  useEffect(() => {
    gsap.set("#cursor", { scale: 1 });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBorderWidth(Math.max(0, 100 - scrollY / 3)); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    gsap.to("#cursor", { scale: 8, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to("#cursor", { scale: 1, duration: 0.3, ease: "power2.out" });
  };
  useEffect(() => {
    gsap.to(sectionRef.current, {
      width: "100vw", 
      height: "100vh",
      borderWidth: 0, 
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true, 
      }, 
    });
  }, []);

  return (
    <div className="relative bg-white min-h-screen flex items-center justify-center">
      
      <div
        ref={sectionRef}
        className="bg-zinc-900 text-white flex flex-col items-center justify-center px-6 relative transition-all duration-500"
        style={{
          minHeight: "500px",
          minWidth: "1300px",
          border: "300px solid white", 
        }}
      >
        <Cursor />

        <h1 className="text-4xl md:text-6xl font-extrabold"
         onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            TECHSNAP</h1>
        <p className="text-lg text-gray-400 mt-4">
          Fast, responsive, and SEO-optimized web solutions for your business.
        </p>
      </div>

     
      <div className="h-screen bg-white"></div>
    </div>
  );
}
