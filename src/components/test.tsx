import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Test() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const index = useTransform(scrollYProgress, [0, 1], [0, 2.99]);

  return (
    <div className="bg-amber-100" ref={containerRef} style={{ height: "300vh", position: "relative" }}>
      <div style={{ position: "absolute", top: "15vh", height: "100vh", width: "100%" }}>
        <div style={{ position: "sticky", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "black", zIndex: 50 }}>
          <motion.div
            style={{ width: 200, height: 200, background: "black", zIndex: 20 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.5 }}
          >
            {Math.round(index)}
          </motion.div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "100vh", height: "100vh", width: "100%" }}>
        <div style={{ position: "sticky", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white", zIndex: 50 }}>
          <motion.div
            style={{ width: 200, height: 200, background: "red", zIndex: 20 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.5 }}
          >
            {Math.round(index)}
          </motion.div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "200vh", height: "100vh", width: "100%" }}>
        <div style={{ position: "sticky", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "blue", zIndex: 50 }}>
          <motion.div
            style={{ width: 200, height: 200, background: "blue", zIndex: 20 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.5 }}
          >
            {Math.round(index)}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
