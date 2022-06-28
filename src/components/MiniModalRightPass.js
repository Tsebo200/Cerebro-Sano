import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalRightPass = (props) => {
  return (
    <>
      <div className='alertMiniModalRightPass'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalRightPass
