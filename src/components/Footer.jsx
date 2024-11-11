import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function Footer() {
  return (
    <section className='footer bg-dark' style={{ height: "520px" }} >

      <Row className='d-flex justify-content-center align-items-center'>
        <Col md={12} className='mt-5 d-flex justify-content-center align-items-center'>
          <div className='fw-bold mb-2 d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-center text-white mb-5'>Questions ? Let's talk </h2>
            <p className='text-center text-white'> We will help you determine if Motivated Mornings is the right fit </p>
            <p className='text-center text-white'>and answer any of your questions.</p>
            <Button className='btn footer-btn btn-center text-dark fw-bold button-block p-3 ps-3 pe-3 rounded-pill mt-3 mb-5' style={{ backgroundColor: "#e8c05a" }}>Let's talk </Button>
            <div className='d-flex justify-content-center align-items-center mb-5'>
              <i className="fa-brands fa-instagram fa-lg me-3 text-white"></i>
              <i className="fa-brands fa-facebook-f fa-lg me-3 text-white"></i>
              <i className="fa-brands fa-linkedin-in fa-lg text-white"></i>
            </div>
            <p className='text-center text-white'>Email: hello@motivatedmornings.work </p>
            <p className='text-center text-white'>&copy; 2020 motivated mornings, Inc. All rights reserved. Site by <a href="" className='text-decoration-none me-2 text-white'>Knapsack</a> </p>
            <p className='text-center text-white '>
              <a href="" className='text-decoration-none me-2 text-white'>guidelines</a>
              <a href="" className='text-decoration-none me-2 text-white'>privacy</a>
              <a href="" className='text-decoration-none me-2 text-white'>terms</a>
              <a href="" className='text-decoration-none me-2 text-white'>members</a>
            </p>
          </div>
        </Col>
      </Row>

    </section>
  )
}

export default Footer