import React from 'react';
import axios from 'axios';

const SignUp = () => {
   
    return(
        <>
        <div className='main-container'>
        <div className='sign-container'>
            <div className='left'>
                <p className='login-text'>Log in</p>
                <p className='welcome-login-text'>Welcome back! Please enter your details</p>
                <p className='email-text'>Email</p>
                <form><input className='email-input' type={'text'} placeholder={"Enter Your Email"}></input></form>
                <p className='password-text'>Password</p>
                <form><input className='password-input' type={'text'} placeholder={"Enter Your Password"}></input></form>
                <div className='btn-container'>
                    <p className='signIn-btn'>Sign in</p>
                </div>
                <p className='no-account-text'>Don't have an account?</p><p className='signUp-text'>Sign up</p>
            </div>
            <div className='right'></div>
        </div>
        </div>        
        </>
    );
}

export default SignUp