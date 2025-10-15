import React from 'react'
import '../SectionSono/SectionSono.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImgCelular from '../../assets/Img/Celular.png'

function SectionSono() {
  return (
    <div>
        <Row className='align-items-center'>
            <Col className='sessao-txt-e-btn' xs={12} md={6}>
                <h1 className='titulo'>Seu bebê dorme<br/> melhor. Você <br/>também.</h1>
                <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore.</p>
                <div className='sessao-botoes'>
                <button className='btn-comprar'>Comprar</button>
                <button className='btn-app'>Baixar APP</button>
                </div>
            </Col>
            <Col className='sessao-img d-none d-md-block' xs={12} md={6}>
                <img className='img-celular' src={ImgCelular}/>
            </Col>
        </Row>
    </div>

  )
}

export default SectionSono