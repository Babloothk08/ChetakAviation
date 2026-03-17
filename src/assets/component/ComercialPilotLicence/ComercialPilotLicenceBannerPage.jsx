import React, { useEffect } from "react";
import ComercialPageBanner from "/course/commercialPilotLicence/CoursesbannerCommercialPilotLicenceCPLL.jpeg";

function ComercialPilotLicenceBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="md:min-h-screen w-full ">
      <img src={ComercialPageBanner} alt="" className="bg-cover bg-center bg-no-repeat"/>
    </div>
  );
}

export default ComercialPilotLicenceBannerPage;
