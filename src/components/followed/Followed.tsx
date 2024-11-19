import React from "react";
import un from "../../assets/followedUn.svg";
import follSave from "../../assets/followedSave.svg";
import "./followed.scss";
import fl from "../../assets/followLike.svg";
import flike from "../../assets/flike.svg";
interface FollowedData {
  img: string;
  name: string;
  proffesion: string;
}

interface FollowedProps {
  data: FollowedData;
}

const Followed: React.FC<FollowedProps> = ({ data }) => {
  return (
    <div className="followed_container">
      <div className="followed_top">
        <img src={data.img} alt="" className="followed_avatar" />
        <h4>{data.name}</h4>
        <p>{data.proffesion}</p>
      </div>
      <div className="followed_buttons">
        <button className="followed_unf_btn">
          <img src={un} alt="" />
          <span>Un Follow</span>
        </button>
        <button className="followed_save_btn">
          <img src={follSave} alt="" />
          <span>Save</span>
        </button>
      </div>
      <div className="followed_likes">
        <div className="followed_like">
          <img src={fl} alt="" />
          <p>1.8k</p>
        </div>
        <div className="followed_like">
          <img src={flike} alt="" />
          <p>1.8k</p>
        </div>
      </div>
    </div>
  );
};

export default Followed;
