import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

function FreeGuide() {
    return (
        <section className='freeguide' id='freeguide'>
            <Container>
                <Row>
                    <Col md={6} className=' d-flex flex-column justify-content-center align-items-center'>
                        <h6 className='fw-bold mb-2'>FREE GUIDE</h6>
                        <h2 className='fw-bold mb-3'>8 Secrets to <br /> Doing Work <br /> That Matters</h2>
                        <div className='d-flex flex-column justify-content-evenly align-items-start'>
                            <div><i className="fa-regular fa-square-check me-3 ms-3" style={{ color: "#FFD43B;" }}></i>Experiencing your habbit transform</div>
                            <div><i className="fa-regular fa-square-check me-3 ms-3" style={{ color: "#FFD43B;" }}></i>Accessing tools, peoples and expertise</div>
                            <div><i className="fa-regular fa-square-check me-3 ms-3" style={{ color: "#FFD43B;" }}></i>Seeing your work move forward</div>
                        </div>

                        <div className='mt-2 d-flex flex-column justify-content-evenly align-items-start'>
                            <Form.Control size="sm" type="text" placeholder="First Name " />
                            <br />
                            <Form.Control size="sm" type="text" placeholder="Last Name" />
                            <br />
                            <Form.Control size="sm" type="text" placeholder="Email Address" />
                        </div>
                        <span className='text-white m-2 p-2 bg-dark rounded-pill mt-3'>
                            <i class="fa-solid fa-download me-3"></i>DOWNLOAD THE GUIDE</span>
                    </Col>
                    <Col md={6} className='p-5 d-flex justify-content-center align-items-center'>
                        <img
                            src="src/assets/images/book.png"
                            width="100%"
                            className="d-inline-block  p-5"
                            alt="employee-image"

                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FreeGuide