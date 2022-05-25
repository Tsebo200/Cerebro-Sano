import React from "react";
import moment from "moment";

const Home = () => {
    console.log(moment().format('DD MMM YYYY'))

    return(
        <>
            <div className="header"></div>
            <div className="main-container">
                <div className="calendar-container"></div>
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