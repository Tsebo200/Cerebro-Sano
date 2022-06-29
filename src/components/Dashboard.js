import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    console.log(moment().format('DD MMM YYYY'))

    let navigate = useNavigate();
    const setLogout = () => {
        sessionStorage.clear();
        navigate('/')
      }

    return(
        <>
            {/* <div className="header"></div> */}
           
            <div className="main-container">
                <div className="calendar-container">
                   <div className="welcome-container">
                    <p className="welcome-text">Welcome To CerebroSano</p>
                    <p className="secondary-welcome-text">How can we help you?</p>
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
                <div className="new-appoint-container">
                        <div className="cal-time-container">
                            <div className="month-left-chevron"></div>
                            <div className="date-year-box"><p className="date-year-text">April 2022</p></div>
                            <div className="month-right-chevron"></div>
                            <div className="week-box">
                                <p className="sun-text">Sun</p>
                                <p className="mon-text">Mon</p>
                                <p className="tue-text">Tue</p>
                                <p className="wed-text">Wed</p>
                                <p className="thu-text">Thu</p>
                                <p className="fri-text">Fri</p>
                                <p className="sat-text">Sat</p>
                            </div>
                            <div className="calendar-box">
                                <p className="text-1">1</p>
                                <p className="text-2">2</p>
                                <p className="text-3">3</p>
                                <p className="text-4">4</p>
                                <p className="text-5">5</p>
                                <p className="text-6">6</p>
                                <p className="text-7">7</p>
                                <p className="text-8">8</p>
                                <p className="text-9">9</p>
                                <p className="text-10">10</p>
                                <p className="text-11">11</p>
                                <p className="text-12">12</p>
                                <p className="text-13">13</p>
                                <p className="text-14">14</p>
                                <p className="text-15">15</p>
                                <p className="text-16">16</p>
                                <p className="text-17">17</p>
                                <p className="text-18">18</p>
                                <p className="text-19">19</p>
                                <p className="text-20">20</p>
                                <p className="text-21">21</p>
                                <p className="text-22">22</p>
                                <p className="text-23">23</p>
                                <p className="text-24">24</p>
                                <p className="text-25">25</p>
                                <p className="text-26">26</p>
                                <p className="text-27">27</p>
                                <p className="text-28">28</p>
                                <p className="text-29">29</p>
                                <p className="text-30">30</p>
                            </div>
                        </div>
                        <div className="hor-break-line"></div>
                        <div className="time-container">
                        <div className="date-time-box">
                            <p className="date-time-text">2022-04-10 11:30</p>
                        </div>
                        <div className="top-chevron-one"></div>
                        <div className="top-chevron-two"></div>
                        <div className="time-appoint">
                            <div className="hour-container">
                                <p className="hour-text">11</p>
                            </div>
                            <div className="colon-container">
                                <p className="colon-text">:</p>
                            </div>
                            <div className="minutes-container">
                                <p className="minutes-text">30</p>
                            </div>
                        </div>
                        <div className="bottom-chevron-one"></div>
                        <div className="bottom-chevron-two"></div>
                        <div className="book-btn">
                            <p className="book-text">Book</p>
                        </div>
                        </div>
                    </div>
            </div>
        </>
     

    );
   
}
export default Dashboard