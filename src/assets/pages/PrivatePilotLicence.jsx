import React from 'react'
import SuperFlowSlider from '../component/SuperSlider'
import PrivotPilotLicenceBannerPage from '../component/PrivotPilotLicence/PrivotPilotLicenceBannerPage'
import PrivotPilotLicenceContent from '../component/PrivotPilotLicence/PrivotPilotLicenceContent'
import PrivatePilotLicenceCourseOverview from '../component/PrivotPilotLicence/PrivatePilotLicenceCourseOverview'
import PrivateLicenceWhatYouLearn from '../component/PrivotPilotLicence/PrivateLicenceWhatYouLearn'
import PrivotLicenceEligibilityCriteria from '../component/PrivotPilotLicence/PrivotLicenceEligibilityCriteria'
import PrivateLicenceTrainingAtChetakAviation from '../component/PrivotPilotLicence/PrivateLicenceTrainingAtChetakAviation'
import PrivateLicenceWhyChooseChetakAviation from '../component/PrivotPilotLicence/PrivateLicenceWhyChooseChetakAviation'

function PrivatePilotLicence() {
  return (
    <div className=''>
      <PrivotPilotLicenceBannerPage/>
      <PrivotPilotLicenceContent/>
      <PrivatePilotLicenceCourseOverview/>
      <PrivateLicenceWhatYouLearn/>
      <PrivotLicenceEligibilityCriteria/>
      <PrivateLicenceTrainingAtChetakAviation/>
      <PrivateLicenceWhyChooseChetakAviation/>
      <SuperFlowSlider/>
    </div>
  )
}

export default PrivatePilotLicence
