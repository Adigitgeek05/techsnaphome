import { useState } from "react";
import career from "/career.svg";
import { DotPattern } from "../ui/magicUtils.jsx";
import { useNavigate } from "react-router-dom";
export default function Section3() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const options = [
    { id: 1, title: "Web development" },
    { id: 2, title: "Data science" },
    { id: 3, title: "Computer science" },
    { id: 4, title: "Web design" },
    { id: 5, title: "Artificial intelligence" },
    { id: 6, title: "Machine learning" },
    { id: 7, title: "Game development" },
    { id: 8, title: "Mobile development" },
    { id: 9, title: "Data visualization" },
    { id: 10, title: "Cloud computing" },
    { id: 11, title: "Cybersecurity" },
    { id: 12, title: "Not sure yet" },
  ];

  return (
   

    <div className="min-h-screen bg-orange-100 p-10 overflow-hidden relative ">
             <div
  className="absolute inset-0 h-full w-full bg-[radial-gradient(#121212_1px,transparent_1px)] [background-size:16px_16px]">

      <div className="max-w-5xl mx-auto p-8 z-[999] bg-orange-100 mt-8">
        <h1 className="text-center text-4xl font-bold mb-4 font-roboto">
          Find what's right for you
        </h1>
        <p className="text-center text-lg mb-8 font-bold">
          Answer 3 quick questions to get recommendations that match your
          interests.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {step}
              </div>
            ))}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-crimson-text font-semibold text-gray-800 mb-6">
              What do you want to learn about?
            </h2>
            <div className="flex gap-20 items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelectedOption(option.id);
                        navigate("/second"); // Navigate to Second.jsx
                      }}
                      className={`px-6 py-3 border rounded-lg text-left transition-all hover:border-blue-500 bg-white w-full whitespace-nowrap ${
                        selectedOption === option.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200"
                      }`}
                    >
                      <span className="font-roboto">{option.title}</span>
                    </button>
                  ))}
                </div>
              <div className="flex flex-col">
                <img src={career} alt="" className="w-52 h-45" />
                <div className="text-gray-600 mt-2">
                  <p className="font-roboto">
                    We have hundreds of courses that cover just about everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* <DotPattern /> */}
  </div>

       
    </div>
  );
}
