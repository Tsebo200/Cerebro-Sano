const Navigation = ()=>{
    return(
        <>
        <div className="nav-bar">
            <div className="logo"></div>
            <ul>
                <li className="homeli"><a href="/">Home</a></li>
                <li className="patientli"><a href="patient">Patient</a></li>
                <li className="doctorli"><a href="doctor">Doctor</a></li>
                <li className="signupli"><a href="/signup">Register/Sign in</a></li>
            </ul>
        </div>
        </>
    );
}

export default Navigation