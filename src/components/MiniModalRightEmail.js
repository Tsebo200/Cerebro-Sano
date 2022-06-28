import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalRightEmail = (props) => {
  return (
    <>
    <div className='alertMiniModalRightEmail'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalRightEmail




