import React from 'react'
import '../HomePage/HomePage.css'
import NavbarHome from '../../components/NavBar/Navbar.jsx'
import SectionSono from '../../components/SectionSono/SectionSono.jsx'
import '../HomePage/HomePage.css'
import SecitonBebe from '../../components/SecitonBebe/SecitonBebe.jsx'
import SectionCarrosel from '../../components/SectionCarrosel/SectionCarrosel.jsx'
function homePage() {
  return (
    <div>
      <NavbarHome/>
      <SectionSono/>
      <SecitonBebe/>
      <SectionCarrosel/>



    </div>
  )
}

export default homePage
