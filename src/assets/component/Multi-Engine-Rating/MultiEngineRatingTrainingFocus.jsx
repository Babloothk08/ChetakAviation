import React, { useEffect, useRef, useState } from "react";

function MultiEngineRatingTrainingFocus() {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

  const modules = [
    {
      title: "Engine-Out Procedures",
      desc: "Identification of failed engine, maintaining directional control, power management techniques and emergency landing planning."
    },
    {
      title: "Multi-Engine Aerodynamics",
      desc: "Pilots learn asymmetric thrust effects, Vmc concepts, critical engine theory and rudder coordination."
    },
    {
      title: "Performance Calculations & Planning",
      desc: "Students practice takeoff calculations, accelerate-stop distance, landing distance and weight balance analysis."
    },
    
  ];

  return (

<section ref={sectionRef} className=" bg-gray-50">

<div className="max-w-6xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-12 items-center">

{/* RIGHT IMAGE */}

<div
className={`transition-all duration-700 ${
isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
}`}
>

<img
src="/course/multi-engineRating/TrainingFocus.jpeg"
alt="Multi Engine Training"
className="w-full h-full mt-15 object-cover rounded-xl shadow-xl"
/>

</div>
{/* LEFT CONTENT */}

<div
className={`transition-all duration-700 ${
isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
}`}
>

<h2 className="text-4xl font-bold text-blue-800 mb-6">
Training Focus
</h2>

<p className="text-gray-600 mb-4 leading-relaxed">
Our Multi-Engine Rating program combines theoretical instruction with structured flight training to build technical mastery and operational confidence.
</p>

<div className="space-y-4">

{modules.map((item, index) => (
<div
key={index}
className={`bg-white p-3 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer
${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
style={{ transitionDelay: `${index * 120}ms` }}
>

<h3 className="text-lg font-semibold mb-2">
{index + 1}. {item.title}
</h3>

<p className="text-gray-600 text-sm leading-relaxed">
{item.desc}
</p>

</div>
))}

</div>

</div>





</div>

</div>

</section>

  );
}

export default MultiEngineRatingTrainingFocus;