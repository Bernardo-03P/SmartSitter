import React from 'react'
import CardCadastro from '../../components/CardCadastro/CardCadastro'
import NavBarCadastro from '../../components/NavBar/NavbarCadastro'
import './TelaCadastro.css'
function Telacadastro() {
  return (
    <div className='cadastro'>
        <NavBarCadastro/>
      <CardCadastro/>
    </div>
  )
}

export default Telacadastro
