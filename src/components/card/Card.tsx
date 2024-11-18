import React from "react";
import "./card.scss";
import disLike from "../../assets/dislike.svg";
import like from "../../assets/like.svg";
import fav from "../../assets/favorite.svg";
import { Link } from "react-router-dom";

interface CardData {
  img: string;
}

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="card_cont">
      <Link to="/posts/creator">
        <img src={data.img} alt="card" className="card_image" />
      </Link>
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
