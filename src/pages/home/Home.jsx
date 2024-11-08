import React from "react";

import homeLogo from "../../assets/logo.png";
import homeSearchImage from "../../assets/homeSearch.svg";
import search from "../../assets/search.svg";
import "./home.scss";
const Home = () => {
  return (
    <div className="home_container">
      <div className="home_text">
        <img src={homeLogo} alt="" />
        <h1>LOGO</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          repellat minus minima.
        </p>
      </div>
      <div className="home_input">
        <div className="home_onput_container">
          <input type="text" placeholder="Search" />
          <img src={search} alt="" />
        </div>
        <button>
          <span>Search with image</span>
          <img src={homeSearchImage} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Home;
