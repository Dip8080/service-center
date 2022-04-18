
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


import './Register.css'
import auth from '../../firebase.init';




const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const nevigate = useNavigate();
    const nameref = useRef('');
    const emailref = useRef('');
    const passref = useRef('')
    const handlenavigate = () => {
        nevigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault()
        const name = nameref.current.value;
        const email = emailref.current.value;
        const pass = passref.current.value;
        createUserWithEmailAndPassword(email, pass)

    }
    if(user){
        nevigate('/')
    }

    return (
        <div className='form w-50 mx-auto'>
            <h1 className='text-center my-5 '>register page</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>name</Form.Label>
                    <Form.Control ref={nameref} type="name" placeholder="Enter name" required />
                    <Form.Text className="text-muted">
                        type your name
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailref} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passref} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Aready have an account ? <span onClick={handlenavigate} className='text-danger'> Please login </span></p>
        </div>
    );
};

export default Register; <h1>register page</h1>