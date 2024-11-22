import React from "react";
import "./forums.scss";
import SearchNav from "../../components/searchNav/SearchNav";
import menu from "../../assets/menu.svg";
import search from "../../assets/search.svg";
import sun from "../../assets/sun.svg";
import close from "../../assets/close.svg";
import heroIcon from "../../assets/trend-up.svg";
import line from "../../assets/forum.svg";
import hero from "../../assets/2.jpeg";
const Forums = () => {
  const forumArr = [
    {
      title: "Art Tittle",
      desc: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
    },
    {
      title: "Art Tittle",
      desc: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
    },
    {
      title: "Art Tittle",
      desc: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
    },
    {
      title: "Art Tittle",
      desc: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
    },
    {
      title: "Art Tittle",
      desc: "Lorem ipsum dolor sit amet, elit consectetur adipiscing elit",
    },
  ];
  return (
    <div className="forum_container">
      <div className="forum_left">
        <div className="forum_details_btn">
          <div className="forum_details_left">
            <img src={menu} alt="" />
            <p>Detailss</p>
          </div>
          <img src={close} className="forum_details_close" alt="" />
        </div>
        <div className="forum_left_sidebar">
          <div className="forum_left_sidebar_top">
            <div className="forums_search_container">
              <input type="text" placeholder="Search Thread " />
              <img src={search} alt="" />
            </div>
            <div className="forum_threads">
              <h3>Thread Meta Status:</h3>
              <ul>
                <li>Total number of threads</li>
                <li>Total number of posts</li>
                <li>Most active thread</li>
                <li>Most viewed thread.</li>
                <li>Top contributor</li>
              </ul>
            </div>
            <div className="forum_topics">
              <h3>Topic Categories</h3>
              <ul>
                <li>Technical Support</li>
                <li>Site Feedback</li>
                <li>Discussion</li>
                <li>Security and Saftey</li>
              </ul>
            </div>
            <div className="forum_filter">
              <h3>Filter Thread by: </h3>
              <select name="" id="">
                <option value="">Date Posted</option>
              </select>
              <select name="" id="">
                <option value="">Least Popular</option>
              </select>
            </div>
          </div>
          <div className="forum_light">
            <img src={sun} alt="" />
            <p>Light Mode</p>
          </div>
        </div>
      </div>
      <div className="forum_right">
        <SearchNav />
        <div className="forum_hero">
          <div className="forum_hero_title">
            <img src={heroIcon} alt="" className="forum_hero_icon" />
            <h2>Events/Announcements</h2>
          </div>
          <div className="forum_hero_body">
            <img src={hero} alt="" className="home_hero_image" />
            <div className="home_hero_text">
              <h3>Art Tittle</h3>
              <p>
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="forum_items_container">
            <div className="forum_tiem_title">
              <img src={line} alt="" />
              <h4>Pinned Threads</h4>
            </div>
            <div className="forum_items">
              {forumArr.map((item, index) => {
                return (
                  <div className="forum_item" key={index}>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="forum_items_container">
            <div className="forum_tiem_title">
              <img src={line} alt="" />
              <h4>Pinned Threads</h4>
            </div>
            <div className="forum_items">
              {forumArr.map((item, index) => {
                return (
                  <div className="forum_item" key={index}>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forums;
