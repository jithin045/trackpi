import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap'


function Header() {
    return (
        <div>
            <Navbar expand="lg">
                <Container fluid>

                    <Navbar.Brand href="#home">
                        <Row md={12}>
                            <Col className='d-flex align-items-center'>
                                <img
                                    src="https://i.pinimg.com/280x280_RS/76/62/74/7662740955928e1dcc96bc4e5cd37c4d.jpg"
                                    width="80px"
                                    height="80px"
                                    className="d-inline-block align-top rounded-circle"
                                    alt="Logo"

                                />
                            </Col>

                            <Col >
                                <h1 className='text-dark' style={{ fontWeight: "bold" }}>MOTIVATED</h1>
                                <h2 className='nav-subhead text-dark' style={{ fontStyle: "italic" }}>mornings</h2>
                            </Col>

                        </Row>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex justify-content-evenly me-5">
                            <Nav.Link className='nav-item text-dark' href="#hero">Who is It For</Nav.Link>
                            <Nav.Link className='nav-item text-dark' href="#about">About</Nav.Link>
                            <Nav.Link className='nav-item text-dark' href="#faq">FAQ</Nav.Link>
                            <Nav.Link className='nav-item text-dark' href="#blog">Blog</Nav.Link>
                            <Nav.Link className='nav-item text-dark' href="#user"><i className="fa-solid fa-user"></i></Nav.Link>
                            <Nav.Link className='nav-item text-white p-2 bg-dark rounded-pill' href=" #freetrial">Start Your Free Trial</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header