import React, { useState } from 'react';
import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useHistory } from 'react-router-dom';

const SignUp = () => {
    const { signInUsingGoogle, signUpUsingEmail, errorMessage } = useAuth()

    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const [fullName, setFullName] = useState({})
    //User redirect to their specific URL
    const history = useHistory();
    const location = useLocation()
    const redirect_uri = location.state?.from || '/' ;
    //Google sign in
    const handleSignUpUsingGoogle = () => {
        signInUsingGoogle(redirect_uri, history)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    
    //Email Sign up
    const handleSignUpUsingEmail = () => {
        signUpUsingEmail(email, password, fullName, redirect_uri, history)
    }

    const handleFullName = (event) => {
        setFullName(event.target.value)
    }
    return (
        <div>
            <div>
                <Card body className="mx-auto my-5 p-3 shadow-sm" style={{ maxWidth: "400px" }}>
                    <h2 className="text-center mb-4">Create Account</h2>
                    <p className="text-danger">{errorMessage}</p>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                        <FormControl className="py-2" id="inlineFormInputGroup" type="text" onBlur={handleFullName} placeholder="Full Name" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                        <FormControl className="py-2" id="inlineFormInputGroup" type="email" onBlur={handleEmail} placeholder="Email address" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                        <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                        <FormControl className="py-2" id="inlineFormInputGroup" type="password" onBlur={handlePassword} placeholder="Password" />
                    </InputGroup>
                    <Button variant="primary" onClick={handleSignUpUsingEmail} className="w-100 py-2 my-3">Sign In</Button>
                    <span className="border-bottom"></span>
                    <Button variant="dark" onClick={handleSignUpUsingGoogle} className="w-100 pt-2">Continue with Google</Button>
                    <p className="mt-3">Already have an account? <Link to="/sign-in">Sign In</Link> </p>
                </Card>
            </div>
        </div>
    );
};

export default SignUp;