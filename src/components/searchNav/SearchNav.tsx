import React from "react";
import "./search.scss";
import searchIcon from "../../assets/search.svg";
import arrow from "../../assets/rightArrow.svg";
const SearchNav: React.FC = () => {
  return (
    <div className="seach_nav_container">
      <div className="search_nav_input_container">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="" />
      </div>
      <div className="seach_nav_first">
        <div className="search_nav_arrow">
          <select name="" id="">
            <option value="">Size per preview</option>
          </select>
        </div>
        <div className="search_nav_arrow_2">
          <p>Displaying 16/100 Results</p>
        </div>
      </div>
      <div className="search_nav_pages_btns">
        <u>Go to begning</u>
        <div className="search_nav_button active_nav_s_b">1</div>
        <div className="search_nav_button">2</div>
        <div className="search_nav_button_dots">...</div>

        <div className="search_nav_button">10</div>
        <div className="search_nav_line">1 |</div>
        <div className="search_nav_button">
          <img src={arrow} alt="" />
        </div>
        <u>Go to Last</u>
      </div>
    </div>
  );
};

export default SearchNav;
