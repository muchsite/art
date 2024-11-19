import React from "react";
import { Link } from "react-router-dom";
import f from "../../assets/1.jpeg";
import s from "../../assets/1.jpeg";
import t from "../../assets/1.jpeg";
import fo from "../../assets/1.jpeg";
import Card from "../../components/card/Card";
import p1 from "../../assets/profile.jpeg";
import p2 from "../../assets/profile2.jpeg";
import p3 from "../../assets/profile3.jpeg";
import p4 from "../../assets/profile4.jpeg";
import forum from "../../assets/forum.svg";
import "./userHome.scss";
import Followed from "../../components/followed/Followed";
const UserNcHome: React.FC = () => {
  const arr = [f, s, t, fo];
  const arrp = [
    { img: p1, name: "Smentha Diamond", proffesion: "Artist" },
    { img: p2, name: "Stephen", proffesion: "Artist" },
    { img: p3, name: "John", proffesion: "Artist" },
    { img: p2, name: "Diamond", proffesion: "Artist" },
    { img: p3, name: "Alee Shan", proffesion: "Artist" },
    { img: p4, name: "Smentha Diamond", proffesion: "Artist" },
    { img: p3, name: "John", proffesion: "Artist" },
    { img: p2, name: "Diamond", proffesion: "Artist" },
    { img: p2, name: "Diamond", proffesion: "Artist" },
    { img: p3, name: "Alee Shan", proffesion: "Artist" },
  ];
  const forumarray = [
    {
      title: "Art Tittle",
      desc: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
    },
    {
      title: "Art Tittle",
      desc: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
    },
    {
      title: "Art Tittle",
      desc: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
    },
    {
      title: "Art Tittle",
      desc: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
    },
    {
      title: "Art Tittle",
      desc: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
    },
  ];
  return (
    <div className="user_home_container">
      <div className="user_home_item">
        <div className="user_home_item_title">
          <h3>Favorites</h3>
          <Link to="/posts">View all</Link>
        </div>
        <div className="user_home_cards_container">
          {arr.map((item, index) => {
            return <Card data={{ img: item }} key={index} />;
          })}
        </div>
      </div>
      <div className="user_home_item">
        <div className="user_home_item_title">
          <h3>Liked Posts</h3>
          <Link to="/posts">View all</Link>
        </div>
        <div className="user_home_cards_container">
          {arr.map((item, index) => {
            return <Card data={{ img: item }} key={index} />;
          })}
        </div>
      </div>
      <div className="user_home_item">
        <div className="user_home_item_title">
          <h3>Liked Posts</h3>
          <Link to="/posts">View all</Link>
        </div>
        <div className="user_home_followed_container">
          {arrp.map((item, index) => {
            return <Followed data={item} key={index} />;
          })}
        </div>
      </div>
      <div className="user_home_item">
        <div className="user_home_item_title">
          <h3>Recently viewed content </h3>
          <Link to="/posts">View all</Link>
        </div>
        <div className="user_home_cards_container">
          {arr.map((item, index) => {
            return <Card data={{ img: item }} key={index} />;
          })}
        </div>
      </div>
      <div className="user_home_item">
        <div className="user_home_forum_title">
          <img src={forum} alt="" />
          <h3>Forum Posts</h3>
        </div>
        <div className="user_home_forum_container">
          {forumarray.map((item, index) => {
            return (
              <div className="user_home_forum" key={index}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserNcHome;
