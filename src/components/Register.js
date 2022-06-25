import React from "react";
import axios from "axios";
import { useState } from "react";

const Register = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

  };

    return(
        <>
        <div className="main-container">
            <div className="sign-container">
                <div className="left-reg"></div>
                <div className="right-reg">
                    <div className="sign-logo-reg"></div>
                    <p className='cerebro-sano-reg'>Cerebro Sano</p>
                    <p className="create-account-text">Create An Account</p>
                    <p className="already-member-text">Already A member?</p><p className="signin-text-reg">Sign in</p>
                    <p className="first-name-text">First Name</p>

                    <form><input className='first-name-input' name="firstname" type={'text'} placeholder={"Enter Your First Name"} onChange={handleChange}></input>
                    <p className="last-name-text">Last Name</p>
                    <input className='last-name-input' name="surname" type={'text'} placeholder={"Enter Your Last Name"} onChange={handleChange}></input>
                    <p className="age-text">Age</p>
                    <input className='age-input' name="age" type={'number'} placeholder={"Enter Your Age"} onChange={handleChange}></input>
                    <p className="gender-text">Gender</p>
                    <input className='gender-input' name="gender" type={'text'} placeholder={"Select Your Gender"} onChange={handleChange}></input>
                    <p className="phone-number-text">Phone Number</p>
                    <input className='phone-number-input' name="phonenumber" type={'number'} placeholder={"Enter Your Phone Number"} onChange={handleChange}></input>
                    <p className="rank-text">Rank</p>
                    <input className='rank-input' name="rank" type={'text'} placeholder={"Select Your Rank"} onChange={handleChange}></input>
                    <p className="email-text-reg">Email</p>
                    <input className='email-input-reg' name="email" type={'email'} placeholder={"Enter Your Email"} onChange={handleChange}></input>
                    <p className="password-text-reg">Password</p>
                    <input className='password-input-reg' name="password" type={'password'} placeholder={"Enter Your Password"} onChange={handleChange}></input></form>

                    <div className='btn-container' onClick={handleSubmit}>
                    <p className='register-btn'>Create Account</p>
                    </div>
                    <div className='continue-Google-btn'><p className='continue-Google-text'>Continue with Google</p></div>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Register