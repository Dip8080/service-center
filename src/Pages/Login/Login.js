import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailref = useRef('');
    const passref = useRef ('');
    const nevigate = useNavigate();
    
    const Handlesubmit = event =>{
        event.preventDefault();
        const email = emailref.current.value;
        const pass = passref.current.value;
        console.log(email,pass)

    }

    const Handlereg =()=>{
        nevigate('/register')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-warning text-center mt-3'>please log in</h1>
            <Form onSubmit={Handlesubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailref} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passref} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" required/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p>new here ? <span className='text-danger p-auto' onClick={Handlereg}>please register</span> </p>
        </div>
    );
};

export default Login;