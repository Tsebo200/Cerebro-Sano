import React from 'react'
import ErrorAsset from '../Assets/error.svg';

const MiniModalRightRank = (props) => {
  return (
    <>
      <div className='alertMiniModalRightRank'>
          <img src={ErrorAsset} />
          <p>{props.message}</p> 
      </div>
    </>
  )
}

export default MiniModalRightRank
