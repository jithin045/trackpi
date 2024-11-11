import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap'


function Benefits() {
    return (
        <section className='benefits' id='benefits'>
            <Container fluid>
                <Row md={12}>
                    <Col md={6} className='p-5 d-flex justify-content-end align-items-center'>
                        <img
                            src="src/assets/images/busy-employee.png"
                            width="100%"
                            className="d-inline-block"
                            alt="employee-image"

                        />
                    </Col>
                    <Col md={6} className='p-3 d-flex flex-column justify-content-center align-items-start'>
                        <h2 className='fw-bold mb-5'>Tired of not <br /> finishing that script?</h2>
                        <div className='d-flex flex-column justify-content-evenly align-items-start'>
                            <div><i className="fa-regular fa-rectangle-xmark me-3 ms-3" style={{ color: "#FFD43B;" }}></i>Hitting Snooze</div>
                            <div><i className="fa-regular fa-rectangle-xmark me-3 ms-3" style={{ color: "#FFD43B;" }}></i>Endless Procastinating</div>
                            <div><i className="fa-regular fa-rectangle-xmark me-3 ms-3" style={{ color: "#FFD43B;" }}></i>Never Finding the time</div>
                            <div><i className="fa-regular fa-rectangle-xmark me-3 ms-3" style={{ color: "#FFD43B;" }}></i>Missing goals</div>
                        </div>
                        <Button className='btn text-white bg-dark fw-bold p-3 ps-3 pe-3 rounded-pill mt-5'>Start Your Free Trial</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Benefits