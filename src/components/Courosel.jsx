import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import foto1 from '../assets/benner1.png';
import foto2 from '../assets/benner2.png';
import foto3 from '../assets/benner3.png';
import foto4 from '../assets/benner4.png';

const Carousel = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    customPaging: function (i) {
        return (
          <div
            className={`w-3 h-3 mt-2 mx-2 rounded-full border-2 border-secound ${
              currentSlide === i ? "bg-secound" : "bg-white"
            }`}
          ></div>
        );
      },
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="max-w-screen-xl object-cover mx-auto relative">
      {true ? (
        <Slider className="" ref={sliderRef} {...settings}>
          <div>
            <img src={foto1} alt="Foto 1" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <img src={foto2} alt="Foto 2" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <img src={foto3} alt="Foto 3" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <img src={foto4} alt="Foto 4" className="w-full h-full object-cover rounded-xl" />
          </div>
        </Slider>
      ) : null}
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 -left-12 shadow-lg transform -translate-y-1/2 hover:text-white text-4xl hover:bg-secound rounded-full text-secound bg-white focus:outline-none"
      >
        <BiChevronLeft />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 -right-12  shadow-lg transform -translate-y-1/2 hover:text-white text-4xl hover:bg-secound rounded-full text-secound bg-white focus:outline-none"
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
