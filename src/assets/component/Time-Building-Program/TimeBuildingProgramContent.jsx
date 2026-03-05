import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TimeBuildingProgramContent() {

  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);
  const imageRef = useRef(null);
  const ctx = gsap.context(() => {

      const cards = gsap.utils.toArray(".package-card");

      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".packages-section",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

    }, sectionRef);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });

      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      });

      gsap.from(imageRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  const hours = [
    "Pilot-in-Command (PIC) time",
    "Cross-country flying",
    "Instrument flying",
    "Night flying (as applicable)"
  ];

  const crossCountry = [
    "Real navigation planning experience",
    "Fuel calculation practice",
    "Alternate airport selection strategy",
    "Weather assessment and route optimization",
    "Controlled and uncontrolled airspace operations"
  ];

  return (

<section ref={sectionRef} className="py-20 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-14 items-center">

{/* LEFT CONTENT */}

<div ref={textRef}>

<h2 className="text-4xl font-bold text-blue-800 mb-6">
Time Building Program in India
</h2>

<h3 className="text-xl font-semibold text-gray-700 mb-4">
Complete Your CPL Flying Hours with Confidence
</h3>

<p className="text-gray-600 mb-5 leading-relaxed">
The Time Building Program at Chetak Aviation is designed for aspiring commercial pilots who need to complete the mandatory flying hours required for Commercial Pilot Licence (CPL) eligibility under DGCA regulations.
</p>

<p className="text-gray-600 mb-6 leading-relaxed">
Accumulating flight hours is not just about logging time — it is about refining skills, building confidence, and strengthening operational competence.
</p>

<div className="bg-white p-6 rounded-xl shadow-md">

<h4 className="font-semibold text-lg mb-4">
Required Flying Hours Include:
</h4>

<ul className="space-y-2">

{hours.map((item,index)=>(
<li
key={index}
className="text-gray-600"
>
✈ {item}
</li>
))}

</ul>

</div>

</div>


{/* RIGHT IMAGE */}

<div ref={imageRef}>

<img
src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92"
alt="Pilot flying aircraft"
className="w-[545px] h-[420px] object-cover rounded-xl mt-18 shadow-xl"
/>

</div>

</div>


{/* Flying Packages */}

<section ref={sectionRef} className="py-20 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="packages-section mt-20">

<h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
Flying Hour Packages
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="package-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

<h3 className="font-semibold text-lg mb-3">
Customized Hour Planning
</h3>

<p className="text-gray-600 text-sm">
Students can choose packages based on their remaining hour requirements such as 20, 50, or 100 additional hours aligned with DGCA compliance.
</p>

</div>

<div className="package-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

<h3 className="font-semibold text-lg mb-3">
Efficient Scheduling
</h3>

<p className="text-gray-600 text-sm">
Optimized flight scheduling minimizes downtime while maintaining consistent learning and operational exposure.
</p>

</div>

<div className="package-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

<h3 className="font-semibold text-lg mb-3">
Transparent Hour Tracking
</h3>

<p className="text-gray-600 text-sm">
Every flight hour is properly logged and documented according to DGCA standards ensuring regulatory compliance.
</p>

</div>

</div>

</div>

</div>

</section>


{/* Cross Country Flying */}

<div className="mt-20">

<h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
Cross-Country Flying Experience
</h2>

<p className="text-gray-600 max-w-3xl mx-auto text-center mb-10">
Cross-country flying is a vital component of CPL eligibility and pilot development, giving pilots real-world navigation and operational experience.
</p>

<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{crossCountry.map((item,index)=>(
<li
key={index}
className="bg-white p-5 rounded-lg shadow"
>
✔ {item}
</li>
))}

</ul>

</div>


{/* CTA */}

<div className="mt-20 bg-blue-800 text-white rounded-2xl p-10 text-center shadow-xl">

<h2 className="text-3xl font-bold mb-4">
Build Your Flying Experience with Confidence
</h2>

<p className="text-blue-100 max-w-3xl mx-auto mb-6">
Our structured time building program ensures every flight hour contributes to professional pilot development and aviation readiness.
</p>

<p className="text-lg font-semibold mb-6">
✈ Enquire Today | Build Your Flying Hours
</p>

<button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
Enquire Now
</button>

</div>

</div>

</section>

  );
}

export default TimeBuildingProgramContent;
