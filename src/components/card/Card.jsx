import React from "react";
import "./card.scss";
import disLike from "../../assets/dislike.svg";
import like from "../../assets/like.svg";
import fav from "../../assets/favorite.svg";
const Card = ({ data, key }) => {
  return (
    <div key={key} className="card_cont">
      <img src={data.img} alt="" className="card_image" />
      <div className="card_btns">
        <button className="bhs_like">
          <img src={like} alt="" />
          <p>18.1k</p>
        </button>
        <button className="bhs_dislike">
          <img src={disLike} alt="" />
          <p>16</p>
        </button>
        <button className="bhs_fav">
          <img src={fav} alt="" />
          <p>18k</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
