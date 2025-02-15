import React from 'react'
import Home from './components/Home/Home.tsx'
import Cursor from './components/Cursor/Cursor.jsx'
import Section from './components/Sections/Section.tsx'
import Pg from './components/Sections/Pg.jsx'
import SideSlide from './components/Sections/SideSlide.jsx'
import Timeline from './components/Sections/Timeline.tsx'
import Footer from './components/Footer/Footer.jsx'
import FooterUp from './components/Sections/FooterUp.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Section2 from './components/Sections/Section2.jsx'

import Test from './components/test.tsx'
import { GoogleGeminiEffectDemo } from './components/Sections/TestTimeline.jsx'
import AppRoutes from "./AppRoutes.jsx";
import { AppleCardsCarouselDemo } from './components/ui/applecorousal.tsx'




    



const App = () => {
  return (
    <>
      <div className='no-scrollbar overflow-x-clip relative rounded-b-[2.5em] '>
       
     <Navbar />
      <Cursor />
      <Home />
      
      <AppRoutes />
      <AppleCardsCarouselDemo />
      <GoogleGeminiEffectDemo />
      <Pg />
    

      <SideSlide />
      <Section2 />
   
      <Footer />
      </div>

    </>
  )
}

export default App
