import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ settings, children }) => {
  return (
    <div className="carousel">
      <Slider {...settings}>
        {children}
        </Slider>
    </div>
  );
};

export default Carousel;
