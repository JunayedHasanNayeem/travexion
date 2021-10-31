import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import userImg1 from '../../Images/user-1.jpg'
import userImg2 from '../../Images/user-2.jpg'
import userImg3 from '../../Images/user-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {
    return (
        <Container>
            <Row className="g-3">
                <Col lg={4} sm={12} md={6}>
                    <Card border="light text-center">
                        <Card.Header>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={userImg1} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} className="mt-4" />
                            <Card.Title className="mt-3">Ann Bator</Card.Title>
                            <Card.Text>
                                "Outstading service! The private guides were interesting and knowledgeable. We felt that they were more than just guides."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} sm={12} md={6}>
                    <Card border="light text-center">
                        <Card.Header>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={userImg2} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} className="mt-4" />
                            <Card.Title className="mt-3">Glenn McDaniel</Card.Title>
                            <Card.Text>
                                "Best travel service overall! The private guides were interesting and knowledgeable. We felt that they were more than just guides."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} sm={12} md={6}>
                    <Card border="light text-center">
                        <Card.Header>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={userImg3} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} className="mt-4" />
                            <Card.Title className="mt-3">Raisa Barker</Card.Title>
                            <Card.Text>
                                "I am really ammazed! Very affordable services. The private guides were interesting and knowledgeable. We felt that they were more than just guides."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonials;