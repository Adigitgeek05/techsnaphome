import {react,useState , useEffect} from 'react'
import { gsap } from "gsap";
import techsnaplo from '/techsnaplogo.png';

export default function Header() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        gsap.to(".navbar", {
          backgroundColor: scrolling ? "rgba(0, 0, 0, 0.9)" : "transparent",
          height: scrolling ? "60px" : "80px",
          duration: 0.3,
          ease: "power2.out",
        });
      }, [scrolling]);
    
  
    return (
      <header className="dark:bg-black px-6 py-4 flex items-center space-x-11 justify-between">
        <div className="flex items-center">
          <img src={techsnaplo} alt="Company logo" className="h-8" />
        </div>
  
        <nav className="hidden md:flex items-center space-x-11">
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
        </nav>
  
        <div className="flex items-center space-x-11">
          <button className="px-4 py-2 text-[#ff69b4] border border-[#ff69b4] rounded-lg hover:bg-[#ff69b4] hover:text-white font-roboto">
            Login
          </button>
          <button className="px-4 py-2 bg-[#ff69b4] text-white rounded-lg hover:bg-[#ff4da6] font-roboto">
            Register
          </button>
        </div>
      </header>
    );
  }
  
  
 

  
  