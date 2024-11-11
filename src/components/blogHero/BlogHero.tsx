import React from "react";
import hm from "../../assets/hm.jpeg";
import "./blog.scss";
import disLike from "../../assets/dislike.svg";
import like from "../../assets/like.svg";
import fav from "../../assets/favorite.svg";
import tips from "../../assets/buy-crypto.svg";
import down from "../../assets/download.svg";
import profile from "../../assets/profile.jpeg";
import SearchNav from "../searchNav/SearchNav";
import Carousel from "../carousel/Carousel";
const BlogHero: React.FC = () => {
  return (
    <div className="blog_hero_container">
      <SearchNav />
      <div className="blog_hero">
        <div className="bh_image">
          <img src={hm} alt="" />
        </div>
        <div className="blog_hero_btns">
          <div className="blog_hero_likes_btn">
            <div className="bh_likes">
              <button>
                <img src={like} alt="" />
                <p>Like</p>
              </button>
              <button className="db_left_b">
                <img src={disLike} alt="" />
                <p>Dislike</p>
              </button>
            </div>
            <button className="faw_btn">
              <img src={fav} alt="" />
              <p>Favorite</p>
            </button>
          </div>
          <div className="blog_hero_tips">
            <button className="tips_btn">
              <img src={tips} alt="" />
              <p>Tips</p>
            </button>
            <button className="dow_btn">
              <img src={down} alt="" />
              <p>Downloads</p>
            </button>
          </div>
        </div>
        <div className="blog_hero_stats">
          <div className="blog_hero_info">
            <img src={profile} alt="" />
            <div className="blog_hero_r">
              <p>Name</p>
              <h3>Smentha Diamond</h3>
            </div>
          </div>
          <div className="blog_hero_stats_btns">
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
        <div className="blog_hero_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
            venenatis turpis. In ac hendrerit justo, sit amet rutrum diam. Duis
            a lorem quis velit efficitur ullamcorper. Fusce condimentum non
            magna sed ullamcorper. Praesent massa purus, pellentesque eget
            aliquam ac, congue et dui. Aliquam ac efficitur libero. Curabitur
            maximus accumsan auctor. Nunc tincidunt eros non ante congue, a
            rhoncus quam vehicula. Nullam eget egestas est, sed vestibulum enim.
            Fusce egestas venenatis lorem. Nunc tristique, nisl at hendrerit
            sodales, justo eros volutpat nisi, eu commodo nisi purus eget quam.
            <div className="breack"></div>
            Donec vulputate neque sit amet lacinia dapibus. Phasellus et augue
            non lorem elementum malesuada. Nulla gravida velit fringilla viverra
            condimentum. Maecenas vel est in erat congue eleifend in vel ligula.
            Donec vel diam a ligula tincidunt dapibus. Quisque vitae commodo
            orci, quis hendrerit purus. Curabitur pellentesque convallis risus,
            sed euismod sem pharetra et. Mauris iaculis rutrum diam at luctus
            Read More...
          </p>
          <div className="blog_carousel_container">
            <h3>Series</h3>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
