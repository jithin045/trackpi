import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap'

function Guide() {
    return (
        <section className='guide' id='guide'>
            <Container>
                <Row>
                    <Col md={4} className='p-5 d-flex justify-content-center align-items-center'>
                        <img
                            src="src/assets/images/logo.png"
                            width="200px"
                            className="d-inline-block  p-5"
                            alt="employee-image"

                        />
                    </Col>
                    <Col md={8} className='p-3 d-flex flex-column justify-content-center align-items-start'>
                        <h2 className='fw-bold mb-5'>Actually <br /> Complete that project. </h2>
                        <div className='text-center text-justify'>
                            There are so many books to read, podcasts to listen to, and <br /> courses to take... but none of that matters if you don't do the <br /> work. Motivated Mornings is a service focused on making <br />sure that your best work actually happens.<br />Offered Mon-Fri at 5am and 7am.
                        </div>
                        <Button className='btn text-dark p-3 mt-5 fw-bold bg-white'>Learn More <i className="fa-solid fa-arrow-right"></i></Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Guide