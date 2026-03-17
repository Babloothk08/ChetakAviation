import React, { useEffect } from 'react'
import ContactData from '../component/contact/ContactData'
import ContactBanner from "/contact/contact-us-banner-chetak.jpg.jpeg"

function Contact() {
  useEffect(() => {
      window.scroll(0, 0);
    });
  return (
     <>
     <div
      className="md:min-h-screen w-full ">
      <img src={ContactBanner} alt="ContactBanner" className='bg-cover bg-center bg-no-repeat' />
    </div>
    <ContactData/>
     </>
  )
}

export default Contact
