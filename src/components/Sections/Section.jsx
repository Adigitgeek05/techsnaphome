import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { borderRadius: "40px" }, // No border-radius initially
      {
        borderRadius: "40px 40px 0 0", // Rounded top corners
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
      className="bg-blue-400 min-h-screen text-4xl text-white flex flex-col font-extrabold sticky top-0 z-[4] justify-center items-center transition-all duration-500"
    >
      Courses
    </div>
  );
};

export default Section;
