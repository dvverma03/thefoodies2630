import React from 'react'
import "./YourmindShimmer.css"

const ImgLoadingOverlay = () => {
  return (
    <>
    <div className='headerShimmer'></div>
    <div className="container">
          {Array(18).fill("").map((e)=>(
            <>
          <div className="box" key={e}>
            <div className="major"></div>
            <div className="minor_1"></div>
          </div>
          </>
        
          ))}
        </div>
    </>
  )
}

export default ImgLoadingOverlay
