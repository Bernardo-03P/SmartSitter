import React from 'react'
import '../SecitonBebe/SecitonBebe.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImgNenem from '../../assets/Img/nenem.png'

function SecitonBebe() {
  return (
    <div className='section-bebe'>
        <Row>
            <Col className='sessao-txt text-start'> 
            <h1 className='titulo'>Lorem ipsum dolor<br/> sit amet consectetur <br/>adipiscing elit</h1>
            <p className='txt'>Sed ut perspiciatis unde omnis iste natus error sit <br/> voluptatem accusantium doloremque laudantium,<br/> totam rem aperiam, eaque ipsa quae ab illo inventore<br/> veritatis et quasi architecto beatae vitae dicta sunt<br/> explicabo. Nemo enim ipsam voluptatem quia voluptas<br/> sit aspernatur aut odit aut fugit, sed quia consequuntur<br/> magni dolores eos qui ratione.</p>
            </Col>
            <Col>
                <img className='img-nenem' src={ImgNenem}/>
            </Col>
        </Row>
    </div>
  )
}

export default SecitonBebe