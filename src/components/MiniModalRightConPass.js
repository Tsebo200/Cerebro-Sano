import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalRightConPass = (props) => {
  return (
    <>
      <div className='alertMiniModalRightConPass'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalRightConPass
