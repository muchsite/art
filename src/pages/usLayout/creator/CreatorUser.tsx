import React from "react";
import ed from "../../../assets/editUser.svg";
import edCreator from "../../../assets/editcreator.svg";
import profile from "../../../assets/profile.jpeg";
import "./creaoruser.scss";
import { Link, useSearchParams } from "react-router-dom";
import CreatorUserHome from "./CreatorUserHome";
import CreatorPosts from "./CreatorPosts";
const CreatorUser: React.FC = () => {
  const [searchParams] = useSearchParams();
  const home = searchParams.get("home");
  const posts = searchParams.get("posts");
  const series = searchParams.get("series");
  const store = searchParams.get("store");
  return (
    <div className="creator_container">
      <div className="creator_hero">
        <img src={ed} alt="" className="edit_creator_icon" />
      </div>
      <div className="creator_profile">
        <button className="edit_creator_btn">
          <img src={edCreator} alt="" />
          <p>Add Socials</p>
        </button>
        <div className="creator_img_container">
          <img src={profile} alt="" />
          <h2>Smentha Diamond</h2>
          <p>Add Headline</p>
        </div>
        <div className="creator_btns">
          <button className="c_btn">
            <img src={edCreator} alt="" />
            <p>Create</p>
          </button>
          <button className="c_dots_btn">
            <span>...</span>
          </button>
        </div>
      </div>
      <div className="creator_nav_container">
        <Link
          to="/creator?home=true"
          className={`creator_nav_link ${home && "cn_link_active"}`}
        >
          Home
        </Link>
        <Link
          to="/creator?posts=true"
          className={`creator_nav_link ${posts && "cn_link_active"}`}
        >
          Posts
        </Link>
        <Link
          to="/creator?series=true"
          className={`creator_nav_link ${series && "cn_link_active"}`}
        >
          Series
        </Link>
        <Link
          to="/creator?store=true"
          className={`creator_nav_link ${store && "cn_link_active"}`}
        >
          Store
        </Link>
      </div>
      {home && <CreatorUserHome />}
      {posts && <CreatorPosts />}
    </div>
  );
};

export default CreatorUser;
