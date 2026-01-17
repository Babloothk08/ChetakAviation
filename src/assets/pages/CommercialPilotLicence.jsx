import React from 'react'
import SuperFlowSlider from '../component/SuperSlider'
import ComercialPilotLicenceBannerPage from '../component/ComercialPilotLicence/ComercialPilotLicenceBannerPage'
import CommercialPilotLicenceContent from '../component/ComercialPilotLicence/CommercialPilotLicenceContent'

function CommercialPilotLicence() {
  return (
    <div>
      <ComercialPilotLicenceBannerPage/>
      <CommercialPilotLicenceContent/>
      <SuperFlowSlider/>
    </div>
  )
}

export default CommercialPilotLicence
