import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalRightPassEmpty = (props) => {
  return (
    <>
      <div className='alertMiniModalRightPassEmpty'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalRightPassEmpty
