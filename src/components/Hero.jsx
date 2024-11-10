import React from 'react'
import Header from './Header'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap'


function Hero() {
  return (
    <section className='hero' id='hero'>

      <Container className=''>
        <Header />
        <Row className='herocontainer mt-5'>
          <Col md={6} className='hero-column p-5 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='fw-bold'>Actually do the work.</h1>
            <p>Accountability,community and productivity <br /> coaching to help you start and finish the work.</p>
            <div className='p-2 bg-dark w-50 rounded-pill d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-play me-2 text-white"></i>
              <span className='text-white' >See How It Works</span>
            </div>
          </Col>
          <Col md={6} className='hero-column d-flex justify-content-start align-items-center'>
            <img src="https://shakennotstirred.net/mornings/files/stacks-image-f604fb3.png" className='hero-img' height="400px" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero