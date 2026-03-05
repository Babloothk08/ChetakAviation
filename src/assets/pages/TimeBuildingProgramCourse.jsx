import React from 'react'
import TimeBuildingProgramContent from '../component/Time-Building-Program/TimeBuildingProgramContent'
import TimeBuildingProgramBanner from '../component/Time-Building-Program/TimeBuildingProgramBanner'
import TimeBuildinProgramInstructorSupport from '../component/Time-Building-Program/TimeBuildinProgramInstructorSupport'

function TimeBuildingProgramCourse() {
  return (
    <div>
      <TimeBuildingProgramBanner/>
      <TimeBuildingProgramContent/>
      <TimeBuildinProgramInstructorSupport/>
    </div>
  )
}

export default TimeBuildingProgramCourse
