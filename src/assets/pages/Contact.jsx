import React, { useEffect } from 'react'
import ContactData from '../component/contact/ContactData'
import ContactBanner from "/public/contact/Contect_us_Banner.jpg"

function Contact() {
  useEffect(() => {
      window.scroll(0, 0);
    });
  return (
     <>
     <div
      className="h-[500px] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:`url(${ContactBanner})`,
      }}
    >
    </div>
    <ContactData/>
     </>
  )
}

export default Contact
