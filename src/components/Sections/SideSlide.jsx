import { useRef, useLayoutEffect,useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Cursor from "../Cursor/Cursor.jsx"


gsap.registerPlugin(ScrollTrigger);

const SideSlide = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    gsap.set("#cursor", { scale: 1 });
  });
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(slider.current, {
        x: `-${(panels.length - 1) * 100}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: "+=3000", 
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className=" no-scrollbar   min-h-screen overflow overflow-x-scroll" ref={component}>
      <div ref={slider} className="sticky-top-0 flex w-[400vw]">
        <div className="sticky-top-0 z-0 panel w-screen h-screen bg-zinc-800 flex justify-center items-center text-white text-4xl">
          Course 1
        </div>
        <div className="sticky-top-0 z-2 panel w-screen h-screen bg-zinc-800 flex justify-center items-center text-white text-4xl">
          Course 2
        </div>
        <div className="sticky-top-0 z-4 panel w-screen h-screen bg-zinc-800 flex justify-center items-center text-white text-4xl">
          Course 3
        </div>
        <div className="panel w-screen h-screen bg-zinc-800 flex justify-center items-center text-white text-4xl">
          Course 4
        </div>
      </div>
    </div>
  );
};

export default SideSlide;
