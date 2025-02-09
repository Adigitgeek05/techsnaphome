import techsnaplogo from '/techsnaplogo.png'

export default function Footer() {
  
    return (
      <footer className="bg-[#1a2b3c] w-[100vw] fixed pt-32 -z-10 bottom-0 text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="col-span-2 pr-8">
              <div className="flex items-center mb-6">
                <img
                  src={techsnaplogo}
                  alt="Techsnap Logo with text 'Snap the tech'"
                  className="h-12"
                />
              </div>
              <p className="text-sm mb-6">
                We are here to endure your muddled stages of knowing the trends
                while pursuing UG-CSE, we help you to know about trending jobs and
                required skills for achieving one particular designation
              </p>
              <p className="text-sm mb-6">
                We will succour you in submitting your university projects as well
                as steer you with free tutorials, online courses, live courses and
                career paths
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 uppercase text-sm">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Learner stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Our people
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 uppercase text-sm">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Career paths
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Mock Interview
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 uppercase text-sm">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Get Involved
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-bold mb-4 uppercase text-sm">Products</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Managesnap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Datasnap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Evalsnap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Createsnap
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Join our newsletter"
                    className="bg-white text-black px-4 py-2 rounded-l-lg w-full"
                  />
                  <button className="bg-[#ff69b4] text-white px-4 py-2 rounded-r-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a href="#" className="text-sm hover:text-gray-300">
                  Privacy policy
                </a>
                <a href="#" className="text-sm hover:text-gray-300">
                  Cookies Notice
                </a>
                <a href="#" className="text-sm hover:text-gray-300">
                  Security
                </a>
                <a href="#" className="text-sm hover:text-gray-300">
                  Terms of use
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <i className="fa-brands fa-discord text-xl"></i>
                </a>
              </div>
            </div>
            <div className="text-center mt-4 text-sm">
              Made with ❤️ in India © 2023 Techsnap Educations LLP. All Rights
              Reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  
  
  
  
  