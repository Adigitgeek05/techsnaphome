import { useState } from "react";
import purpose from "/purpose.svg";
import { useNavigate } from "react-router-dom";
export default function Third() {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();
    const options = [
        { title: "Beginner", description: "I've never coded or I only know the basics" },
        { title: "Intermediate", description: "I've created some projects with code" },
        { title: "Advanced", description: "I've professional experience writing code" },
      ];
  
    return (
      <div className="min-h-screen bg-white p-10 overflow-hidden relative ">
             

      <div className="max-w-6xl mx-auto p-6 z-[999] bg-white mt-22  mb-4">
            <h1 className="text-center text-3xl md:text-4xl font-crimson-text font-bold text-gray-800 mb-4">
              Find what's right for you
            </h1>
            <p className="text-center text-gray-600 text-lg md:text-xl mb-4 ">
              Answer 3 quick questions to get recommendations that match your
              interests.
            </p>
          
  
          <div className="flex flex-col   md:flex-row justify-between  gap-20">
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step === 3
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step} 
                </div>
              ))}
            </div>
  
            <div className="flex-1">
              <h2 className="text-2xl font-crimson-text font-semibold text-gray-800 mb-6">
                What do you want to achieve?
              </h2>
              <div className="flex flex-col gap-4">
                  {options.map((option) => (
                    <button
                      key={option.title}
                      onClick={() => {
                        setSelectedOption(option.title);
                         
                      }}
                      className={`p-4 text-left rounded-lg border  bg-white transition-all ${
                        selectedOption === option.title ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                    >
                      <span className="font-bold">{option.title}</span>
                      <br />
                      <span className="text-gray-600 text-sm">{option.description}</span>
                    </button>
                  ))}
                </div>
              <div className="mt-6">
                <button
                  onClick={() => navigate("/second")}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Back
                </button>
              </div>
            </div>
  
            <div className="text-center pt-10">
              <div className="w-52 h-60  mb-4 mx-auto">
                <img src={purpose} alt="" />
              </div>
              <p className="text-sm text-gray-600 max-w-[200px]">
              Our hands-on learning environment is designed for all levels.
              </p>
            </div>
          </div>
  
         
        </div>
      </div>
     
    );
  }
  
  
  