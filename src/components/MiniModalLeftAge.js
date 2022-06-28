import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalLeftAge = (props) => {
  return (
    <>
      <div className='alertMiniModalLeftAge'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalLeftAge
