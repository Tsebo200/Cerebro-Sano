import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalRightSurName = (props) => {
  return (
    <>
      <div className='alertMiniModalRightSurName'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalRightSurName
