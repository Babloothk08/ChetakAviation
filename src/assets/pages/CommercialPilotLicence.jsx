import React from 'react'
import SuperFlowSlider from '../component/SuperSlider'
import ComercialPilotLicenceBannerPage from '../component/ComercialPilotLicence/ComercialPilotLicenceBannerPage'
import CommercialPilotLicenceContent from '../component/ComercialPilotLicence/CommercialPilotLicenceContent'
import CommercialPilotCourseOverview from '../component/ComercialPilotLicence/CommercialPilotCourseOverview'
import CommercialPilotWhatYouLearn from '../component/ComercialPilotLicence/CommercialPilotWhatYouLearn'
import CommercialPilotElegibiltyCriteria from '../component/ComercialPilotLicence/CommercialPilotElegibiltyCriteria'
import CommercialPilotTrainingAtChetakAviation from '../component/ComercialPilotLicence/CommercialPilotTrainingAtChetakAviation'
import CommercialPilotWhyChooseChetakAviation from '../component/ComercialPilotLicence/CommercialPilotWhyChooseChetakAviation'

function CommercialPilotLicence() {
  return (
    <div>
      <ComercialPilotLicenceBannerPage/>
      <CommercialPilotLicenceContent/>
      <CommercialPilotCourseOverview/>
      <CommercialPilotWhatYouLearn/>
      <CommercialPilotElegibiltyCriteria/>
      <CommercialPilotTrainingAtChetakAviation/>
      <CommercialPilotWhyChooseChetakAviation/>
      <SuperFlowSlider/>
    </div>
  )
}

export default CommercialPilotLicence
