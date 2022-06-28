import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalRightGender = (props) => {
  return (
    <>
      <div className='alertMiniModalRightGender'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalRightGender
