import React, { useState } from "react";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import sun from "../../assets/sun.svg";
import "./sidebar.scss";
const SideBar: React.FC = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);
  const [checked5, setChecked5] = useState(true);
  return (
    <div className="sidebar_container">
      <div className="sidebar_btn">
        <div className="sidvar_btn_div">
          <img src={menu} alt="" />
          <span>Details</span>
        </div>
        <img src={close} alt="" />
      </div>
      <div className="sdiebar_links">
        <div className="sidebar_link sidebar_active_link">All Arts</div>
        <div className="sidebar_link">Popart</div>
        <div className="sidebar_link">Landscape</div>
        <div className="sidebar_link">Photography</div>
        <div className="sidebar_link">Portrait</div>
        <div className="sidebar_link">Digitalart</div>
        <div className="sidebar_link">Watercolor</div>
        <div className="sidebar_link">Character Design</div>
        <div className="sidebar_link">
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
        </div>
      </div>
      <div className="sidebar_light">
        <img src={sun} alt="" />
        <p>Light Mode</p>
      </div>
    </div>
  );
};

export default SideBar;
