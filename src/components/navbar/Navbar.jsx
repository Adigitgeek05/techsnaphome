
import { useState, useEffect } from "react"
import { Link } from "react-router";
import techsnaplo from '/techsnaplogo.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
    className={`fixed top-0 left-0 right-0 z-50 ${
      isScrolled ? "px-4 py-2" : "px-8 py-4"
    }`}
  >
    <div
      className={`mx-auto bg-black  background-blur shadow-lg rounded-full ${
        isScrolled ? "max-w-5xl" : "max-w-7xl"
      } transition-[width,padding] duration-300 ease-in-out`}
    >
      <div className="w-full px-6 py-4 flex items-center space-x-11 justify-between">
        <img src={techsnaplo} alt="" className="h-10" />
  
        <div className="space-x-11 text-white">
          <a href="#" className="text-white hover:text-[#ff69b4] font-roboto">
            Catalog
          </a>
          <a href="#" className="text-white hover:text-[#ff69b4] font-roboto">
            Community
          </a>
          <a href="#" className="text-white hover:text-[#ff69b4] font-roboto">
            Career Paths
          </a>
          <a href="#" className="text-white hover:text-[#ff69b4] font-roboto">
            Resources
          </a>
          <a href="#" className="text-white hover:text-[#ff69b4] font-roboto">
            Pricing
          </a>
        </div>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar
