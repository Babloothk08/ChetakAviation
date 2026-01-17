import React from 'react'
import SuperFlowSlider from '../component/SuperSlider'
import PrivotPilotLicenceBannerPage from '../component/PrivotPilotLicence/PrivotPilotLicenceBannerPage'
import PrivotPilotLicenceContent from '../component/PrivotPilotLicence/PrivotPilotLicenceContent'

function PrivatePilotLicence() {
  return (
    <div className=''>
      <PrivotPilotLicenceBannerPage/>
      <PrivotPilotLicenceContent/>
      <SuperFlowSlider/>
    </div>
  )
}

export default PrivatePilotLicence
