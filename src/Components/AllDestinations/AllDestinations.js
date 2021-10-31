import React from 'react';
import { Container } from 'react-bootstrap';
import Destinations from '../Destinations/Destinations';

const AllDestinations = () => {
    return (
        <Container className="my-5">
            <h1 className="my-5 text-center">All Destinations</h1>
            <Destinations></Destinations>
        </Container>
    );
};

export default AllDestinations;