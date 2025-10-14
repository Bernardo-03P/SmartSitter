import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import '../SectionSonoMelhor/SectionSonoMelhor.css'
import ImgCelular from '../../assets/Img/Celular.png'


function SectionSonoMelhor() {
  return (

      <div className='main'>
        <Row>
            <Col className='Texto-e-btn'>
                <h1 className='titulo'>Seu bebê dorme<br/>melhor. Você<br/>também.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore.</p>
                <div className='botoes'>
                    <button className='btn-comprar'>Comprar</button>
                    <button className='btn-app'>Baixar App</button>
                </div>
            </Col>
            <Col>
            <img className='img-celular' src={ImgCelular} alt='celular'/>
            </Col>
        </Row>
      </div>

  )
}

export default SectionSonoMelhor
