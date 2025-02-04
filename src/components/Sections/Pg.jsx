import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const quotes = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
  "In one stroke, he bloodied both sides - set the American and Mexican governments against the Cartel, and cut off the supply of methamphetamine to the southwest. If this man had his own source of product on this side of the border, he would have the market to himself. The rewards would be... enormous. "
];

const CARD_COUNT = 4;

export default function App() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start 20%", "end 120%"]
  });

  return (
    <>
      <div className="sticky top-0 h-screen grid place-items-center text-6xl text-center -z-10">
        scroll down
        <br />▾
      </div>
      <div
        ref={target}
        className="h-[500vh] mx-auto bg-blue-500 flow-root relative "
      >
        <div className="sticky top-0 flow-root">
          <div className="h-[100vh] relative flex justify-center items-center">
            <h1 className="top-[10%] absolute text-2xl md:text-4xl text-white font-bold text-center w-[20ch]">
              You probably haven't heard of them tattooed glossier leggings
            </h1>
            {[...Array(CARD_COUNT).keys()].map((_, idx, arr) => (
              <Box
                key={idx}
                scrollYProgress={scrollYProgress}
                index={idx}
                length={arr.length}
                start={(1 / arr.length) * idx}
                end={(1 / arr.length) * (idx + 1)}
                scaleFac={0.8 + idx * (0.2 / (arr.length - 1))}
              >
                <div
                  className="border rounded-md shadow-2xl min-h-[200px] p-4 py-8 gap-4 bg-white flex justify-center items-center w-full mx-auto"
                  style={{ maxWidth: "min(80%, 800px)" }}
                >
                  <div className="hidden md:flex text-6xl w-1/6 ml-8 font-serif border-r h-[100%] items-center justify-center">
                    {idx + 1}
                  </div>
                  <div className="text-xl flex-1">
                    {quotes[idx % quotes.length]}
                  </div>
                </div>
              </Box>
            ))}
          </div>
        </div>
      </div>
      <div className="min-w-screen sticky top-0 h-screen grid place-items-center text-6xl text-center">

      </div>
    </>
  );
}
function Box({
  children,
  end,
  index,
  length,
  scaleFac,
  scrollYProgress,
  start
}) {
  const transform = `${40 * (-1 + (1 / (length - 1)) * index + 1)}%`; // 40 is a magic number that works for the height of the boxes. Dynamic heights need refinement
  const translate = useTransform(
    scrollYProgress,
    [start, end],
    ["200%", transform]
  );
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
 
  return (
    <motion.div
      style={{ y: translate, originY: 0.5, opacity }}
      className="absolute"
    >
      {children}
    </motion.div>
  );
}
