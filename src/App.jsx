import React from 'react'
import Home from './components/Home/Home.jsx'
import Cursor from './components/Cursor/Cursor.jsx'
import Section from './components/Sections/Section.tsx'
import Pg from './components/Sections/Pg.jsx'
import SideSlide from './components/Sections/SideSlide.jsx'
import Timeline from './components/Sections/Timeline.tsx'
import Footer from './components/Footer/Footer.jsx'
import FooterUp from './components/Sections/FooterUp.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Section2 from './components/Sections/Section2.jsx'
const App = () => {
  return (
    <>
      <div className='no-scrollbar relative rounded-b-[2.5em] '>
       
      <Navbar/>
      <Cursor />
      <Home />
      <Pg />
      <Timeline />
      <Section />

      <SideSlide />
      <Section2 />
   
      <Footer />
      </div>

    </>
  )
}

export default App
