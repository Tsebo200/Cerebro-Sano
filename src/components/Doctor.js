import react from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const Doctor = () => {
    
    let navigate = useNavigate();
    
          useEffect(() =>{
            const userSession = sessionStorage.getItem('activeUser');
            console.log(userSession);
            if(userSession === '' || userSession === null){
              navigate('/');
            }
          },[]);
       
    return(
        <>
           
        <div className='main-container'>
            <div className='doctors-detail-container'> 
            {/* <a href="indidoctor" onClick={Doctor}> </a>*/}
             <div className='doctor-profile-img'></div>
                <div className='doctor-name-box'></div>
                <div className='doctor-surname-box'></div>
                <div className='doctor-email-box'></div>
                <div className='doctor-phoneNum-box'></div> 
                <div className='delete-doctor-btn'></div>
            </div>

            <div className='doctors-detail-container-two'>
            <div className='doctor-profile-img'></div>
                <div className='doctor-name-box'></div>
                <div className='doctor-surname-box'></div>
                <div className='doctor-email-box'></div>
                <div className='doctor-phoneNum-box'></div>
                <div className='delete-doctor-btn'></div>
            </div>

            <div className='doctors-detail-container-three'>
            <div className='doctor-profile-img'></div>
                <div className='doctor-name-box'></div>
                <div className='doctor-surname-box'></div>
                <div className='doctor-email-box'></div>
                <div className='doctor-phoneNum-box'></div>
                <div className='delete-doctor-btn'></div>
            </div>

            <div className='doctors-detail-container-four'>
            <div className='doctor-profile-img'></div>
                <div className='doctor-name-box'></div>
                <div className='doctor-surname-box'></div>
                <div className='doctor-email-box'></div>
                <div className='doctor-phoneNum-box'></div>
                <div className='delete-doctor-btn'></div>
            </div>

            <div className='doctors-detail-container-five'>
            <div className='doctor-profile-img'></div>
                <div className='doctor-name-box'></div>
                <div className='doctor-surname-box'></div>
                <div className='doctor-email-box'></div>
                <div className='doctor-phoneNum-box'></div>
                <div className='delete-doctor-btn'></div>
            </div>


        </div>
        </>
    )
}
export default Doctor