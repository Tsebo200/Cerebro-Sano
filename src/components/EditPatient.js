

const EditPatient = () => {



    return(
        <>
         <div className='edit-patients-profile'></div>
                <form><input className='edit-patients-name' /*onClick={postVal}*/></input>
                <input className='edit-patients-surname'></input>
                <input className='edit-patients-age'></input>
                <input className='edit-patients-gender'></input>
                <input className='edit-patients-email'></input>
                <input className='edit-patients-phone-number'></input>
                <input className='edit-patients-id'></input>
                <input className='edit-patients-medical-aid-number'></input>
                <div className='update-btn' /*onClick={addNewPost}*/></div>
                </form>
        </>
    );
}

export default EditPatient