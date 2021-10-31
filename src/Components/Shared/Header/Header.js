import React from 'react';
import { Button, Container, Image, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../../Images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <header >
            <Navbar collapseOnSelect expand="lg" bg="light" className="med-header" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/"><Image className="med-logo" src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {
                            user?.email ?
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/add-destination">Add Destination</Nav.Link>
                                    <Nav.Link as={Link} to="/manage-orders">Manage Orders</Nav.Link>
                                </Nav>
                                :
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
                                    
                                </Nav>
                        }
                        <Nav>
                            {
                                user?.email ?
                                    <div className="d-flex align-items-center">
                                        <Nav.Link as={Link} to="/my-orders">My Orders</Nav.Link>
                                        <Nav.Link onClick={logOut}><Button variant="outline-dark" className="px-3 ms-2">Sign Out</Button></Nav.Link>
                                    </div>
                                    :
                                    <div className="d-flex align-items-center">
                                        <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
                                        <Nav.Link as={Link} to="/sign-in"><Button variant="primary" className="px-3 ms-2">Sign In</Button></Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
};

export default Header;