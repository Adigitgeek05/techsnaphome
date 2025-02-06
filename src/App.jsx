import React from 'react'
import Home from './components/Home/Home.jsx'
import Cursor from './components/Cursor/Cursor.jsx'
import Section from './components/Sections/Section.jsx'
import Pg from './components/Sections/Pg.jsx'
import SideSlide from './components/Sections/SideSlide.jsx'
import Timeline from './components/Sections/Timeline.tsx'
import Footer from './components/Footer/Footer.jsx'
import FooterUp from './components/Sections/FooterUp.jsx'

const App = () => {
  return (
    <div>
      <Cursor />
      <Home />
      <Pg />
      <Timeline />
      <Section />
      <SideSlide />
      <FooterUp />
      <Footer />

    </div>
  )
}

export default App
