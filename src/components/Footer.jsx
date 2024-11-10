import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap'

function Footer() {
  return (
    <section className='footer bg-dark' style={{ height: "550px" }} >

      <Row className='d-flex justify-content-center align-items-center'>
        <Col md={6} className='mt-5 p-5 d-flex justify-content-center align-items-center'>
          <div className='fw-bold mb-5 d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-center text-white mb-5'>Questions ? Let's talk </h2>
            <p className='text-center text-white'> We will help you determine if Motivated Mornings is the right fit </p>
            <p className='text-center text-white'>and answer any of your questions.</p>
            <Button className='footer-btn  btn-center text-dark p-3 rounded-pill mt-3 mb-5' style={{ backgroundColor: "#e8c05a" }}>Let's talk </Button>
            <div className='d-flex justify-content-center align-items-center mb-5'>
              <i className="fa-brands fa-instagram fa-lg me-3 text-white"></i>
              <i className="fa-brands fa-facebook-f fa-lg me-3 text-white"></i>
              <i className="fa-brands fa-linkedin-in fa-lg text-white"></i>
            </div>
            <p className='text-center text-white'>Email: hello@motivatedmornings.work </p>
            <p className='text-center text-white'>&copy; 2020 motivated mornings, Inc. All rights reserved. Site by <a href="">Knapsack.</a> </p>
            <p className='text-center text-white'><a href="">guidelines.</a> <a href="">privacy</a> <a href="">terms</a> <a href="">members</a>  </p>
          </div>
        </Col>
      </Row>

    </section>
  )
}

export default Footer