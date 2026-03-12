import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/HomePageBanner/Website-Banner-Chetak-one.jpg.jpeg",
  },
  {
    image: "/HomePageBanner/Website-Banner-ChetakTwo.jpg.jpeg",
  },
  {
    image: "/HomePageBanner/Website-Banner-ChetakThree.jpg.jpeg",
  },
  {
    image: "/HomePageBanner/Website-Banner-ChetakFour.jpg.jpeg",
  },
];

function EnquirySliderComponent() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-full overflow-hidden">

      <Slider {...settings}>

        {slides.map((slide, index) => (
          <div key={index}>

            <img
              src={slide.image}
              alt="banner"
              className="w-full h-[90vh] object-cover"
            />

          </div>
        ))}

      </Slider>

    </div>
  );
}

export default EnquirySliderComponent;