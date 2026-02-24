import React, { useEffect } from "react";
import ComercialPageBanner from "/course/bannerImage/WhatsApp Image 2026-02-24 at 3.32.54 PM.jpeg";

function ComercialPilotLicenceBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="h-[620px] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${ComercialPageBanner})`,
      }}
    ></div>
  );
}

export default ComercialPilotLicenceBannerPage;
