import React from 'react'
import Home from './components/Home/Home.jsx'
import Cursor from './components/Cursor/Cursor.jsx'
import Section from './components/Sections/Section.jsx'
import Pg from './components/Sections/Pg.jsx'
import SideSlide from './components/Sections/SideSlide.jsx'

const App = () => {
  return (
    <div>
      <Cursor />
      <Home />
      <Pg />
      <Section />
      <SideSlide />
    </div>
  )
}

export default App
