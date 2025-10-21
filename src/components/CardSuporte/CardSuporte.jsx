import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './CardSuporte.css';

function CardSuporte() {
  return (
    <div className='suporte-bg'>
        <Container>
            <Row>
                <Col xs={12} sm={8} md={6} lg={5} xl={4}>
                    <h1>Suporte</h1>
                    <form>
                        <label htmlFor="assunto">Assunto</label>
                        <select id="assunto" name="assunto">
                            <option value="">Selecione o assunto</option>
                            <option value="suporte">Produto com defeito</option>
                            <option value="financeiro">Duvida</option>
                            <option value="outros">Outros</option>
                        </select> 
                        <label htmlFor='Titulo'>Título</label>
                        <input
                        type="text"
                        id="TituloSporte"
                        name="TituloSporte"
                        autoComplete='off'
                        />              
                        <label htmlFor='MensagemSuporte'>Mensagem</label>
                        <input
                        type="text"
                        id="MensagemSuporte"
                        name="MensagemSuporte"
                        autoComplete='off'
                        />              
                    </form>
                </Col>

            </Row>
            
        </Container>
    </div>
  )
}

export default CardSuporte
