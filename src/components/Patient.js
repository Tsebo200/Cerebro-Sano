import react from 'react';
import axios from 'axios';

const Patient = () => {

    return(
        <>
        <div className='main-container'>
            <div className='vert-nav-bar'></div>
            <div className='patients-detail-container'>
                <p className='patients-text'>Patients</p>
                <div className='patients-header'>
                    <p className='name-label'>Name</p>
                    <p className='surname-label'>Surname</p>
                    <p className='email-label'>Email</p>
                    <p className='phone-number-label'>Phone Number</p>
                </div>
                <div className='patients-detail-container-one'>
                    <div className='patients-profile-one'></div>
                    <div className='patients-name-one'></div>
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
            </div>
            <div className='edit-patients-detail-container'></div>
            {/* <a href="indipatient" onClick={Patient}>
                <div className='patient-profile-img'></div></a>
                <div className='patient-name-box'></div>
                <div className='patient-surname-box'></div>
                <div className='patient-email-box'></div>
                <div className='patient-phoneNum-box'></div>
                <div className='delete-patient-btn'></div> */}

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
            </div>

        </div>
        </>
    )
}
export default Patient