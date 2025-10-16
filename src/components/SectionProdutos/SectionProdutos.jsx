import React from 'react'
import CardsProdutos from '../CardsProdtuos/ContainerProdutos.jsx'
import { Container, Row } from 'react-bootstrap'
import './SectionProdutos.css'
import ImgApp from '../../assets/Img/App.png'

function SectionProdutos() {
  return (
    <div>
        <h1>Explore nossos produtos</h1>
        <Container>
            <Row>
                <CardsProdutos
                    ImgProduto={ImgApp}
                    TituloProduto={
                        <>
                        Aparelho Inteligente<br />SmartSitter
                        </>
                    }
                    TamanhoProduto="0MB"
                    TituloBotao="Comprar"
                    DestinoBotao=""
                />
                <div className="linha"></div>
                <CardsProdutos
                    ImgProduto={ImgApp}
                    TituloProduto="App SmartSitter"
                    TamanhoProduto="0MB"
                    TituloBotao="Baixar"
                    DestinoBotao=""
                />
            </Row>
        </Container>
    </div>
  )
}

export default SectionProdutos