import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import "./normal.scss";
import f from "../../assets/1.jpeg";
import f2 from "../../assets/2.jpeg";
import f3 from "../../assets/3.jpeg";
import f4 from "../../assets/4.jpeg";
import Card from "../../components/card/Card";
import hm from "../../assets/hm.jpeg";
import disLike from "../../assets/dislike.svg";
import like from "../../assets/like.svg";
import fav from "../../assets/favorite.svg";
import tips from "../../assets/buy-crypto.svg";
import down from "../../assets/download.svg";
import profile from "../../assets/profile.jpeg";
import SearchNav from "../../components/searchNav/SearchNav";
import avatar from "../../assets/av1.png";
const Normal: React.FC = () => {
  const arr = [
    { img: f, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f2, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f3, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f4, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f3, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f4, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f2, likes: "1.81k", dislikes: "16", favs: "1.8k" },
  ];
  return (
    <>
      <div className="normal_contanier">
        <div className="display_none_mobile">
          <SideBar />
        </div>
        <div className="blog_hero_width">
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
                    <p>Tip</p>
                  </button>
                  <button className="dow_btn">
                    <img src={down} alt="" />
                    <p>Download</p>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nec venenatis turpis. In ac hendrerit justo, sit amet rutrum
                  diam. Duis a lorem quis velit efficitur ullamcorper. Fusce
                  condimentum non magna sed ullamcorper. Praesent massa purus,
                  pellentesque eget aliquam ac, congue et dui. Aliquam ac
                  efficitur libero. Curabitur maximus accumsan auctor. Nunc
                  tincidunt eros non ante congue, a rhoncus quam vehicula.
                  Nullam eget egestas est, sed vestibulum enim. Fusce egestas
                  venenatis lorem. Nunc tristique, nisl at hendrerit sodales,
                  justo eros volutpat nisi, eu commodo nisi purus eget quam.
                  <span className="breack"></span>
                  Donec vulputate neque sit amet lacinia dapibus. Phasellus et
                  augue non lorem elementum malesuada. Nulla gravida velit
                  fringilla viverra condimentum. Maecenas vel est in erat congue
                  eleifend in vel ligula. Donec vel diam a ligula tincidunt
                  dapibus. Quisque vitae commodo orci, quis hendrerit purus.
                  Curabitur pellentesque convallis risus, sed euismod sem
                  pharetra et. Mauris iaculis rutrum diam at luctus Read More...
                </p>
                <div className="normal_input_section">
                  <img src={avatar} alt="" />
                  <textarea
                    name=""
                    id=""
                    placeholder="Add a comment..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="normal_cards_container">
            <h2>More posts by this creator</h2>
            <div className="display_none_desktop">
              <SideBar />
            </div>
            <div className="normal_cards">
              {arr.map((item, index) => {
                return <Card data={item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Normal;
