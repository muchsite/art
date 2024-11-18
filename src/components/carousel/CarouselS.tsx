import React from "react";
import i1 from "../../assets/1.jpeg";
import i2 from "../../assets/2.jpeg";
import i3 from "../../assets/3.jpeg";
import i4 from "../../assets/4.jpeg";
import Slider from "react-slick";
import disLike from "../../assets/dislike.svg";
import like from "../../assets/like.svg";
import fav from "../../assets/favorite.svg";
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
          {arr.map((item, index) => {
            return (
              <div className="custom_slideS" key={index}>
                <div className="custom_slides_back">
                  <img src={item} alt="" className="custom_slideS_img" />
                  <div className="carousel_buttons">
                    <button className="bhs_like">
                      <img src={like} alt="like" />
                      <p>18.1k</p>
                    </button>
                    <button className="bhs_dislike">
                      <img src={disLike} alt="dislike" />
                      <p>16</p>
                    </button>
                    <button className="bhs_fav">
                      <img src={fav} alt="favorite" />
                      <p>18k</p>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
