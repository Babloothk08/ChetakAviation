import React from 'react'
import MultiEngineRatingBanner from '../component/Multi-Engine-Rating/MultiEngineRatingBanner'
import MultiEngineRatingContent from '../component/Multi-Engine-Rating/MultiEngineRatingContent'
import MultiEngineRatingTrainingFocus from '../component/Multi-Engine-Rating/MultiEngineRatingTrainingFocus'
import MultiEngineRatingEligibility from '../component/Multi-Engine-Rating/MultiEngineEligibility'


function MultiEngineRatingCourse() {
  return (
    <div>
      <MultiEngineRatingBanner/>
      <MultiEngineRatingContent/>
      <MultiEngineRatingTrainingFocus/>
      <MultiEngineRatingEligibility/>
    </div>
  )
}

export default MultiEngineRatingCourse
