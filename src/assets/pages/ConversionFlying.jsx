import React from 'react'
import SuperFlowSlider from '../component/SuperSlider'
import ConversionFlyingBannerPage from '../component/ConversionFlying/ConversionFlyingBannerPage'
import ConversionFlyingContent from '../component/ConversionFlying/ConversionFlyingContent'

function ConversionFlying() {
  return (
    <div>
      <ConversionFlyingBannerPage/>
      <ConversionFlyingContent/>
      <SuperFlowSlider/>
    </div>
  )
}

export default ConversionFlying
