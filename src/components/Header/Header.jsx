import {react} from 'react'

export default function Header() {
    return (
      <header className="bg-zinc-900 px-6 py-4 flex items-center space-x-11 justify-between">
        <div className="flex items-center">
          <img src="/src/assets/techsnaplogo.png" alt="Company logo" className="h-8" />
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
  
  
  
  
  