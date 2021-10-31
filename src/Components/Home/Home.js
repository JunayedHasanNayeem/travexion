import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Destinations from '../Destinations/Destinations';
import Testimonials from '../Testimonials/Testimonials';
import travelImg1 from '../../Images/travel-img-1.jpg'
import './Home.css'

const Home = () => {
    return (
        <main>
            {/* Top banner area */}
            <div className="home-top-banner">
                <Container className="py-5">
                    <h1 className="bold-heading text-light text-center">Explore new worlds <br /> with us</h1>
                    <p className="text-light text-center m-auto mt-3" style={{ maxWidth: "500px" }}>Book flights, hotels, trains and rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% off</p>
                    <div className="d-flex justify-content-center mt-5">
                        <Link to="/destinations"><Button variant="light" className="py-2 px-4 me-2">Destinations</Button></Link>
                        <Link to="/sign-up"><Button variant="outline-light" className="py-2 px-4">Sign Up</Button></Link>
                    </div>

                </Container>
            </div>
            {/* Popular Destinations */}
            <Container className="my-5">
                <h1 className="my-5 text-center">Popular Destinations</h1>
                <Destinations></Destinations>
            </Container>

            <Container className="my-5 py-5">
                <Row>
                    <Col md={6} sm={12}>
                        <img src={travelImg1} alt="Travel Image" className="w-100 mb-3" />
                    </Col>
                    <Col md={6} sm={12} className="d-flex align-items-center">
                        <div>
                            <h1>It’s time to plan your next trip.</h1>
                            <p className="mt-3 mb-5">Take in the beauty of it all – wild rivers, scenic bikeways, mountain vistas, abundant farmlands – and show your love for the people who make this place so special. <br/> Whether you’re overnight camping, day hiking, walking or multi-day backpacking, we have hundreds of hikes waiting for you in the great Oregon outdoors. So go ahead, take a look around. Oregon’s trails are ready when you are.</p>
                            <Link to="/destinations"><Button variant="primary" className="py-2 px-4">Book a Trip</Button></Link>

                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Testimonials */}
            <Container className="my-5">
                <h1 className="my-5 text-center">Testimonials</h1>
                <Testimonials></Testimonials>
            </Container>
        </main>
    );
};

export default Home;