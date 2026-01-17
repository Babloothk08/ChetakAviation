import React from 'react'
import SuperFlowSlider from '../component/SuperSlider'
import FlightInstructorBannerPage from '../component/flightInstructorCourse/FlightInstructorBannerPage'
import FlightInstructorCourseContent from '../component/flightInstructorCourse/FlightInstructorCourseContent'

function FlightInstructorCourse() {
  return (
    <div>
      <FlightInstructorBannerPage/>
      <FlightInstructorCourseContent/>
      <SuperFlowSlider/>
      
    </div>
  )
}

export default FlightInstructorCourse
