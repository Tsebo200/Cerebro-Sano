import React from "react";
import { useState } from "react";

const EditPatient = () => {

const [inputs, setInputs] = useState({
    first: '',
    last: '',
    age: '',
    gender: '',
    email: '',
    contact: '',
    patientId: '',
    medAid: '',

});

    

    return(
        <>
         <div className='edit-patients-profile'></div>
                <form><input name="first" placeholder="First Name" className='edit-patients-name' /*onClick={postVal}*/></input>
                <input name="last" placeholder="Last Name" className='edit-patients-surname'></input>
                <input name="age" placeholder="Age" className='edit-patients-age'></input>
                <input name="gender" placeholder="Gender" className='edit-patients-gender'></input>
                <input name="email" placeholder="Email" className='edit-patients-email'></input>
                <input name="contact" placeholder="Contact" className='edit-patients-phone-number'></input>
                <input name="patientId" placeholder="PatientId" className='edit-patients-id'></input>
                <input name="medAid" placeholder="MedAid" className='edit-patients-medical-aid-number'></input>
                <div className='update-btn' /*onClick={addNewPost}*/><p className="update-text">Update</p></div>
                </form>
        </>
    );
}

export default EditPatient