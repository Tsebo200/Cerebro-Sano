import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalRightContact = (props) => {
  return (
    <>
      <div className='alertMiniModalRightContact'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalRightContact
