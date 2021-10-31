import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img404 from '../../Images/404.jpg'

const NotFound = () => {
    return (
        <Container className="py-5 text-center">
            <h1>Page not found!</h1>
            <Link className="d-block"to="/"><Button variant="primary" className="mt-3">Back to Home</Button></Link>
            <img src={img404} alt="Page Not Found!" style={{maxWidth : "500px"}} />
        </Container>
    );
};

export default NotFound;