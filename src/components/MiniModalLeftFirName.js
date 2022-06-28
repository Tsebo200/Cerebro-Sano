import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalLeftFirName = (props) => {
  return (
    <>
      <div className='alertMiniModalLeftFirName'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalLeftFirName
