
import Navbar from '../component/Navbar'
import VideoComponent from '../component/VedioComponent'
import EnquirySliderComponent from '../component/EnquirySliderComponent'
import LatestAnnouncement from '../component/LatestAnnouncement'
import QuestionsComponent from '../component/QuestionsComponent'
import TestimonialComponent from '../component/TestimonialComponent'
import AboutComponent from '../component/About/AboutComponent'
import { useEffect } from 'react'
import ServicesComponent from '../component/ServicesComponent'
import FooterUpSlider from '../component/FooterUpSlider'
// import GsapNewFile from '../component/GsapNewFile'

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
      <ServicesComponent/>
      <QuestionsComponent/>
      <FooterUpSlider/>
      {/* <GsapNewFile/> */}
    </div>
  )
}

export default Home
