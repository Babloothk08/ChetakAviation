import React from 'react'
import SuperFlowSlider from '../component/SuperSlider'
import ConversionFlyingBannerPage from '../component/ConversionFlying/ConversionFlyingBannerPage'
import ConversionFlyingContent from '../component/ConversionFlying/ConversionFlyingContent'
import ConversionFlyingCourseOverview from '../component/ConversionFlying/ConversionFlyingCourseOverview'
import ConversionFlyingWhatYouLearn from '../component/ConversionFlying/ConversionFlyingWhatYouLearn'
import ConversionflyingWhoISCourseFor from '../component/ConversionFlying/ConversionflyingWhoISCourseFor'
import ConversionFlyingTrainingAtChetakAviation from '../component/ConversionFlying/ConversionFlyingTrainingAtChetakAviation'
import ConversionFlyingWhyChooseChetakAviation from '../component/ConversionFlying/ConversionFlyingWhyChooseChetakAviation'

function ConversionFlying() {
  return (
    <div>
      <ConversionFlyingBannerPage/>
      <ConversionFlyingContent/>
      <ConversionFlyingCourseOverview/>
      <ConversionflyingWhoISCourseFor/>
      <ConversionFlyingWhatYouLearn/>
      <ConversionFlyingTrainingAtChetakAviation/>
      <ConversionFlyingWhyChooseChetakAviation/>
      <SuperFlowSlider/>
    </div>
  )
}

export default ConversionFlying
