import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import BlogHero from "../../components/blogHero/BlogHero";
import "./normal.scss";
import f from "../../assets/1.jpeg";
import f2 from "../../assets/2.jpeg";
import f3 from "../../assets/3.jpeg";
import f4 from "../../assets/4.jpeg";
import Card from "../../components/card/Card";
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
    <div className="normal_contanier">
      <div className="display_none_mobile">
        <SideBar />
      </div>
      <div>
        <BlogHero />
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
  );
};

export default Normal;
