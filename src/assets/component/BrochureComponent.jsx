import React, { useEffect } from 'react'
import Brochure from "/broschure/brochure-banner.jpg.jpeg"

function BrochureComponent() {
  useEffect(() => {
        window.scroll(0, 0);
      });
      return (
        <div
          className="h-[640px] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Brochure})`,
          }}
        ></div>
      );
    }

export default BrochureComponent
