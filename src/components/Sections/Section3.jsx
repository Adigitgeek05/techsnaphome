import {useState} from 'react';
import career from '/career.svg';

export default function Section3() {
    const [selectedOption, setSelectedOption] = useState(null);
  
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
      <div
        className="min-h-screen  bg-gradient-to-r from-white to-orange-100 p-10 
        "
      >
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4 font-roboto">
            Find what's right for you
          </h1>
          <p className="text-lg mb-8 text-gray-600 font-roboto">
            Answer 3 quick questions to get recommendations that match your
            interests.
          </p>
  
          <div className="mb-8 ">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                1
              </div>
              <h2 className="text-xl font-roboto">
                What do you want to learn about?
              </h2>
            </div>
          <div className='flex gap-50  items-center '>
            <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`p-4 border rounded-lg text-left transition-all hover:border-blue-500 bg-white ${
                    selectedOption === option.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <span className="font-roboto">{option.title}</span>
                </button>
              ))}
            </div>
            <div className='flex-col'> 
            <img src={career} alt="" className='w-50 h-60' />
              <div className=' text-gray-600'>
            <p className="font-roboto">
              We have hundreds of courses that cover just about everything.
            </p>
            </div>
            </div>
          </div>
         
  
      
        </div>
      </div>
      </div>
    );
  }
  
  
  