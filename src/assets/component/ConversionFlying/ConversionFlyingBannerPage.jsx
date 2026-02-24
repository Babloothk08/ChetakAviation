import React, { useEffect } from "react";
import ConversionPageBanner from "/course/conversionFlying/Conversion_Flying_Banner.jpg"

function ConversionFlyingBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${ConversionPageBanner})`,
      }}
    ></div>
  );
}

export default ConversionFlyingBannerPage;
