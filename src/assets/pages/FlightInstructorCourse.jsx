import React from 'react'
import SuperFlowSlider from '../component/SuperSlider'
import FlightInstructorBannerPage from '../component/flightInstructorCourse/FlightInstructorBannerPage'
import FlightInstructorCourseContent from '../component/flightInstructorCourse/FlightInstructorCourseContent'
import FlightCourseOverview from '../component/flightInstructorCourse/FlightCourseOverview'
import FlightInstructorWhatYouLearn from '../component/flightInstructorCourse/FlightInstructorWhatYouLearn'
import FlightInstructorEligibilityCriteria from '../component/flightInstructorCourse/FlightInstructorEligibilityCriteria'
import FlightInstructorTrainingAtChetakAviation from '../component/flightInstructorCourse/FlightInstructorTrainingAtChetakAviation'
import FlightInstructorWhyChooseChetakAviation from '../component/flightInstructorCourse/FlightInstructorWhyChooseChetakAviation'

function FlightInstructorCourse() {
  return (
    <div>
      <FlightInstructorBannerPage/>
      <FlightInstructorCourseContent/>
      <FlightCourseOverview/>
      <FlightInstructorWhatYouLearn/>
      <FlightInstructorEligibilityCriteria/>
      <FlightInstructorTrainingAtChetakAviation/>
      <FlightInstructorWhyChooseChetakAviation/>
      <SuperFlowSlider/>
      
    </div>
  )
}

export default FlightInstructorCourse
