import React, { useEffect } from 'react'
import Brochure from "/broschure/brochure-banner.jpg.jpeg"

function BrochureComponent() {
  useEffect(() => {
        window.scroll(0, 0);
      });
      return (
        <div
          className="min-h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${Brochure})`,
          }}
        ></div>
      );
    }

export default BrochureComponent
