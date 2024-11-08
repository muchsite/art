import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import applay from "../../assets/edit.svg";
import login from "../../assets/login.svg";
import square from "../../assets/square.svg";
import f from "../../assets/facebook.svg";
import i from "../../assets/instagram.svg";
import x from "../../assets/x.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer_head">
        <div className="footer_btn">
          <img src={applay} alt="" />
          <p>Apply for account</p>
        </div>
        <div className="footer_links">
          <Link className="footer_active">About Site</Link>
          <Link>Forums</Link>
          <Link>Tags</Link>
          <Link>Events</Link>
          <Link>Artists</Link>
          <Link>Posts</Link>
          <Link>Support</Link>
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
    </footer>
  );
};

export default Footer;
