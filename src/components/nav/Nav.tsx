import React, { useEffect, useState } from "react";
import "./nav.scss";

import login from "../../assets/login.svg";
import square from "../../assets/square.svg";
import applay from "../../assets/edit.svg";
import ham from "../../assets/ham.svg";
import close from "../../assets/close.svg";
import le from "../../assets/lefftArrow.svg";
import ri from "../../assets/rightArrow.svg";
import profile from "../../assets/profile.jpeg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../Context";
const Nav: React.FC = () => {
  const location = useLocation();
  const postNav = location.pathname.startsWith("/posts/");
  const navigate = useNavigate();
  const [openHam, setOpenHam] = useState(false);
  const [currentNav, setCurrentNav] = useState("creator");
  const [userMenu, setUserMenu] = useState(false);
  const handleNav = (val: string) => {
    setCurrentNav(val);
    navigate(`/posts/${val}`);
  };
  const handlefet = () => {
    if (currentNav === "creator") handleNav("series");
    if (currentNav === "series") handleNav("normal");
    if (currentNav === "normal") handleNav("creator");
  };
  const handright = () => {
    if (currentNav === "creator") handleNav("normal");
    if (currentNav === "normal") handleNav("series");
    if (currentNav === "series") handleNav("creator");
  };

  const { user, setUser } = useUser();
  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    setUserMenu(false);
    setUser("");
    navigate("/login");
  };
  return (
    <nav>
      {postNav ? (
        <div className="posts_nav">
          <button onClick={handlefet}>
            <img src={le} alt="" />
          </button>

          <select
            value={currentNav}
            onChange={(e) => handleNav(e.target.value)}
          >
            <option value="creator">Viewing as a Creator</option>
            <option value="normal">Viewing as a Normal</option>
            <option value="series">Viewing as a Series</option>
          </select>

          <button onClick={handright}>
            <img src={ri} alt="" />
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="nav_container">
        <div className="nav_logo">LOGO</div>
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
            to="/tagshelp"
          >
            Tags Help
          </NavLink>
        </div>
        {user ? (
          <div className="profile_img_container">
            <img
              src={profile}
              alt=""
              className="nav_profile"
              onClick={() => setUserMenu(!userMenu)}
            />
            {userMenu && (
              <div className="nav_profile_menu">
                <Link
                  onClick={() => setUserMenu(false)}
                  to={`${localStorage.getItem("userType")}?home=true`}
                >
                  Home
                </Link>
                <Link onClick={() => setUserMenu(false)} to="/stats">
                  Stats
                </Link>
                <Link onClick={() => setUserMenu(false)} to="/messages">
                  Messages
                </Link>
                <Link onClick={() => setUserMenu(false)} to="/store">
                  Store
                </Link>
                <Link onClick={() => setUserMenu(false)} to="/forums">
                  Forums
                </Link>
                <p onClick={handleLogOut}>Log Out</p>
              </div>
            )}
          </div>
        ) : (
          <div className="nav_btns">
            <Link to="/account" className="nav_apply_btn">
              <img src={applay} alt="" />
              <p>Apply for account</p>
            </Link>
            <Link to="/login">
              <button>
                <img src={login} alt="" />
                <span>Sign In</span>
              </button>
            </Link>
            <img src={square} alt="" className="nav_dots" />
            <div className="ham_cons" onClick={() => setOpenHam(!openHam)}>
              <img src={ham} alt="" className={`${openHam && "w_0"}`} />
              <img src={close} alt="" className={`${!openHam && "w_0"}`} />
            </div>
          </div>
        )}
        <div className={`nav_links_hamburger ${openHam && "ham_nav_cont"}`}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending_nav" : isActive ? "active_nav" : ""
            }
            to="/"
            onClick={() => setOpenHam(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending_nav" : isActive ? "active_nav" : ""
            }
            to="/posts"
            onClick={() => setOpenHam(false)}
          >
            Posts
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending_nav" : isActive ? "active_nav" : ""
            }
            to="/support"
            onClick={() => setOpenHam(false)}
          >
            Support
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending_nav" : isActive ? "active_nav" : ""
            }
            to="/about"
            onClick={() => setOpenHam(false)}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending_nav" : isActive ? "active_nav" : ""
            }
            to="/tags"
            onClick={() => setOpenHam(false)}
          >
            Tags
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending_nav" : isActive ? "active_nav" : ""
            }
            to="/tagshelp"
            onClick={() => setOpenHam(false)}
          >
            Tags Help
          </NavLink>
        </div>
        <div
          className={`nav_ham_back ${openHam && "ham_nav_back"}`}
          onClick={() => setOpenHam(false)}
        ></div>
      </div>
    </nav>
  );
};

export default Nav;
