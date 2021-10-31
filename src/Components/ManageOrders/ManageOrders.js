import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [clicked, setClicked] = useState('')
    useEffect(() => {
        fetch('https://pacific-badlands-73752.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
                setIsLoading(false)
            })
    }, [clicked])

    //Delete Order
    const handleDelete = (id) => {
        const proceedDelete = window.confirm('Are you sure you want to delete this order?');
        if (proceedDelete) {
            fetch(`https://pacific-badlands-73752.herokuapp.com/orders/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingOrders = allOrders.filter(order => order._id !== id)
                        setAllOrders(remainingOrders)
                    }
                })
        }

    }

    //Update Order Status
    const handleOrderStatus = (id) => {
        fetch(`https://pacific-badlands-73752.herokuapp.com/orders/update/${id}`, {
            method: 'GET'
        })
            .then(res => setClicked(id))
    }
    //Conditional Spinner
    if (isLoading) {
        return (
            <Container className="d-flex justify-content-center mt-5">
                <Spinner animation="grow" variant="dark" />
            </Container>
        )

    }

    return (
        <Container>
            <h1 className="my-5">Manage All Orders</h1>
            {
                allOrders.map(order =>
                    <Row className="bg-light p-3 my-2 mx-1 rounded" key={order._id}>
                        <Col className="d-flex flex-column" md={5}>
                            <h5>{order.destination}</h5>
                            <span>{order.email}</span>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-between" md={3}>
                            <h6>Status: {order.status}</h6>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end" md={4}>
                            <div>
                                {
                                    (order.status !== 'Approved') ? <Button variant="success" className="me-2" onClick={() => handleOrderStatus(order._id)}>Approve</Button> :
                                        <Button variant="secondary" disabled className="me-2">Approved</Button>
                                }
                                <Button variant="danger" onClick={() => handleDelete(order._id)}>Delete</Button>
                            </div>
                        </Col>

                    </Row>
                )
            }
        </Container>
    );
};

export default ManageOrders;