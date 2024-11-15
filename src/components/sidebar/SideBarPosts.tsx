import React, { useState } from "react";
import remove from "../../assets/remove.svg";
import close from "../../assets/close.svg";
import spr from "../../assets/spr.svg";
import sun from "../../assets/sun.svg";
import "./sidebar.scss";
const SideBarPosts: React.FC = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);
  const [checked5, setChecked5] = useState(true);
  return (
    <div className="sidebar_container">
      <div className="sidebar_p_container">
        <div className="sdiebar_links">
          <div className="sidebar_link sidebar_active_link">
            <img src={spr} alt="" />
            <span>All Arts</span>
          </div>
          <div className="sidebar_link_post">
            <p>Popart</p>
            <img src={remove} alt="" />
          </div>
          <div className="sidebar_link_post">
            Landscape <img src={remove} alt="" />
          </div>
          <div className="sidebar_link_post">
            Photography <img src={remove} alt="" />
          </div>
          <div className="sidebar_link_post">
            Portrait <img src={remove} alt="" />
          </div>
          <div className="sidebar_link_post">
            Digitalart <img src={remove} alt="" />
          </div>
          <div className="sidebar_link_post">
            Watercolor <img src={remove} alt="" />
          </div>
          <div className="sidebar_link_post">
            Character Design <img src={remove} alt="" />
          </div>
          <div className="sidebar_link_all">
            Photography, Digitalart, Cosplay, Watercolor, Character Design,
            Concept Art
          </div>
        </div>
        <div className="tag_toggle">
          <div className="toggle_top">
            <label className="switch">
              <input
                type="checkbox"
                checked={checked1}
                onChange={(e) => setChecked1(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
            <p>Blocked Tags</p>
          </div>
          <div className="toggle_body">
            <div className="toggle_single">
              <p>Poupart</p>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={checked2}
                  onChange={(e) => setChecked2(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="toggle_single">
              <p>Landscape</p>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={checked3}
                  onChange={(e) => setChecked3(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="toggle_single">
              <p>Photography</p>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={checked4}
                  onChange={(e) => setChecked4(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="toggle_single">
              <p>Portrait</p>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={checked5}
                  onChange={(e) => setChecked5(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="sidebar_link_all">
              Photography, Digitalart, Cosplay, Watercolor, Character Design,
              Concept Art
            </div>
          </div>
        </div>
        <div className="sidebar_light">
          <img src={sun} alt="" />
          <p>Light Mode</p>
        </div>
      </div>
    </div>
  );
};

export default SideBarPosts;
