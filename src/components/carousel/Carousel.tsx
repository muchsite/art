import React from "react";
import i1 from "../../assets/1.jpeg";
import i2 from "../../assets/2.jpeg";
import i3 from "../../assets/3.jpeg";
import i4 from "../../assets/4.jpeg";
import Slider from "react-slick";
import "./c.scss";
const Carousel: React.FC = () => {
  const arr = [i1, i2, i3, i4, i1, i2, i3];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    dots: false,
    responsive: [
      {
        breakpoint: 1164,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {arr.map((item) => {
            return (
              <div className="custom_slide">
                <img src={item} alt="" className="" />;
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
