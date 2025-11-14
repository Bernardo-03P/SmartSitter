import React from 'react'
import CarroselProduto from '../../components/CarroselProduto/CarroselProduto'
import NavbarCadastro from '../../components/NavBar/NavbarCadastro'
import InfoProduto from '../../components/InfoProduto/InfoProduto'
import './TelaProduto.css'

function TelaProduto() {
  return (
        <div className="produto-bg">
            <NavbarCadastro/>

            <div className="produto-conteudo">
                <CarroselProduto/>
                <InfoProduto/>
            </div>
        </div>

  )
}

export default TelaProduto
