import React, { useEffect } from 'react'
import banner from "/course/multi-engineRating/Multi-EngineRatingBanner.jpg.jpeg"

function MultiEngineRatingBanner() {
  useEffect(() => {
      window.scroll(0, 0);
    });
  return (
      <div className='md:min-h-screen w-full'>
        <img src={banner} alt="TimeBuildingProgramBanner" className='bg-cover bg-center' />
      </div>
    )
  }
  
export default MultiEngineRatingBanner
