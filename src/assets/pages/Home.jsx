import React from 'react'
import Navbar from '../component/Navbar'
import AboutComponent from '../component/AboutComponent'
import VideoComponent from '../component/VedioComponent'
import EnquirySliderComponent from '../component/EnquirySliderComponent'
import LatestAnnouncement from '../component/LatestAnnouncement'
import QuestionsComponent from '../component/QuestionsComponent'
import TestimonialComponent from '../component/TestimonialComponent'

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
