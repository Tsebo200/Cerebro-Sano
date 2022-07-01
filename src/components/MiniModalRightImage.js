import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalRightImage = (props) => {
  return (
    <>
      <div className='alertMiniModalRightImage'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalRightImage
