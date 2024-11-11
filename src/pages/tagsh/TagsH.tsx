import React from "react";
import searchImg from "../../assets/search.svg";
import "./th.scss";
import Carousel from "../../components/carousel/Carousel";
import s from "../../assets/search.svg";
import c from "../../assets/camera.svg";
const TagsH: React.FC = () => {
  return (
    <div className="tagsh_container">
      <div className="tagsh_search">
        <input type="text" placeholder="Search" />
        <img src={searchImg} alt="" />
      </div>
      <div className="tagsh_body">
        <h2>How to use Command/Tags</h2>
        <div className="tags_text">
          <h3>Comprehensive guide to generated artwork creation</h3>
          <p>
            To use commands/tags on art pages, first identify the specific tag
            needed (e.g., for categorization or filtering). Then, enter the tag
            in the designated field or area provided by the platform. Apply the
            tag by pressing 'Enter' or clicking 'Save'. Ensure tags are relevant
            to the artwork for better visibility and organization.
          </p>
        </div>
        <div className="tags_carusel_container">
          <Carousel />
        </div>
        <div className="tags_help_items_container">
          <h3>Basic Commands to use</h3>
          <div className="tags_help_items">
            <h4>1. Keyword Search</h4>
            <p>
              Type a keyword for content related search. i.e.{" "}
              <span>Landscape</span>
            </p>
            <div className="tags_help_input">
              <div className="tags_search_input">
                <img src={s} alt="" className="th_search" />
                <input type="text" placeholder="Search" />
              </div>
              <div className="tags_search_camera_container">
                <img src={c} alt="" className="th_camera" />
              </div>
            </div>
          </div>
          <div className="tags_help_items">
            <h4>2. Tag Search</h4>
            <p>
              Select a tag. i.e.
              <span>Portrait</span>
            </p>
            <div className="tag_help_tags">
              <p>Poupart</p>
              <p>Photography</p>
            </div>
          </div>
          <div className="tags_help_items">
            <h4>3. Artist Search</h4>
            <p>
              Use the artist prefix to search the work by a specific artist.
              i.e.
              <span>Landscape</span>
            </p>
            <div className="tags_help_input">
              <div className="tags_search_input">
                <img src={s} alt="" className="th_search" />
                <input type="text" placeholder="Search" />
              </div>
              <div className="tags_search_camera_container">
                <img src={c} alt="" className="th_camera" />
              </div>
            </div>
          </div>
          <div className="tags_help_items">
            <h4>4. Combine keywords</h4>
            <p>
              Combine keywords tags and artists to refine search i.e.
              <span>Stepehen,landscape</span>
            </p>
            <div className="tags_help_input">
              <div className="tags_search_input">
                <img src={s} alt="" className="th_search" />
                <input type="text" placeholder="Search" />
              </div>
              <div className="tags_search_camera_container">
                <img src={c} alt="" className="th_camera" />
              </div>
            </div>
          </div>
          <div className="tags_help_items">
            <h4>5. Exact Match</h4>
            <p>
              Use quotes to search for an exact match. i.e.
              <span>“Landscape”</span>
            </p>
            <div className="tags_help_input">
              <div className="tags_search_input">
                <img src={s} alt="" className="th_search" />
                <input type="text" placeholder="Search" />
              </div>
              <div className="tags_search_camera_container">
                <img src={c} alt="" className="th_camera" />
              </div>
            </div>
          </div>
          <div className="tags_help_items">
            <h4>Common tags can be used</h4>
            <div className="tag_help_tags">
              <p>Poupart</p>
              <p>Photography</p>
              <p>Poupart</p>
              <p>Photography</p>
              <p>Poupart</p>
              <p>Photography</p>
              <p>Poupart</p>
              <p>Photography</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsH;
