import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const locate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    locate("/register");
    return(
        <>
        <div className='main-container'>
        <div className='sign-container'>
            <div className='left'>
                <div className='sign-logo'></div>
                <p className='cerebro-sano'>Cerebro Sano</p>
                <p className='login-text'>Log in</p>
                <p className='welcome-login-text'>Welcome back! Please enter your details.</p>
                <p className='email-text'>Email</p>
                <form><input className='email-input' type={'email'} placeholder={"Enter Your Email"}></input></form>
                <p className='password-text'>Password</p>
                <form><input className='password-input' type={'password'} placeholder={"Enter Your Password"}></input></form>
                <form><input className='check-box' type={'checkbox'}></input><label>Remember for 30 days</label></form>
                <p className='forgot-password-text'>forgot password?</p>
                <div className='btn-container'>
                    <p className='signIn-btn'>Sign in</p>
                </div>
                <div className='SignIn-Google-btn'><p className='Sign-Google-text'>Sign In with Google</p></div>
                <p className='no-account-text'>Don't have an account?</p><p className='signin-text' onClick={locate}>Sign up</p>
            </div>
            <div className='right'></div>
        </div>
        </div>        
        </>
    );
}

export default SignIn