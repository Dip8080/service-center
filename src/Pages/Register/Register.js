import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const nevigate = useNavigate();
    const handlenavigate =()=>{
        nevigate('/login')
    }
   const handleRegister = event =>{
       event.preventDefault()
   }
    return (
        <div className='form w-50 mx-auto'>
            <h1 className='text-center my-5 '>register page</h1>
            <form action="" className='' onClick={handleRegister}>
                <input type='text' name='name' placeholder='enter your name'></input>
                <input type='email' name='email' placeholder='enter your email addrerss'></input>
                <input type='text' name='password' placeholder='enter a password '></input>
                <input type='submit' value='Register'/>

            </form>
            <p>Aready have an account ? <span onClick={handlenavigate} className='text-danger'> Please login </span></p>
        </div>
    );
};

export default Register;<h1>register page</h1>