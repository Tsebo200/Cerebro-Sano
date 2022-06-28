import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MiniModalLeft from "./MiniModalLeft";
import MiniModalRight from "./MiniModalRight";
import Okay from '../Assets/okay.svg';
import NotOkay from '../Assets/notOkay.svg';

const Register = () => {

//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}));
//     }

//     const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);

//   };

const navigate = useNavigate();

const [inputs, setInputs] = useState({
    first: '',
    surname: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    contact: '',
    rank: '',
});

const [firstError, setFirstError] = useState();
const [lastError, setLastError] = useState();
const [emailError, setEmailError] = useState();
const [ageError, setAgeError] = useState();
const [genderError, setGenderError] = useState();
const [rankError, setRankError] = useState();
const [contactError, setContactError] = useState();
const [passwordError, setPasswordError] = useState();
const [usernameError, setUsernameError] = useState();
const [passwordConError, setPasswordConError] = useState();

const [emailAvail, setEmailAvail] = useState();


const [emailIcon, setEmailIcon] = useState();


const firstVal = (e) => {
    const value = e.target.value;
    setInputs({...inputs, first: value});
    if(inputs.first !== ''){setFirstError();}
}

  const lastVal = (e) => {
    const value = e.target.value;
    setInputs({...inputs, surname: value});
    if(inputs.surname !== ''){setLastError();}
}

const ageVal = (e) => {
    const value = e.target.value;
    setInputs({...inputs, age: value});
    if(inputs.age !== ''){setAgeError();}
}

const genderVal = (e) => {
    const value = e.target.value;
    setInputs({...inputs, gender: value});
    if(inputs.gender !== ''){setGenderError();}
}

const rankVal = (e) => {
    const value = e.target.value;
    setInputs({...inputs, rank: value});
    if(inputs.rank !== ''){setRankError();}
}

// Validation
const emailVal = (e) => {
    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = e.target.value;
    setInputs({...inputs, email: value});
    if(inputs.email !== ''){setEmailError();}
    if(value.match(mailRegex)){
        setEmailError(<MiniModalLeft message="Email is not a valid format..." />);
    }
}

// Authentication
const authenticateEmail = () => {
    axios.post('http://localhost:8888/api/authenticateEmail.php', inputs)
    .then(function(res){
        console.log(res);
        if(res.data === "Available"){
            setEmailIcon(Okay);
            setEmailAvail();
        } else if(res.data === "Not Available"){
            setEmailIcon(NotOkay);
            setEmailAvail(<MiniModalLeft message="Email is not Available" />);
        } else if(res.data === ''){
            setEmailIcon();
            setEmailAvail();
            setEmailError();
        }
    });
}

const contactVal = (e) => {
    const contactRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const value = e.target.value;
    setInputs({...inputs, contact: value});
    if(inputs.contact !== ''){setContactError();}
    if(value.match(contactRegex)){
        setContactError(<MiniModalRight message="This is not a phone number..." />);
    }
}


const passwordVal = (e) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
    const value = e.target.value;
    setInputs({...inputs, password: value});
    if(inputs.password !== ''){setPasswordError();}
    if(value.match(passwordRegex)){
        setPasswordError(<MiniModalLeft message="Password must include X, Y and Z..." />);
    }
}

const passwordConVal = (e) => {
    const value = e.target.value;
    setInputs({...inputs, passwordCon: value});
    if(inputs.password === value){
        setPasswordConError();
    } else{
        setPasswordConError(<MiniModalLeft message="Your password does not match"/>);
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
    if(inputs.first === ''){
        setFirstError(<MiniModalLeft message="What's Your Name"/>);
    } else {
        setFirstError();
    }

    if(inputs.surname === ''){
        setLastError(<MiniModalRight message="What's Your Surname"/>);
    } else {
        setLastError();
    }

    if(inputs.age === ''){
        setLastError(<MiniModalRight message="How Old Are You?"/>);
    } else {
        setLastError();
    }

    if(inputs.gender=== ''){
        setLastError(<MiniModalRight message="What's Is Your Gender"/>);
    } else {
        setLastError();
    }

    if(inputs.rank === ''){
        setLastError(<MiniModalRight message="What's Your Rank"/>);
    } else {
        setLastError();
    }

    if(inputs.email === ''){
        setEmailError(<MiniModalLeft message="Please provide your email"/>);
    } else {
        setEmailError();
    }

    if(inputs.contact === ''){
        setContactError(<MiniModalRight message="Please provide your contact details"/>);
    } else {
        setContactError();
    }

    if(inputs.password === ''){
        setPasswordError(<MiniModalLeft message="Please provide your password"/>);
    } else {
        setPasswordError();
    }

    if(inputs.passwordCon === ''){
        setPasswordConError(<MiniModalLeft message="Please confirm your password"/>);
    } else {
        setPasswordConError();
    }

    let result = Object.values(inputs).some(o => o === '');
    if(result){
        console.log("There is an Error")
    } else {
        axios.post('http://localhost:8888/api/addUser.php', inputs)
        .then(function(res){
            console.log(res);

            if(res.data === "Error"){
                navigate("/register");
            } else if(res.status === 200){
                navigate("/");

            }
        });
    }
}

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

                    <form>
                    {firstError}
                    <input className='first-name-input' name="first" type={'text'} placeholder={"Enter Your First Name"} onChange={firstVal}></input>
                    {lastError}
                    <p className="last-name-text">Last Name</p>
                    <input className='last-name-input' name="surname" type={'text'} placeholder={"Enter Your Last Name"} onChange={lastVal}></input>
                    {ageError}
                    <p className="age-text">Age</p>
                    <input className='age-input' name="age" type={'number'} placeholder={"Enter Your Age"} onChange={ageVal}></input>
                    {genderError}    
                    <p className="gender-text">Gender</p>
                    <input className='gender-input' name="gender" type={'text'} placeholder={"Select Your Gender"} onChange={genderVal}></input>
                    {contactError}
                    <p className="phone-number-text">Phone Number</p>
                    <input className='phone-number-input' name="phonenumber" type={'contact'} placeholder={"Enter Your Phone Number"} onChange={contactVal}></input>
                    {rankError}
                    <p className="rank-text">Rank</p>
                    <input className='rank-input' name="rank" type={'text'} placeholder={"Select Your Rank"} onChange={rankVal}></input>
                    {emailError}
                    <p className="email-text-reg">Email</p>
                    <input className='email-input-reg' name="email" type={'email'} placeholder={"Enter Your Email"} onBlur={authenticateEmail} onChange={emailVal}></input>
                    {passwordError}
                    <p className="password-text-reg">Password</p>
                    <input className='password-input-reg' name="password" type={'password'} placeholder={"Enter Your Password"} onChange={passwordVal}></input>
                    <p className="password-text-reg">ConPassword</p>
                    <input className='password-input-reg' name="Conpass" type={'password'} placeholder={"Confirm Your Password"} onChange={passwordConVal}></input> 
                    </form>

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