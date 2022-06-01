import React from "react";
import axios from "axios";

const Register = () => {
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
                    <form><input className='first-name-input' type={'text'} placeholder={"Enter Your First Name"}></input></form>
                    <p className="last-name-text">Last Name</p>
                    <form><input className='last-name-input' type={'text'} placeholder={"Enter Your Last Name"}></input></form>
                    <p className="age-text">Age</p>
                    <form><input className='age-input' type={'number'} placeholder={"Enter Your Age"}></input></form>
                    <p className="gender-text">Gender</p>
                    <form><input className='gender-input' type={'text'} placeholder={"Select Your Gender"}></input></form>
                    <p className="phone-number-text">Phone Number</p>
                    <form><input className='phone-number-input' type={'number'} placeholder={"Enter Your Phone Number"}></input></form>
                    <p className="rank-text">Rank</p>
                    <form><input className='rank-input' type={'text'} placeholder={"Select Your Rank"}></input></form>
                    <p className="email-text-reg">Email</p>
                    <form><input className='email-input-reg' type={'email'} placeholder={"Enter Your Email"}></input></form>
                    <p className="password-text-reg">Password</p>
                    <form><input className='password-input-reg' type={'password'} placeholder={"Enter Your Password"}></input></form>
                    <div className='btn-container'>
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