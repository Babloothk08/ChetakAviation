import React from "react";
import VedioComponent from "../component/VedioComponent";
import AboutComponent from "../component/AboutComponent";
// import CouroselComponent from "../component/CouroselComponent";
import CouroselComponent1 from "../component/EnquirySliderComponent";
// import ImageZoomComponent from "../component/ImageZoomForAboutComponent";
import LatestAnnouncement from "../component/LatestAnnouncement";
import SuperSlider from "../component/SuperSlider";
import EnquirySliderComponent from "../component/EnquirySliderComponent";
import TestimonialComponent from "../component/TestiMonialComponent";
import QuestionsComponent from "../component/QuestionsComponent";
import ImageZoomForAboutComponent from "../component/ImageZoomForAboutComponent";
import GetConnected from "../component/GetConnected";

function Home() {
  return (
    <>
      <VedioComponent/>
      <AboutComponent/>
      <LatestAnnouncement/>
      {/* <CouroselComponent/> */}
      <EnquirySliderComponent/>
      <TestimonialComponent/>
      <QuestionsComponent/>
      <GetConnected/>
      {/* <ImageZoomForAboutComponent/> */}
      {/* <ImageZoomComponent/> */}
      {/* <SuperSlider/> */}
    </>
  );
}

export default Home;
