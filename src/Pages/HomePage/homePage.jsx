import React from 'react'
import './HomePage.css'
import NavbarHome from '../../components/NavBar/Navbar.jsx'
import SectionSono from '../../components/SectionSono/SectionSono.jsx'
import SecitonBebe from '../../components/SecitonBebe/SecitonBebe.jsx'
import SectionCarrosel from '../../components/SectionCarrosel/Carrosel.jsx'
import SectionProdutos from '../../components/SectionProdutos/SectionProdutos.jsx'
import Rodape from '../../components/Rodape/rodape.jsx'

function HomePage() {
  return (
    <div className="homepage-body">
      <NavbarHome/>
      <SectionSono/>
      <SecitonBebe/>
      <SectionCarrosel/>
      <SectionProdutos/>
      <Rodape/>
    </div>
  )
}

export default HomePage

