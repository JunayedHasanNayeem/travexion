import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const { user, isLoading } = useAuth()
    const email = user.email;
    const [ordersLoading, setOrdersLoading] = useState(true);

    //Fetch Data From the server
    const [myOrders, setMyOrders] = useState([]);
    let url
    url = `https://pacific-badlands-73752.herokuapp.com/orders/${email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
                setOrdersLoading(false)
            })
    }, [email])

    //Delete user order
    const handleDelete = (id) => {
        const proceedDelete = window.confirm('Are you sure you want to delete this order?');
        if (proceedDelete) {
            fetch(`https://pacific-badlands-73752.herokuapp.com/orders/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = myOrders.filter(order => order._id !== id)
                        setMyOrders(remainingOrders)
                    }
                })
        }

    }

    //Conditional Spinner
    if (ordersLoading) {
        return (
            <Container className="d-flex justify-content-center">
                <Spinner animation="grow" variant="dark" className="mt-5" />
            </Container>
        )

    }
    return (
        <div>
            <Container>
                <h1 className="my-5">My Orders</h1>
                {
                    myOrders.map(order =>
                        <Row className="bg-light p-3 my-2 rounded" key={order._id}>
                            <Col className="d-flex align-items-center" md={6}>
                                <h5>{order.destination}</h5>
                            </Col>
                            <Col className="d-flex justify-content-between align-items-center" md={6}>
                                <h6>Status: {order.status}</h6>
                                <Button variant="danger" onClick={() => handleDelete(order._id)}>Delete</Button>
                            </Col>
                        </Row>
                    )
                }
            </Container>
        </div>
    );
};

export default MyOrders;