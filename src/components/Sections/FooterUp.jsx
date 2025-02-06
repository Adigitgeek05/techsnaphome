import {react} from  'react';

export default function FooterUp() {
    return (
      <div className="sticky-top-0 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 font-inter">
            Techsnap
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-[#f15214] hover:bg-[#FFD700] text-black font-semibold rounded-lg transform transition-transform duration-200 hover:scale-105 font-inter">
              Start free trial
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg transform transition-transform duration-200 hover:scale-105 font-inter">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    );
  }
  