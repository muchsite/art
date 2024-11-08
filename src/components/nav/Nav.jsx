import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import login from "../../assets/login.svg";
import square from "../../assets/square.svg";
import applay from "../../assets/edit.svg";
const Nav = () => {
  return (
    <nav>
      <div className="nav_logo">LOGO</div>
      <div className="nav_links">
        <Link>Creators</Link>
        <Link>Posts</Link>
        <Link>Events</Link>
        <Link>About Site</Link>
        <Link>Support</Link>
      </div>
      <div className="nav_btns">
        <div className="nav_apply_btn">
          <img src={applay} alt="" />
          <p>Apply for account</p>
        </div>
        <button>
          <img src={login} alt="" />
          <span>Sign In</span>
        </button>
        <img src={square} alt="" />
      </div>
    </nav>
  );
};

export default Nav;
