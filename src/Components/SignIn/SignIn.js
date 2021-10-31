import React, { useState } from 'react';
import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const SignIn = () => {
    const { signInUsingGoogle, signInUsingEmail, errorMessage } = useAuth()
    //User redirect to their specific URL
    const history = useHistory();
    const location = useLocation()
    const redirect_uri = location.state?.from || '/' ;
    //Google sign in
    const handleSignInUsingGoogle = () => {
        signInUsingGoogle(redirect_uri, history)
    }

    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    //Email Sign In
    const handleSignInUsingEmail = () => {
        signInUsingEmail(email, password, redirect_uri, history)
    }

    return (
        <div>
            <Card body className="mx-auto my-5 p-3 shadow-sm" style={{ maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Sign In</h2>
                <p className="text-danger">{errorMessage}</p>
                <InputGroup className="mb-2">
                    <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                    <FormControl className="py-2" id="inlineFormInputGroup" type="email" onBlur={handleEmail} placeholder="Email address" />
                </InputGroup>
                <InputGroup className="mb-2">
                    <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                    <FormControl className="py-2" id="inlineFormInputGroup" type="password" onBlur={handlePassword} placeholder="Password" />
                </InputGroup>
                <Button variant="primary" onClick={handleSignInUsingEmail} className="w-100 py-2 my-3">Sign In</Button> 
                <span className="border-bottom"></span>
                <Button variant="dark" onClick={handleSignInUsingGoogle} className="w-100 pt-2">Continue with Google</Button>
                <p className="mt-3">New here? <Link to="/sign-up">Sign Up</Link> </p>
            </Card>
        </div>
    );
};

export default SignIn;