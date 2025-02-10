
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timelineData: TimelineItem[] = [
  { year: "2020", title: "Foundation", description: "Our company was founded with a vision to innovate." },
  { year: "2021", title: "Expansion", description: "We expanded our team and opened new offices." },
  { year: "2022", title: "Major Milestone", description: "Launched our flagship product to great success." },
 
]

const Section: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const smoothProgress = useSpring(scrollYProgress, { damping: 50, stiffness: 400})
  const [pathLength, setPathLength] = useState(0)

  const lineRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (lineRef.current) {
      setPathLength(lineRef.current.getTotalLength())
    }
  }, [])

  const drawPath = useTransform(smoothProgress, [1,0], [0, pathLength])
  const movePoint = useTransform(smoothProgress, [0, 1], [0, pathLength])

  return (
    <div ref={containerRef} className="bg-gradient-to-r from-red-200 to-red-800 container  bottom-20  relative">
      <h1 className="text-4xl text-white font-bold text-center mb-12"></h1>
      <div className="relative min-h-[150vh] h-full">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            ref={lineRef}
            d="M45,0 V5 H90 V80 H45 V175 "
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="0.5"
            strokeDasharray={pathLength}
            strokeDashoffset={drawPath}
          />
          <motion.circle
            cx={pathLength}
            cy={pathLength}
            r="1.5"
            fill="#3b82f6"
            strokeWidth="0.5"
            stroke="#fff"
            style={{
              pathLength: pathLength,
              pathOffset: movePoint,
            }}
          >
            <animateMotion dur="0.01s" repeatCount="indefinite" path="M10,10 H90 V50 H10 V50 H90 V70 H10 V20 0" />/*M45,0 V5 H90 V60 H45 V65 H90 V120 H45 V160 H90" */
          </motion.circle>
        </svg>

        {timelineData.map((item, index) => (
          <TimelineItem  key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

const TimelineItem: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0
  const yPosition = 10 + index * 20 // Adjust vertical position based on index

  return (
    <div
      className={`absolute w-1/2 ${isEven ? "left-0 text-right pr-8" : "right-0 text-left pl-8"}`}
      style={{ top: `${yPosition}%` }}
    >
      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-1">{item.description}</p>
      <span className="text-xl font-semibold text-blue-500">{item.year}</span>
    </div>
  )
}

export default Section

