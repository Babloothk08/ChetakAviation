
import AboutComponentCard from "../component/About/AboutComponentCard";
import AboutComponentContent from "../component/About/AboutComponentContent";
import AboutWhyChooseChetakAviation from "../component/About/AboutWhyChooseChetakAviation";
import ImageZoomForAboutComponent from "../component/ImageZoomForAboutComponent";
import AboutOurMission from "../component/About/AboutOurMission"
import AboutOurVision from "../component/About/AboutOurVision";
// import { Helmet } from "react-helmet";

function About() {

  return (
    <div>
      <ImageZoomForAboutComponent />
      <AboutComponentContent/>
      <AboutComponentCard/>
      <AboutWhyChooseChetakAviation/>
      <AboutOurMission/>
      <AboutOurVision/>
    </div>
  );
}

export default About;
