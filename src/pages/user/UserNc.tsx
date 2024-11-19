import React from "react";
import "./user.scss";
import profile from "../../assets/profile.jpeg";
import edit from "../../assets/editUser.svg";
import { Link, useSearchParams } from "react-router-dom";
import UserNcHome from "./UserNcHome";
import UserNcAbout from "./UserNcAbout";
import UserNcSettings from "./UserNcSettings";
const UserNc: React.FC = () => {
  const [searchParams] = useSearchParams();
  const home = searchParams.get("home");
  const about = searchParams.get("about");
  const settings = searchParams.get("settings");
  return (
    <div className="user_container">
      <div className="user_hero">
        <img src={edit} className="edit_user_icon" alt="" />
        <div className="user_info">
          <img src={profile} alt="" />
          <div className="user_text">
            <h2>Smentha Diamond</h2>
            <div className="user_stats">
              <p>12K followers</p>
              <p>|</p>
              <p>1273 Likes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="user_nav">
        <Link
          to="/user?home=true"
          className={`user_page_link ${home && "active_nav_user_page"}`}
        >
          Home
        </Link>
        <Link
          to="/user?about=true"
          className={`user_page_link ${about && "active_nav_user_page"}`}
        >
          About
        </Link>
        <Link
          to="/user?settings=true"
          className={`user_page_link ${settings && "active_nav_user_page"}`}
        >
          Settings
        </Link>
      </div>
      {home && <UserNcHome />}
      {about && <UserNcAbout />}
      {settings && <UserNcSettings />}
    </div>
  );
};

export default UserNc;
