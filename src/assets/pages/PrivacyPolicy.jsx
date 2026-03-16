import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function PrivacyPolicy() {

  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = containerRef.current.querySelectorAll(".fadeUp");

    gsap.from(elements, {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });

  }, []);

  return (
    <div className="w-full bg-[#103057] py-16">

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 md:px-10 bg-white rounded-xl shadow-xl"
      >

        <div className="py-12">

          {/* Title */}

          <h1 className="fadeUp text-4xl font-bold text-[#103057] mb-8 border-b-4 border-[#ECAA05] inline-block pb-2">
            Privacy Policy
          </h1>


          {/* Introduction */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-8">
            Introduction
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation values the privacy of website visitors, prospective students, and individuals who interact with our services. This Privacy Policy explains how we collect, use, protect, and manage personal information obtained through the Chetak Aviation website and related services.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            By using our website or submitting personal information through forms, inquiries, or applications, you agree to the terms outlined in this Privacy Policy.
          </p>


          {/* Information We Collect */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Information We Collect
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation may collect personal information from users when they interact with our website or services.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Information collected may include:
          </p>

          <ul className="fadeUp list-disc pl-6 text-gray-700 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Course interest or inquiry details</li>
            <li>Communication information submitted through contact forms</li>
          </ul>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            This information is collected solely to respond to inquiries, provide training information, or assist prospective students.
          </p>


          {/* How We Use Your Information */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            How We Use Your Information
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Information collected from website visitors may be used for the following purposes:
          </p>

          <ul className="fadeUp list-disc pl-6 text-gray-700 space-y-2">
            <li>Responding to student inquiries</li>
            <li>Providing information about aviation training programs</li>
            <li>Processing admission or enrollment inquiries</li>
            <li>Improving website services and user experience</li>
            <li>Communicating updates about training programs</li>
          </ul>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation does not sell, trade, or rent personal information to third parties.
          </p>


          {/* Data Protection */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Data Protection
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation takes reasonable technical and administrative measures to protect personal information from unauthorized access, misuse, or disclosure.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            While we strive to protect user data, no online platform can guarantee complete security. Users share personal information at their own discretion.
          </p>


          {/* Cookies */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Cookies and Website Analytics
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Our website may use cookies or basic analytics tools to understand visitor behavior and improve website performance.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Cookies help us analyze website traffic, understand user interactions, and improve user experience.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Users may disable cookies through their browser settings if desired.
          </p>


          {/* Third Party */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Third-Party Links
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            The Chetak Aviation website may contain links to external websites, including aviation institutions, regulatory authorities, or partner training organizations.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            We are not responsible for the privacy practices or content of third-party websites.
          </p>


          {/* Policy Changes */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Changes to Privacy Policy
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation reserves the right to update this Privacy Policy whenever necessary. Updated versions will be published on the website.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Users are encouraged to review the Privacy Policy periodically.
          </p>


          {/* Contact */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Contact Us
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            <span className="text-semibold text-lg">Chetak Aviation</span> <br/>
            Ozone City, Ozone Road <br/>
            Aligarh, Uttar Pradesh – 202002 <br/>
            India
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            <span className="font-semibold text-lg">Flying Training Base</span> <br/>
            MS-10, NH-91 <br/>
            Dhanipur Airstrip <br/>
            Post Panethi <br/>
            Aligarh, Uttar Pradesh – 202001 <br/>
            India
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Phone: 8923836664 <br/>
            Email: info@starallianceaviation.com
          </p>

        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;