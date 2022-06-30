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
                <form><input name="first" className='edit-patients-name' /*onClick={postVal}*/></input>
                <input name="last" className='edit-patients-surname'></input>
                <input name="age" className='edit-patients-age'></input>
                <input name="gender" className='edit-patients-gender'></input>
                <input name="email" className='edit-patients-email'></input>
                <input name="contact" className='edit-patients-phone-number'></input>
                <input name="patientId" className='edit-patients-id'></input>
                <input name="medAid" className='edit-patients-medical-aid-number'></input>
                <div className='update-btn' /*onClick={addNewPost}*/></div>
                </form>
        </>
    );
}

export default EditPatient