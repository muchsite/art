import React from "react";
import "./list.scss";
import f from "../../assets/1.jpeg";
import f2 from "../../assets/2.jpeg";
import f3 from "../../assets/3.jpeg";
import f4 from "../../assets/4.jpeg";
import SideBar from "../../components/sidebar/SideBar";
import Card from "../../components/card/Card";
import SearchNav from "../../components/searchNav/SearchNav";
const List: React.FC = () => {
  const arr = [
    { img: f, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f2, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f3, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f4, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f3, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f4, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f2, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f2, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f3, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f4, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f3, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f4, likes: "1.81k", dislikes: "16", favs: "1.8k" },
    { img: f2, likes: "1.81k", dislikes: "16", favs: "1.8k" },
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
    <div className="list_container">
      {/* <div className="display_none_mobile">
        <SideBar />
      </div>
      <div className="display_none_desktop">
        <SearchNav />
      </div> */}

      <SideBar />
      <div>
        {/* <div className="display_none_mobile">
          <SearchNav />
        </div>
        <div className="display_none_desktop">
          <SideBar />
        </div> */}{" "}
        <SearchNav />
        <div className="list_cards_container">
          {arr.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
