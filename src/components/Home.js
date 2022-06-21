import React from "react";
import moment from "moment";

const Home = () => {
    console.log(moment().format('DD MMM YYYY'))

    return(
        <>
            {/* <div className="header"></div> */}
           
            <div className="main-container">
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
                <div className="calendar-container">
                    <div className="cal-time-container">
                        <div className="time-container">
                        <div className="date-time-box"></div>
                        <div className="top-chevron-one"></div>
                        <div className="top-chevron-two"></div>
                        <div className="time-appoint"></div>
                        <div className="bottom-chevron-one"></div>
                        <div className="bottom-chevron-two"></div>
                        <div className="book-btn"></div>
                        </div>
                <div className="new-appoint-container"></div>
                        <div className="month-left-chevron"></div>
                        <div className="date-year-box"></div>
                        <div className="month-right-chevron"></div>
                        <div className="week-box"></div>
                        <div className="calendar-box"></div>
                    </div>
                </div>
                <div className="appointment-container">
                    <div className="appoint-card-container">
                        <div className="text-info-box">
                            <p className="time">12:00</p>
                            <p className="date">20/05/22</p>
                            <p className="doctor">Dr Welsh</p>
                            <p className="room">Room 5</p>
                            <div className="profile-img"></div>
                        </div>

                    <div className="appoint-card-container-two">
                        <div className="text-info-box-two">
                            <p className="time">12:00</p>
                            <p className="date">20/05/22</p>
                            <p className="doctor">Dr Welsh</p>
                            <p className="room">Room 5</p>
                            <div className="profile-img-two"></div>
                        </div>
                    </div>

                    <div className="appoint-card-container-three">
                        <div className="text-info-box">
                            <p className="time">12:00</p>
                            <p className="date">20/05/22</p>
                            <p className="doctor">Dr Welsh</p>
                            <p className="room">Room 5</p>
                            <div className="profile-img"></div>
                        </div>
                    </div>

                    <div className="appoint-card-container-four">
                        <div className="text-info-box">
                            <p className="time">12:00</p>
                            <p className="date">20/05/22</p>
                            <p className="doctor">Dr Welsh</p>
                            <p className="room">Room 5</p>
                            <div className="profile-img"></div>
                        </div>
                    </div>

                    <div className="appoint-card-container-five">
                        <div className="text-info-box">
                            <p className="time">12:00</p>
                            <p className="date">20/05/22</p>
                            <p className="doctor">Dr Welsh</p>
                            <p className="room">Room 5</p>
                            <div className="profile-img"></div>
                        </div>
                    </div>

                    <div className="appoint-card-container-six">
                        <div className="text-info-box">
                            <p className="time">12:00</p>
                            <p className="date">20/05/22</p>
                            <p className="doctor">Dr Welsh</p>
                            <p className="room">Room 5</p>
                            <div className="profile-img"></div>
                        </div>
                    </div>




                    </div>
                </div>
            </div>
        </>
     

    );
   
}
export default Home