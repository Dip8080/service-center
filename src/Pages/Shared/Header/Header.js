import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handlesignout = () => {
        signOut(auth);
    }
    return (
        <header className='sticky-top shadow'>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={'/'} >IronSkull fitness</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            {
                                user ?
                                    <button className='bg-dark text-success border-0' onClick={handlesignout}>signout</button>
                                    :
                                    <Nav.Link as={Link} to='/login'>
                                        Login
                                    </Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </header>
    );
};

export default Header;