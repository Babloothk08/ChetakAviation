
import Navbar from '../component/Navbar'
import VideoComponent from '../component/VedioComponent'
import EnquirySliderComponent from '../component/EnquirySliderComponent'
import LatestAnnouncement from '../component/LatestAnnouncement'
import QuestionsComponent from '../component/QuestionsComponent'
import TestimonialComponent from '../component/TestimonialComponent'
import AboutComponent from '../component/About/AboutComponent'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
      window.scroll(0, 0);
    });
  return (
    <div>
      {/* <Navbar/> */}
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
