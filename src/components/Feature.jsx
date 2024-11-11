import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap'

function Feature() {
    return (
        <section className='feature' id='feature'>
            <Container>
                <Row>
                    <Col md={6} className='d-flex flex-column justify-content-center align-items-start'>
                        <h2 className='fw-bold mb-5'>There's a better way.</h2>
                        <div className='d-flex flex-column justify-content-evenly align-items-start'>
                            <div><i className="fa-regular fa-square-check me-3 ms-3" style={{ color: "#FFD43B;" }}></i>Experiencing your habbit transform</div>
                            <div><i className="fa-regular fa-square-check me-3 ms-3" style={{ color: "#FFD43B;" }}></i>Accessing tools, peoples and expertise</div>
                            <div><i className="fa-regular fa-square-check me-3 ms-3" style={{ color: "#FFD43B;" }}></i>Seeing your work move forward</div>
                        </div>
                        <Button className='btn text-white bg-dark fw-bold p-3 rounded-pill mt-5'>Start Your Free Trial</Button>
                    </Col>
                    <Col md={6} className='mt-5 p-5 d-flex justify-content-center align-items-center'>
                        <div className='fw-bold mb-5'>
                            <h2 className='text-center'>" Get more done </h2>
                            <h2 className='text-center'> before 9am than you </h2>
                            <h2 className='text-center'> used to get done all</h2>
                            <h2 className='text-center'> day.''</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Feature