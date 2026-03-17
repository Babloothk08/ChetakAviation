import React, { useEffect } from "react";
import PrivotPilotBannerPage from "/course/privatePilotLicence/CoursesbannerPrivatePilotLicence.jpeg"

function PrivotPilotLicenceBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  },[]);
  return (
    <div
      className="md:min-h-screen w-full ">
      <img src={PrivotPilotBannerPage} alt="PrivotPilotBannerPage" className="bg-cover bg-center bg-no-repeat" />
    </div>
  );
}

export default PrivotPilotLicenceBannerPage;
