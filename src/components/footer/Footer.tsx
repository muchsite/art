import React from "react";
import "./footer.scss";
import { Link, NavLink } from "react-router-dom";
import applay from "../../assets/edit.svg";
import login from "../../assets/login.svg";
import square from "../../assets/square.svg";
import f from "../../assets/facebook.svg";
import i from "../../assets/instagram.svg";
import x from "../../assets/x.svg";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer_head">
        <div className="footer_btn">
          <img src={applay} alt="" />
          <p>Apply for account</p>
        </div>
        <div className="footer_links">
          <div className="nav_links">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending_nav" : isActive ? "active_nav" : ""
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending_nav" : isActive ? "active_nav" : ""
              }
              to="/posts"
            >
              Posts
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending_nav" : isActive ? "active_nav" : ""
              }
              to="/support"
            >
              Support
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending_nav" : isActive ? "active_nav" : ""
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending_nav" : isActive ? "active_nav" : ""
              }
              to="/tags"
            >
              Tags
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending_nav" : isActive ? "active_nav" : ""
              }
              to="/account"
            >
              Account
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending_nav" : isActive ? "active_nav" : ""
              }
              to="/tagshelp"
            >
              Tags Help
            </NavLink>
          </div>
        </div>
        <div className="footer_sign">
          <button>
            <img src={login} alt="" />
            <span>Sign In</span>
          </button>
          <img src={square} alt="" />
        </div>
      </div>
      <div className="footer_body">
        <div className="f_body_f">
          <p>LOGO</p>
          <div className="footer_social">
            <img src={f} alt="" />
            <img src={i} alt="" />
            <img src={x} alt="" />
          </div>
        </div>
        <div className="footer_body_s_container">
          <div className="footer_body_s">
            <p>Creators</p>
            <p>Posts</p>
            <p>Creators</p>
            <p>Events</p>
            <p>About Site</p>
            <p>Support</p>
            <p>Creators</p>
          </div>
          <div className="footer_body_s">
            <p>Creators</p>
            <p>Posts</p>
            <p>Creators</p>
            <p>Events</p>
            <p>About Site</p>
            <p>Support</p>
            <p>Creators</p>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>@company name</p>
        <div className="footer_line"></div>
        <p>All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
