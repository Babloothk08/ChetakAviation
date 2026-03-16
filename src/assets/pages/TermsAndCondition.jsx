import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function TermsAndCondition() {

  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0,0)

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

          <h1 className="fadeUp text-4xl font-bold text-[#103057] mb-8 border-b-4 border-[#ECAA05] inline-block pb-2">
            Terms and Conditions
          </h1>


          {/* Introduction */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-8">
            Introduction
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Welcome to Chetak Aviation, a professional flying training academy located in Aligarh, Uttar Pradesh, India. These Terms and Conditions govern the use of the Chetak Aviation website, services, training programs, and all related aviation training activities provided through our institute and associated training partners.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            By accessing our website or enrolling in any training program offered by Chetak Aviation, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue use of the website and refrain from using our services.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation reserves the right to update or modify these Terms and Conditions at any time without prior notice. Updated versions will be published on this page.
          </p>


          {/* About */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            About Chetak Aviation
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation is a flying training academy dedicated to providing aviation education and pilot training programs for aspiring pilots. The academy offers structured training courses designed to prepare students for careers in aviation while adhering to professional aviation standards and safety practices.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            The training programs may include:
          </p>

          <ul className="fadeUp list-disc pl-6 text-gray-700 space-y-2">
            <li>Commercial Pilot Licence (CPL) training</li>
            <li>Private Pilot Licence (PPL) training</li>
            <li>Multi-Engine Rating</li>
            <li>Flight Instructor Course</li>
            <li>Conversion Flying Training</li>
            <li>Time Building Programs</li>
          </ul>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation may collaborate with recognized aviation training institutions such as Star Alliance Aviation Academy, Delhi, for specific training support, guidance, or academic collaboration where applicable.
          </p>


          {/* Admission */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Student Admission and Enrollment
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Admission into any training program offered by Chetak Aviation is subject to eligibility criteria and aviation regulatory requirements.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Students enrolling in aviation training programs must ensure they meet the required educational qualifications, medical fitness standards, and regulatory guidelines as prescribed by aviation authorities.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Enrollment in a training program does not guarantee licensing or employment in the aviation industry. Successful completion of training depends on the student’s performance, regulatory compliance, and completion of required flight hours and examinations.
          </p>


          {/* Training */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Training Programs and Course Structure
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            All aviation training programs offered by Chetak Aviation are designed to provide professional flight training and theoretical aviation knowledge.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Course structure, duration, and training modules may vary depending on:
          </p>

          <ul className="fadeUp list-disc pl-6 text-gray-700 space-y-2">
            <li>Aviation regulatory guidelines</li>
            <li>Aircraft availability</li>
            <li>Weather conditions</li>
            <li>Operational factors</li>
            <li>Training requirements</li>
          </ul>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation reserves the right to modify course structures, training schedules, or program details when necessary for operational or regulatory reasons.
          </p>


          {/* Responsibilities */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Student Responsibilities
          </h2>

          <ul className="fadeUp list-disc pl-6 text-gray-700 space-y-2">
            <li>Follow all safety guidelines and operational procedures</li>
            <li>Respect aviation training protocols and instructor guidance</li>
            <li>Maintain professional behavior within training facilities</li>
            <li>Comply with aviation authority regulations</li>
          </ul>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Failure to comply with safety rules or academy policies may result in disciplinary action, suspension, or termination from training programs.
          </p>


          {/* Payment */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Payment and Fees
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Course fees for aviation training programs must be paid according to the fee structure communicated at the time of admission or enrollment.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Payments may include training fees, administrative charges, and other applicable costs related to aviation training.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation reserves the right to revise training fees, course charges, or administrative costs when necessary.
          </p>


          {/* Intellectual Property */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Intellectual Property
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            All content available on the Chetak Aviation website, including text, images, graphics, course materials, and training content, is the intellectual property of Chetak Aviation unless otherwise stated.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Unauthorized copying, reproduction, distribution, or use of website content without prior written permission from Chetak Aviation is strictly prohibited.
          </p>


          {/* Liability */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Limitation of Liability
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation provides aviation training and educational services intended to prepare students for aviation careers. However, the academy does not guarantee employment or airline placement after course completion.
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation shall not be held liable for any losses, damages, or issues arising from the use of the website, training services, or external aviation regulatory decisions.
          </p>


          {/* Contact */}

          <h2 className="fadeUp text-2xl font-semibold text-[#103057] mt-10">
            Contact Information
          </h2>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Chetak Aviation <br/>
            Ozone City, Ozone Road <br/>
            Aligarh, Uttar Pradesh – 202002 <br/>
            India
          </p>

          <p className="fadeUp pt-3 text-gray-700 leading-relaxed">
            Flying Training Base <br/>
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

export default TermsAndCondition;