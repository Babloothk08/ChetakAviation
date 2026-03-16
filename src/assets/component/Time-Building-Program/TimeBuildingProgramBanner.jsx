import React, { useEffect } from 'react'
import banner from "/timeBuildingProgram/TimeBuildingProgramBanner.jpeg"

function TimeBuildingProgramBanner() {
  useEffect(() => {
      window.scroll(0, 0);
    });
  return (
    <div className='min-h-screen w-full'>
      <img src={banner} alt="TimeBuildingProgramBanner" />
    </div>
  )
}

export default TimeBuildingProgramBanner
