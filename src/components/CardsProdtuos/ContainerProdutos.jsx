import React from 'react'
import { Link } from 'react-router-dom';
import './ContainerProdutos.css'
import { Col } from 'react-bootstrap'


function BotaoProduto(props) {
  return (
    <Link to={props.destino} className="btn-produto">
      {props.titulo}
    </Link>
  );
}

function ContainerProdutos(props) {
  return (
      <Col className='container-produto'>
            <img className='img-produto' src={props.ImgProduto}/>
            <h1 className='nome-produto'>{props.TituloProduto}</h1>
            <p className='info-Produto'>{`Tamaho: ${props.TamanhoProduto}`}</p>
            <p className='info-Produto'>Requisitos mínimos: Desconhecido</p>
            <BotaoProduto 
            titulo={props.TituloBotao} 
            destino={props.DestinoBotao} 
            />
      </Col>


  )
}

export default ContainerProdutos