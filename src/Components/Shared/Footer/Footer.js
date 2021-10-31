import React from 'react';
import { Container} from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="bg-light d-flex align-items-center justify-content-center p-2 mt-5">
            <div>
                <p className="pt-3">Copyright 2021 Travexion | All rights reserved</p>
            </div>
        </Container>
    );
};

export default Footer;