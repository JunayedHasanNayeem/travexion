import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Container, Spinner } from 'react-bootstrap';

const DestinationDetails = () => {
    const {id} = useParams()
    const [destinationDetails, setDestinationDetails] = useState([]);
    const url = `https://pacific-badlands-73752.herokuapp.com/destinations/${id}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setDestinationDetails(data));
    }, [])

    const orderURL = `/place-order/${id}`
    return (
        <div>
            {/* Single destination details once user cliks */}
            <Container className="my-5">
                <Col style={{ maxWidth: "500px" }} className="m-auto">
                    <Card className="text-center">
                        <Card.Body className="text-center">
                            <img src={destinationDetails.img} className="mb-3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <Card.Title><h4>{destinationDetails.name}</h4></Card.Title>
                            <Card.Text>
                                {destinationDetails.description}
                            </Card.Text>
                            <h5 className="my-3">Price: ${destinationDetails.price}</h5>
                            <Link to={orderURL}><Button variant="outline-dark w-100 py-2">Book Now</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default DestinationDetails;