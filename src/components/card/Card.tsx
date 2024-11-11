import React from "react";
import "./card.scss";
import disLike from "../../assets/dislike.svg";
import like from "../../assets/like.svg";
import fav from "../../assets/favorite.svg";

interface CardData {
  img: string;
}

interface CardProps {
  data: CardData;
  key: string | number;
}

const Card: React.FC<CardProps> = ({ data, key }) => {
  return (
    <div key={key} className="card_cont">
      <img src={data.img} alt="card" className="card_image" />
      <div className="card_btns">
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
  );
};

export default Card;
