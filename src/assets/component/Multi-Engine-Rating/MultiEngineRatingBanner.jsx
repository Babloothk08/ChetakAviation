import React, { useEffect } from 'react'
import banner from "/course/multi-engineRating/Multi-EngineRatingBanner.jpg.jpeg"

function MultiEngineRatingBanner() {
  useEffect(() => {
      window.scroll(0, 0);
    });
  return (
      <div className='min-h-screen w-full'>
        <img src={banner} alt="TimeBuildingProgramBanner" />
      </div>
    )
  }
  
export default MultiEngineRatingBanner
