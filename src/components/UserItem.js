//Add functions for props
import React from "react";

const UserItem = (props) => {
    return(
        <>
        <p className="name-prop">{props.name}</p>
        <p className="surname-prop">{props.surname}</p>
        <p>{props.age}</p>
        <p>{props.gender}</p>
        <p className="email-prop">{props.email}</p>  
        <p className="contact-prop">{props.contact}</p>
        <p>{props.patientId}</p>
        <p>{props.medAid}</p>
        </>
    );
}

export default UserItem