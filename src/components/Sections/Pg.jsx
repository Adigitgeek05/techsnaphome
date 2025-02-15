import {useRef, react, useEffect,useState} from  'react';


export default function Pg() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorRef = useRef(null);
  const target = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = target.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollPercent = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height - window.innerHeight)),
      );
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quotes = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    "In one stroke, he bloodied both sides - set the American and Mexican governments against the Cartel, and cut off the supply of methamphetamine to the southwest. If this man had his own source of product on this side of the border",
  ];

  const CARD_COUNT = 4;

  return (
    <>
      
      <div
        ref={target}
        className=" h-[600vh] mx-auto py-10 bg-orange-50 flow-root relative"
      >
        <div className="sticky top-0 flow-root">
          <div className="absolute top-1/2 left-[5%] -translate-y-1/2 h-[60vh] flex flex-col items-center">
            <div className="relative h-full w-[2px] bg-gray-200">
              <div
                className="w-full bg-blue-500 origin-top transition-transform duration-100"
                style={{
                  transform: `scaleY(${scrollProgress})`,
                  height: "100%",
                }}
              />
              {[0, 33, 66, 100].map((position) => (
                <div
                  key={position}
                  className={`absolute w-3 h-3 rounded-full -left-[5px] transform -translate-x-[0%] transition-colors duration-200
                    ${scrollProgress >= position / 100 ? "bg-blue-500" : "bg-gray-200"}`}
                  style={{
                    top: `${position}%`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="h-[100vh] relative flex justify-center items-center pl-[10%]">
            <h1 className="top-[10%] absolute text-2xl md:text-4xl text-black font-bold text-center w-[20ch]">
              You probably haven't heard of them tattooed glossier leggings
            </h1>
            {[...Array(CARD_COUNT).keys()].map((_, idx, arr) => (
              <Box
                key={idx}
                scrollProgress={scrollProgress}
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
      
    </>
  );
}

function Box({
  children,
  end,
  index,
  length,
  scaleFac,
  scrollProgress,
  start,
}) {
  const transform = `${40 * (-1 + (1 / (length - 1)) * index + 1)}%`;
  const progress = Math.min(
    1,
    Math.max(0, (scrollProgress - start) / (end - start)),
  );

  return (
    <div
      style={{
        transform: `translateY(${200 - (200 - parseFloat(transform)) * progress}%)`,
        opacity: progress,
        transformOrigin: "50% 50%",
      }}
      className="absolute transition-all duration-100"
    >
      {children}
    </div>
  );
}


