import React, { useEffect } from "react";
import ConversionPageBanner from "/course/conversionFlying/CoursesbannerConversionFlying.jpeg"

function ConversionFlyingBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="md:min-h-screen w-full overflow-hidden">
      <img src={ConversionPageBanner} alt="CoversionFlying" className="w-full md:h-screen object-cover" />
    </div>
  );
}

export default ConversionFlyingBannerPage;
