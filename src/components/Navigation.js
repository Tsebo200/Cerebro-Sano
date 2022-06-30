import { useNavigate } from "react-router-dom";

const Navigation = ()=>{

    let navigate = useNavigate();
    const setLogout = () => {
        sessionStorage.clear();
        navigate('/');
      }



    return(
        <>
            <div className='vert-nav-bar'>
                    <a href="Dashboard"><div className='patients-logo-box'></div></a>
                    <p className='patients-cerebrosano'>CerebroSano</p>
                    <a href="Dashboard">
                    <div className='dashboard-nav-container' tabIndex="1">
                    <div className='dashboard-nav-icon'></div>
                    <p className='dashboard-nav-text' tabIndex="1">Dashboard</p>
                    </div></a>
                <a href="/Patient">
                    <div className='patients-nav-container' tabIndex="2"> 
                    <div className='patients-nav-icon'></div>
                    <p className='patients-nav-text'>Patients</p>
                </div></a>
                <a href="/Doctor">
                    <div className='doctors-nav-container' tabIndex="3">
                    <div className='doctors-nav-icon'></div>
                    <p className='doctors-nav-text'>Doctors</p>
                    </div></a>
                <div className='logout-nav-container' onClick={setLogout}>
                    <div className='logout-nav-icon'></div>
                    <p className='logout-nav-text'>LogOut</p>
                </div>
            </div>
        </>
    );
}

export default Navigation