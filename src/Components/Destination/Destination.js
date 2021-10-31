import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Destination = (props) => {
    const { _id, name, price, description, img } = props.destination;
    const destinationURL = `/destinations/${_id}`
    const bookingURL = `/place-order/${_id}`
    return (
        // Single service item in card
        <Col lg={4} sm={12} md={6}>
            <Card>
                <div className="text-center">
                    <Card.Img variant="top" src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body className="text-center">
                    <Card.Title><h4>{name}</h4></Card.Title>
                    <h5 className="text-secondary">Price: ${price}</h5>
                    <Card.Text>
                        {description.slice(0, 150)}...
                    </Card.Text>
                        <Link to={destinationURL}><Button variant="primary" className="px-3 w-100">View More</Button></Link>
                        <Link to={bookingURL}><Button variant="outline-dark" className="px-3 w-100 mt-2">Book now</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Destination;