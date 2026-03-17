import React, { useEffect } from 'react'
import Brochure from "/broschure/brochure-banner.jpg.jpeg"

function BrochureComponent() {
  useEffect(() => {
        window.scroll(0, 0);
      });
      return (
        <div
          className="md:min-h-screen w-full ">
            <img src={Brochure} alt="Brochure" className='bg-cover bg-center' />
          </div>
      );
    }

export default BrochureComponent
