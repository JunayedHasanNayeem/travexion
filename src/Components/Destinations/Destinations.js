import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch('https://pacific-badlands-73752.herokuapp.com/destinations')
        .then(res => res.json())
        .then(data => setDestinations(data));

    }, [])
    if(!destinations.length){
        return(
            <Container className="d-flex justify-content-center">
                <Spinner animation="grow" variant="dark" className="mt-5" />
            </Container>
        )
    }
    return (
        <Container>
            <Row className="g-2">
                 {
                     destinations.map(destination => <Destination key={destination._id} destination={destination}> </Destination> )
                 }
            </Row>
        </Container>
    );
};

export default Destinations;