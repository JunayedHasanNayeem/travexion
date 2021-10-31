import React, { useRef } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';

const AddDestination = () => {

    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();

    const handleSubmit = e =>{
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const newDestination  = {name, price, img, description}

        fetch('https://pacific-badlands-73752.herokuapp.com/destinations', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDestination)
        })
        
        e.preventDefault()
        document.addDestination.reset()
        alert("Destination added successfully!")
    }

    return (
        <div>
            <Container>
                <h1 className="my-5 text-center">Add a new Destination</h1>
                <Form style={{maxWidth: "600px", margin: "0 auto"}} onSubmit={handleSubmit} name="addDestination">
                    <FloatingLabel label="Destination Name" className="mb-2">
                        <Form.Control type="text" placeholder="Destination Name" ref={nameRef} />
                    </FloatingLabel>
                    <FloatingLabel label="Price" className="mb-2">
                        <Form.Control type="number" placeholder="Price" ref={priceRef}/>
                    </FloatingLabel>
                    <FloatingLabel label="Image URL" className="mb-2">
                        <Form.Control type="text" placeholder="Image URL" ref={imgRef}/>
                    </FloatingLabel>
                    <FloatingLabel label="Description">
                        <Form.Control as="textarea" placeholder="Destination Description" ref={descriptionRef} style={{ height: '100px' }} />
                    </FloatingLabel>
                    <Form.Control size="lg" type="submit" className="bg-primary mt-3 text-light" placeholder="Large text" />
                </Form>

            </Container>

        </div>
    );
};

export default AddDestination;