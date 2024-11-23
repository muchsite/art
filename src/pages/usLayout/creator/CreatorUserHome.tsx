import React from "react";
import "./cuHome.scss";
import f from "../../../assets/1.jpeg";
import s from "../../../assets/1.jpeg";
import t from "../../../assets/1.jpeg";
import fo from "../../../assets/1.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const CreatorUserHome = () => {
  const planArr = [
    {
      title: "Family",
      price: 10,
      desc: "It's only right we give a little more to those who view us as family. You've invited us into your world and made the decision to be more than homies and for that, we are grateful.",
      list: [
        "At least 2 JBP bonus videos per month",
        "1 personal vlog per month",
        "Merch discounts",
        "Live event pre-sale codes",
        "PLUS everything in the Homies tier!",
        "Discord access ",
      ],
    },
    {
      title: "Homies",
      price: 5,
      desc: "It's only right we give a little more to those who view us as family. You've invited us into your world and made the decision to be more than homies and for that, we are grateful.",
      list: [
        "At least 2 JBP bonus videos per month",
        "1 personal vlog per month",
        "Merch discounts",
        "Live event pre-sale codes",
        "PLUS everything in the Homies tier!",
        "Discord access ",
      ],
    },
    {
      title: "Friend of the Show",
      price: 25,
      desc: "It's only right we give a little more to those who view us as family. You've invited us into your world and made the decision to be more than homies and for that, we are grateful.",
      list: [
        "At least 2 JBP bonus videos per month",
        "1 personal vlog per month",
        "Merch discounts",
        "Live event pre-sale codes",
        "PLUS everything in the Homies tier!",
        "Discord access ",
      ],
    },
    {
      title: "Friend of the Show",
      price: 15,
      desc: "It's only right we give a little more to those who view us as family. You've invited us into your world and made the decision to be more than homies and for that, we are grateful.",
      list: [
        "At least 2 JBP bonus videos per month",
        "1 personal vlog per month",
        "Merch discounts",
        "Live event pre-sale codes",
        "PLUS everything in the Homies tier!",
        "Discord access ",
      ],
    },
    {
      title: "Friend of the Show",
      price: 25,
      desc: "It's only right we give a little more to those who view us as family. You've invited us into your world and made the decision to be more than homies and for that, we are grateful.",
      list: [
        "At least 2 JBP bonus videos per month",
        "1 personal vlog per month",
        "Merch discounts",
        "Live event pre-sale codes",
        "PLUS everything in the Homies tier!",
        "Discord access ",
      ],
    },
  ];
  const arr = [f, s, t, fo];
  const arr2 = [f, s, t, fo, f, s, t, fo];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="plans_slider_container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={"auto"}
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 200,
            depth: 50,
            modifier: 1,
            scale: 0.9,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="swiper_container"
        >
          {planArr.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="plan_item">
                  <div className="plan_item_titles">
                    <h3>{item.title}</h3>
                    <p>${item.price} /month</p>
                  </div>
                  <button>Join</button>
                  <p>{item.desc}</p>
                  <ul>
                    {item.list.map((l, i) => {
                      return <li key={i}>{l}</li>;
                    })}
                  </ul>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="creator_home_item">
          <div className="creator_home_item_title">
            <h3>Featured Posts</h3>
            <Link to="/posts">View all</Link>
          </div>
          <div className="creator_home_cards_container">
            {arr.map((item, index) => {
              return <Card data={{ img: item }} key={index} />;
            })}
          </div>
        </div>
        <div className="creator_home_item">
          <div className="creator_home_item_title">
            <h3>Series</h3>
            <Link to="/posts">View all</Link>
          </div>
          <div className="creator_home_cards_container">
            {arr.map((item, index) => {
              return <Card data={{ img: item }} key={index} />;
            })}
          </div>
        </div>
        <div className="creator_home_item">
          <div className="creator_home_item_title">
            <h3>All Posts</h3>
            <Link to="/posts">View all</Link>
          </div>
          <div className="creator_home_cards_container">
            {arr2.map((item, index) => {
              return <Card data={{ img: item }} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="plans_slider_container_moble">
        <Slider {...settings}>
          {planArr.map((item, index) => {
            return (
              <div className="plan_item" key={index}>
                <div className="plan_item_titles">
                  <h3>{item.title}</h3>
                  <p>${item.price} /month</p>
                </div>
                <button>Join</button>
                <p>{item.desc}</p>
                <ul>
                  {item.list.map((l, i) => {
                    return <li key={i}>{l}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default CreatorUserHome;
