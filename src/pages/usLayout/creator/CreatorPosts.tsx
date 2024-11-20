import React from "react";
import "./cuHome.scss";
import f from "../../../assets/1.jpeg";
import s from "../../../assets/1.jpeg";
import t from "../../../assets/1.jpeg";
import fo from "../../../assets/1.jpeg";
import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";

const CreatorPosts = () => {
  const arr = [f, s, t, fo];
  const arr2 = [f, s, t, fo, f, s, t, fo];
  return (
    <>
      <div className="creator_home_item">
        <div className="creator_home_item_title">
          <h3>Featured Posts</h3>
          <Link to="/posts">View all</Link>
        </div>
        <div className="creator_home_cards_container">
          {arr.map((item, index) => {
            return <Card data={{ img: item }} key={index} />;
          })}
        </div>
      </div>
      <div className="creator_home_item">
        <div className="creator_home_item_title">
          <h3>Series</h3>
          <Link to="/posts">View all</Link>
        </div>
        <div className="creator_home_cards_container">
          {arr.map((item, index) => {
            return <Card data={{ img: item }} key={index} />;
          })}
        </div>
      </div>
      <div className="creator_home_item">
        <div className="creator_home_item_title">
          <h3>All Posts</h3>
          <Link to="/posts">View all</Link>
        </div>
        <div className="creator_home_cards_container">
          {arr2.map((item, index) => {
            return <Card data={{ img: item }} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CreatorPosts;
