import React from "react";
import "./store.scss";
import SearchNav from "../../components/searchNav/SearchNav";
import im1 from "../../assets/1.jpeg";
import im2 from "../../assets/2.jpeg";
import im3 from "../../assets/3.jpeg";
import im4 from "../../assets/4.jpeg";
import CarouselStore from "../../components/carousel/CarouselStore";

const Store = () => {
  const storeArray = [
    {
      img: im1,
      title: "Art Category",
      p: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
      link: "Buy Virtual Tokens (VT)",
    },
    {
      img: im2,
      title: "Art Category",
      p: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
      link: "Buy Virtual Tokens (VT)",
    },
    {
      img: im3,
      title: "Art Category",
      p: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
      link: "Buy Virtual Tokens (VT)",
    },
    {
      img: im4,
      title: "Art Category",
      p: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
      link: "Buy Virtual Tokens (VT)",
    },
  ];
  return (
    <div className="store_container">
      <div className="store_quick">
        <SearchNav />
        <h2>Quick Stores</h2>
        <div className="store_items_container">
          {storeArray.map((item, index) => {
            return (
              <div className="store_item" key={index}>
                <img src={item.img} alt="" />
                <div className="store_item_back"></div>
                <div className="store_item_text">
                  <h3>{item.title}</h3>
                  <p>{item.p}</p>
                  <a href="">{item.link}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="store_f_items">
        <h2>Featured Items</h2>
        <CarouselStore />
      </div>
      <div className="store_products">
        <h2>Featured Products</h2>
        <div className="store_produscts_items">
          {storeArray.map((item, index) => {
            return (
              <div className="store_produscts_item" key={index}>
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Store;
