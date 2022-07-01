import react from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostItem from './PostItem';
import EditPatient from './EditPatient';
import UserItem from './UserItem';

const Patient = () => {
    const navigate = useNavigate();

    const [userId, setUserId] = useState({
       activeUser: sessionStorage.getItem('activeUser') 
    });

    const [posts, setPosts] = useState();
    const [postSurname, sePostSurname] = useState();
    const [postMessage, setPostMessage] = useState({
       message: '',
       user:sessionStorage.getItem('activeUser') 
    });
    
    const [renderPost, setRenderPost] = useState();
    const [renderPostSurname, setRenderPostSurname] = useState();

    useEffect(() => {
        axios.post('http://localhost:8888/mainProject/readUserPosts.php', userId)
        .then((res) => {
            console.log(res)
            let data = res.data;
            let renderPost = data.map((item) => <UserItem key={item.id} name={item.name}  surname={item.surname} email={item.email} contact={item.phone}/>)

            setPosts(renderPost);
            setRenderPost(false);

        })
        .catch((err) => {
            console.log(err);
        })
    },[]);


    const postVal = (e) => {
        let messageVal = e.target.value;
        setPostMessage ({...postMessage, message: messageVal})
      }


    const addNewPost = (e) => {
        e.preventDefault();
        // document.getElementById('textMes').value = "";
        axios.post('http://localhost:8888/mainProject/addPost.php', postMessage)
        .then((res) => {
          let data = res.data;
         console.log(data);
         setRenderPost(true);
      });
      }





    //Do Not Touch Below
          useEffect(() =>{
            const userSession = sessionStorage.getItem('activeUser');
            console.log("Receptionist Signed In with" + " " + userSession);
            if(userSession === '' || userSession === null){
              navigate('/');
            }
          },[]);


    return(
        <>
        <div className='main-container'>
            <div className='patients-detail-container'>
                <div className='patients-header'>
                    <p className='name-label'>Name</p>
                    <p className='surname-label'>Surname</p>
                    <p className='email-label'>Email</p>
                    <p className='phone-number-label'>Phone Number</p>
                    <div className='add-patient-btn' onClick={addNewPost}></div>
                </div>
                <div className='patients-container-overflow'>
                <div className='patients-detail-container-one'>
                    <div className='patients-profile-one'></div>
                    <div className='patients-name-one'>{posts}</div>
                    <div className='patients-surname-one'>
                      
                    </div>
                    <div className='patients-email-one'></div>
                    <div className='patients-phone-number-one'></div>
                    <div className='patients-remove-btn-one'></div>
                </div>
                {/* <div className='patients-detail-container-two'>
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
                </div> */}
            </div>
            </div>

            <div className='edit-patients-detail-container'>
                {<EditPatient />}
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