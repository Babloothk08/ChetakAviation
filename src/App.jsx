import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/component/Navbar";
import Home from "./assets/pages/Home";
import Footer from "./assets/component/Footer";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import FlightInstructorCourse from "./assets/pages/FlightInstructorCourse";
import CommercialPilotLicence from "./assets/pages/CommercialPilotLicence";
import ConversionFlying from "./assets/pages/ConversionFlying";
import PrivatePilotLicence from "./assets/pages/PrivatePilotLicence";
import Courses from "./assets/pages/Courses";
import WatsAppIcon from "./assets/component/WatsAppIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PlaneCursor from "./assets/component/PlaneCursor";


function App() {

  
  useEffect(() => {
    AOS.init({
      duration: 800,     // animation time
      once: true,        // animation only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <PlaneCursor/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/flightInstructorCourse"
            element={<FlightInstructorCourse />}
          />
          <Route
            path="/commercialPilotLicence"
            element={<CommercialPilotLicence />}
          />
          <Route path="/ConversionFlying" element={<ConversionFlying />} />
          <Route
            path="/PrivatePilotLicence"
            element={<PrivatePilotLicence />}
          />
        </Routes>
        <WatsAppIcon/>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
