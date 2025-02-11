import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from "../Cursor/Cursor.jsx";
import Header from "../Header/Header.jsx";
import { BackgroundLines } from "../ui/backgroun-lines.jsx";
import vitelogo from '/background.svg'
import Navbar from "../navbar/Navbar.jsx";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null); // Cursor reference

  useEffect(() => {
    gsap.set(cursorRef.current, { scale: 1 });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBorderWidth(Math.max(0, 100 - scrollY / 3));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, { scale: 8, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
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
    <div className="no-scrollbar sticky-top max-h-screen flex items-center justify-center">
      <div
        ref={sectionRef}
        style={{
          minHeight: "500px",
          minWidth: "1300px",
          border: "300px solid white",
        }}
      >
        <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center px-6 relative transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 bg-zinc-800 w-full">
            
          </div>
          
          {/* Pass cursorRef to Cursor Component */}
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
          
        </div>
      </div>

      <div className="h-screen bg-white"></div>
    </div>
  );
}
