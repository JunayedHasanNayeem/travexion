import React, { useEffect, useRef, useState } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const url = `https://pacific-badlands-73752.herokuapp.com/destinations/${id}`
    const [destination, setDestination] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])

    const fullNameRef = useRef()
    const dateRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    
    //Send data to the server
    const handleSubmit = e =>{
        const newOrder = {
            destination: destination.name,
            destinationId : id,
            fullname: fullNameRef.current.value,
            email: user.email,
            date: dateRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            status: "Pending"
        }

        fetch('https://pacific-badlands-73752.herokuapp.com/orders', {
            method: "POST",
            headers:{
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newOrder)

        })
        e.preventDefault()
        document.placeOrderForm.reset()
        alert("Your order has been placed successfully!")
    }

    return (
        <Container className="my-5">
            <h1 className="text-center">Place Order</h1>
            <h4 className="text-center mt-5">Destination: {destination.name}</h4>
            <h4 className="text-center mb-3">Price: ${destination.price}</h4>
            <Form style={{ maxWidth: "600px", margin: "0 auto" }} onSubmit={handleSubmit} name="placeOrderForm">
                <FloatingLabel label="Your Full Name" className="mb-2">
                    <Form.Control type="text" placeholder="Your Full Name" ref={fullNameRef} />
                </FloatingLabel>
                <FloatingLabel label="Date" className="mb-2">
                    <Form.Control type="date" placeholder="Date" ref={dateRef} />
                </FloatingLabel>
                <FloatingLabel label="Phone Number" className="mb-2">
                    <Form.Control type="tel" placeholder="Phone Number" ref={phoneRef} />
                </FloatingLabel>
                <FloatingLabel label="Your Address" className="mb-2">
                    <Form.Control type="tel" placeholder="Your Address" ref={addressRef} />
                </FloatingLabel>
            
                <Form.Control size="lg" type="submit" className="bg-primary mt-3 text-light" placeholder="Large text" value="Place Order"/>
            </Form>
        </Container>
    );
};

export default PlaceOrder;