import React from "react";
import "./search.scss";
import searchIcon from "../../assets/search.svg";
import arrow from "../../assets/arrowDown.svg";
const SearchNav: React.FC = () => {
  return (
    <div className="seach_nav_container">
      <div className="search_nav_input_container">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="" />
      </div>
      <div className="search_nav_arrow">
        {/* <p>Size per preview</p>
        <img src={arrow} alt="" /> */}
        <select name="" id="">
          <option value="">Size per preview</option>
        </select>
      </div>
      <div className="search_nav_arrow_2">
        <p>Displaying 16/100 Results</p>
      </div>
      <div className="search_nav_pages_btns">
        <p>Go to begning</p>
        <p>Go to Last</p>
      </div>
    </div>
  );
};

export default SearchNav;
