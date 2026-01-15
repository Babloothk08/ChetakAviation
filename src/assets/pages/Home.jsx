import React from 'react'
import Navbar from '../component/Navbar'
import AboutComponent from '../component/AboutComponent'
import VideoComponent from '../component/VedioComponent'
import EnquirySliderComponent from '../component/EnquirySliderComponent'
import LatestAnnouncement from '../component/LatestAnnouncement'
import TestimonialComponent from '../component/TestiMonialComponent'
import QuestionsComponent from '../component/QuestionsComponent'

function Home() {
  return (
    <div>
      <Navbar/>
      <VideoComponent/>
      <AboutComponent/>
      <LatestAnnouncement/>
      <EnquirySliderComponent/>
      <TestimonialComponent/>
      <QuestionsComponent/>
    </div>
  )
}

export default Home
