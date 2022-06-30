import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const locate = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const emailVal = (e) => {
    const value = e.target.value;
    setInputs({...inputs, email: value});
    }

    const passwordVal = (e) => {
        const value  = e.target.value;
        setInputs({...inputs, password: value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    console.log(inputs);

    axios.post('http://localhost:8888/mainProject/userLogin.php', inputs)
    .then(function(res){
    console.log(res);

    if(res.data === true){
        sessionStorage.setItem('activeUser', inputs.email);
        locate("/Dashboard");
    } else {
        console.log("Please Ensure your information is correct");
        //Log an Error or some type of message ("Email and Password not valid")
   }
    });
}

    // locate("/register");
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
                <form><input className='email-input' type={'email'} placeholder={"Enter Your Email"}onChange={emailVal}></input></form>
                <p className='password-text'>Password</p>
                <form><input className='password-input' type={'password'} placeholder={"Enter Your Password"} onChange={passwordVal}></input></form>
                <form><input className='check-box' type={'checkbox'}></input><label>Remember for 30 days</label></form>
                <p className='forgot-password-text'>forgot password?</p>
                <div className='btn-container' onClick={handleSubmit}>
                    <p className='signIn-btn'>Sign in</p>
                </div>
                <div className='SignIn-Google-btn'><p className='Sign-Google-text'>Sign In with Google</p></div>
                <p className='no-account-text'>Don't have an account?</p><a href='register'><p className='signup-text'>Sign up</p></a>
            </div>
            <div className='right'></div>
        </div>
        </div>        
        </>
    )
}

export default SignIn