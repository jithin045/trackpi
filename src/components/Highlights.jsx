import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Highlights() {
    return (
        <section className='' id='' >
            <Container className='mb-5'>

                <Row style={{ justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px" }}>
                    <Col
                        md={4}
                        style={{

                        }}
                    >
                        <Card className='card' style={{ width: '22rem', borderRadius: '10px', border: "none" }}>
                            <Card.Img className='card-img' variant="top" src="src/assets/images/mngcalls.png" />
                            <Card.Body className='card-body text-center'>
                                <span className='fw-bold text-dark'>Morning Kick-Off Calls</span>
                                <div style={{ textJustify: "auto" }} className='text-center'>
                                    Build healthy habbits. Jumpstart each <br /> day with a 10min group video call with <br />an inspiring thought about creating. <br />Stay accountable and motivated. <br />Offered Mon-Fri at 5am and 7am.
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        md={4}
                        style={{

                        }}
                    >
                        <Card className='card' style={{ width: '22rem', borderRadius: '10px', border: "none" }}>
                            <Card.Img className='card-img' variant="top" src="src/assets/images/coworking.png" />
                            <Card.Body className='card-body text-center'>
                                <span className='fw-bold text-dark'>Virtual Coworking</span>
                                <div style={{ textJustify: "auto" }} className='text-center'>
                                    Following Morning Kick-Off Calls, <br /> virtually cowork with fellow creators <br /> (Momos). Feel the momentum of a 2- <br />hour silent group coworking sesh.<br />Celebrate benchmarks with your peers.
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        md={4}
                        style={{

                        }}
                    >
                        <Card className='card' style={{ width: '22rem', borderRadius: '10px', border: "none" }}>
                            <Card.Img className='card-img' variant="top" src="src/assets/images/slack.png" />
                            <Card.Body className='card-body text-center'>
                                <span className='fw-bold text-dark'>Private Slack Group</span>
                                <div style={{ textJustify: "auto" }} className='text-center'>
                                    Stay connected with what you fellow <br /> Momos are doing, creating, and accomplishing. a space for relationship <br />building, inspiration, feedback, and <br />celebrating momentum.
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px" }}>
                    <Col
                        md={4}
                        style={{

                        }}
                    >
                        <Card className='card' style={{ width: '22rem', borderRadius: '10px', border: "none" }}>
                            <Card.Img className='card-img' variant="top" src="src/assets/images/coaching.png" />
                            <Card.Body className='card-body text-center'>
                                <span className='fw-bold text-dark'>Productivity Coaching Sessions*</span>
                                <div style={{ textJustify: "auto" }} className='text-center'>
                                    A weekly 30-minute private meeting to<br /> discuss goals, setbacks, brakthroughts, <br /> strategies, and create ways to be sure <br />the momentum keeps going.
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        md={4}
                        style={{

                        }}
                    >
                        <Card className='card' style={{ width: '22rem', borderRadius: '10px', border: "none" }}>
                            <Card.Img className='card-img' variant="top" src="src/assets/images/actionplan.png" />
                            <Card.Body className='card-body text-center'>
                                <span className='fw-bold text-dark'>Private Slack Group</span>
                                <div style={{ textJustify: "auto" }} className='text-center'>
                                    A personal coaching is more than <br /> rah-rah. You will go away with specific<br />action plans to keep you moving in the <br />right direction. Forward.
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <div className='text-center'>* Available exclusively with the Pro plan</div>
            </Container>
        </section>
    )
}

export default Highlights