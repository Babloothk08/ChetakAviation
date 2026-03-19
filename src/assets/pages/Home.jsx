
import Navbar from '../component/Navbar'
import VideoComponent from '../component/VedioComponent'
import EnquirySliderComponent from '../component/EnquirySliderComponent'
import LatestAnnouncement from '../component/LatestAnnouncement'
// import QuestionsComponent from '../component/QuestionsComponent'
import TestimonialComponent from '../component/TestimonialComponent'
import AboutComponent from '../component/About/AboutComponent'
import { useEffect } from 'react'
import ServicesComponent from '../component/ServicesComponent'
// import FooterUpSlider from '../component/FooterUpSlider'
import VideoComponent2 from '../component/VideoComponent2'
import AeroplaneMovingPng from '../component/AeroplaneMovingPng'
import Table from '../component/Table'
// import GsapNewFile from '../component/GsapNewFile'

function Home() {
  useEffect(() => {
      window.scroll(0, 0);
    });
  return (
    <div className='bg-gray-200 shadow-2xl'>
      {/* <Navbar/> */}
      <EnquirySliderComponent/>
      {/* <VideoComponent/> */}
      <AboutComponent/>
      <Table/>
      <LatestAnnouncement/>
      {/* <EnquirySliderComponent/> */}
      <ServicesComponent/>
      <TestimonialComponent/>
      <AeroplaneMovingPng/>
      <VideoComponent2/>
      {/* <QuestionsComponent/> */}
      {/* <FooterUpSlider/> */}
      {/* <GsapNewFile/> */}
    </div>
  )
}

export default Home
