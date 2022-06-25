import react from 'react';
import axios from 'axios';

const Patient = () => {

    return(
        <>
        <div className='main-container'>
            <div className='vert-nav-bar'>
                <div className='patients-logo-box'></div>
                <p className='patients-cerebrosano'>CerebroSano</p>
                <div className='dashboard-nav-container'>
                <div className='dashboard-nav-icon'></div>
                <p className='dashboard-nav-text'>Dashboard</p>
                </div>
                <div className='patients-nav-container'>
                {/* <span></span>
                <span></span> */}
                <div className='patients-nav-icon'></div>
                <p className='patients-nav-text'>Patients</p>
              
                </div>
                <div className='doctors-nav-container'>
                <div className='doctors-nav-icon'></div>
                <p className='doctors-nav-text'>Doctors</p>
                </div>
                <div className='signin-nav-container'>
                <div className='signin-nav-icon'></div>
                <p className='signin-nav-text'>Sign in</p>
                </div>
                <div className='register-nav-container'>
                <div className='register-nav-icon'></div>
                <p className='register-nav-text'>Register</p>
                </div>
            </div>
            <div className='patients-detail-container'>
                <div className='patients-header'>
                    <p className='name-label'>Name</p>
                    <p className='surname-label'>Surname</p>
                    <p className='email-label'>Email</p>
                    <p className='phone-number-label'>Phone Number</p>
                </div>
                <div className='patients-container-overflow'>
                <div className='patients-detail-container-one'>
                    <div className='patients-profile-one'></div>
                    <div className='patients-name-one'>
                    {/* <p className='p-name'></p> */}
                    </div>
                    <div className='patients-surname-one'></div>
                    <div className='patients-email-one'></div>
                    <div className='patients-phone-number-one'></div>
                    <div className='patients-remove-btn-one'></div>
                </div>
                <div className='patients-detail-container-two'>
                    <div className='patients-profile-two'></div>
                    <div className='patients-name-two'></div>
                    <div className='patients-surname-two'></div>
                    <div className='patients-email-two'></div>
                    <div className='patients-phone-number-two'></div>
                    <div className='patients-remove-btn-two'></div>
                </div>
                <div className='patients-detail-container-three'>
                    <div className='patients-profile-three'></div>
                    <div className='patients-name-three'></div>
                    <div className='patients-surname-three'></div>
                    <div className='patients-email-three'></div>
                    <div className='patients-phone-number-three'></div>
                    <div className='patients-remove-btn-three'></div>
                </div>
                <div className='patients-detail-container-four'>
                    <div className='patients-profile-four'></div>
                    <div className='patients-name-four'></div>
                    <div className='patients-surname-four'></div>
                    <div className='patients-email-four'></div>
                    <div className='patients-phone-number-four'></div>
                    <div className='patients-remove-btn-four'></div>
                </div>
                <div className='patients-detail-container-five'>
                    <div className='patients-profile-five'></div>
                    <div className='patients-name-five'></div>
                    <div className='patients-surname-five'></div>
                    <div className='patients-email-five'></div>
                    <div className='patients-phone-number-five'></div>
                    <div className='patients-remove-btn-five'></div>
                </div>
                <div className='patients-detail-container-six'>
                    <div className='patients-profile-six'></div>
                    <div className='patients-name-six'></div>
                    <div className='patients-surname-six'></div>
                    <div className='patients-email-six'></div>
                    <div className='patients-phone-number-six'></div>
                    <div className='patients-remove-btn-six'></div>
                </div>
                <div className='patients-detail-container-seven'>
                    <div className='patients-profile-seven'></div>
                    <div className='patients-name-seven'></div>
                    <div className='patients-surname-seven'></div>
                    <div className='patients-email-seven'></div>
                    <div className='patients-phone-number-seven'></div>
                    <div className='patients-remove-btn-seven'></div>
                </div>
                <div className='patients-detail-container-eight'>
                    <div className='patients-profile-eight'></div>
                    <div className='patients-name-eight'></div>
                    <div className='patients-surname-eight'></div>
                    <div className='patients-email-eight'></div>
                    <div className='patients-phone-number-eight'></div>
                    <div className='patients-remove-btn-eight'></div>
                </div>
                <div className='patients-detail-container-nine'>
                    <div className='patients-profile-nine'></div>
                    <div className='patients-name-nine'></div>
                    <div className='patients-surname-nine'></div>
                    <div className='patients-email-nine'></div>
                    <div className='patients-phone-number-nine'></div>
                    <div className='patients-remove-btn-nine'></div>
                </div>
            </div>
            </div>
            <div className='edit-patients-detail-container'>
                <div className='edit-patients-profile'></div>
                <div className='edit-patients-name'></div>
                <div className='edit-patients-surname'></div>
                <div className='edit-patients-age'></div>
                <div className='edit-patients-gender'></div>
                <div className='edit-patients-email'></div>
                <div className='edit-patients-phone-number'></div>
                <div className='edit-patients-id'></div>
                <div className='edit-patients-medical-aid-number'></div>
                <div className='update-btn'></div>
            </div>
            
            {/* <a href="indipatient" onClick={Patient}>
                <div className='patient-profile-img'></div></a>
                <div className='patient-name-box'></div>
                <div className='patient-surname-box'></div>
                <div className='patient-email-box'></div>
                <div className='patient-phoneNum-box'></div>
                <div className='delete-patient-btn'></div> 

            <div className='patients-detail-container-two'>
                <div className='patient-profile-img'></div>
                <div className='patient-name-box'></div>
                <div className='patient-surname-box'></div>
                <div className='patient-email-box'></div>
                <div className='patient-phoneNum-box'></div>
                <div className='delete-patient-btn'></div>
            </div>

            <div className='patients-detail-container-three'>
                <div className='patient-profile-img'></div>
                <div className='patient-name-box'></div>
                <div className='patient-surname-box'></div>
                <div className='patient-email-box'></div>
                <div className='patient-phoneNum-box'></div>
                <div className='delete-patient-btn'></div>
            </div>

            <div className='patients-detail-container-four'>
                <div className='patient-profile-img'></div>
                <div className='patient-name-box'></div>
                <div className='patient-surname-box'></div>
                <div className='patient-email-box'></div>
                <div className='patient-phoneNum-box'></div>
                <div className='delete-patient-btn'></div>
            </div>

            <div className='patients-detail-container-five'>
                <div className='patient-profile-img'></div>
                <div className='patient-name-box'></div>
                <div className='patient-surname-box'></div>
                <div className='patient-email-box'></div>
                <div className='patient-phoneNum-box'></div>
                <div className='delete-patient-btn'></div>
            </div>*/}

        </div>
        </>
    )
}
export default Patient