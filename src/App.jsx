import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/component/Navbar";
import Home from "./assets/pages/Home";
import Footer from "./assets/component/Footer";
import WatsAppIcon from "./assets/component/WatsappIcon";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import FlightInstructorCourse from "./assets/pages/FlightInstructorCourse";
import CommercialPilotLicence from "./assets/pages/CommercialPilotLicence";
import ConversionFlying from "./assets/pages/ConversionFlying";
import PrivatePilotLicence from "./assets/pages/PrivatePilotLicence";
import Courses from "./assets/pages/Courses";

function App() {
  return (
    <>
      <BrowserRouter>
      <WatsAppIcon/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={ <About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/flightInstructorCourse" element={<FlightInstructorCourse/>}/>
          <Route path="/commercialPilotLicence" element={<CommercialPilotLicence/>}/>
          <Route path="/ConversionFlying" element={<ConversionFlying/>}/>
          <Route path="/PrivatePilotLicence" element={<PrivatePilotLicence/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
