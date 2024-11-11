import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';


function PricePlan() {
    return (
        <section className='priceplan' id='priceplan'>
            <Container>
                <Row className='pt-5'>
                    <h3 className='fw-bold mb-4 text-center'>Start with a free trial. Change your plan anytime.</h3>
                    <Col md={6} className='d-flex justify-content-end'>
                        <Card style={{ width: '20rem' }} className='card'>
                            <Card.Body>
                                <Card.Title className='fw-bold display-6 text-center'>MoMo</Card.Title>
                                <Card.Text className='display-6 text-center'>
                                    $ 49 / mo.
                                </Card.Text>
                                <h6 className='text-center'>Get the motivation and accountability </h6>
                                <h6 className='text-center'>you need to get real work done.</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='d-flex justify-content-start'>
                        <Card style={{ width: '20rem' }} className='card'>
                            <Card.Body>
                                <Card.Title className='fw-bold display-6 text-center'>MoMo Pro</Card.Title>
                                <Card.Text className='display-6 text-center'>
                                    $ 399 / mo.
                                </Card.Text>
                                <h6 className='text-center'>Take it to the next level withyour own </h6>
                                <h6 className='text-center'>personal productivity coach.</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} className='text-center mt-4'>
                        <Button className='rounded-pill bg-dark text-white'>View Plan Details</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PricePlan