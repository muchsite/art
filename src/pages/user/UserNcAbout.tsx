import React from "react";
import "./userAbout.scss";
import sc from "../../assets/Social icon.svg";
import sc1 from "../../assets/Social icon (1).svg";
import sc2 from "../../assets/Social icon (2).svg";
import sc3 from "../../assets/Social icon (3).svg";
import sc4 from "../../assets/Social icon (4).svg";
import sc5 from "../../assets/Social icon (5).svg";
import sc6 from "../../assets/Social icon (6).svg";

const UserNcAbout: React.FC = () => {
  return (
    <div className="user_about_container">
      <h2>About me</h2>
      <div className="user_about_text">
        <p>
          The Site of Arts is an expansive and immersive digital platform
          dedicated to showcasing diverse forms of artistic expression from
          around the world. Designed to be a virtual gallery, it offers artists,
          curators, and art enthusiasts a space to explore, share, and engage
          with a wide array of creative works, including paintings, sculptures,
          photography, digital art, and mixed media.
        </p>
        <p>Key Features:</p>
        <ol>
          <li>
            Virtual Galleries: The platform hosts curated galleries that feature
            themed exhibitions, individual artist showcases, and collaborative
            projects. Each gallery is designed to offer an interactive
            experience, allowing visitors to navigate through spaces as if they
            were in a physical museum.
          </li>
          <li>
            Artist Profiles: Artists from various disciplines can create
            detailed profiles, where they can display their portfolios, share
            their creative process, and connect with a global audience. These
            profiles often include artist statements, biographies, and links to
            social media or personal websites.
          </li>
          <li>
            Art Community: The Site of Arts fosters a vibrant community where
            artists, critics, and art lovers can engage in discussions, offer
            feedback, and collaborate on projects. The platform includes forums,
            comment sections, and live chat options to encourage interaction.
          </li>
          <li>
            Educational Resources: Beyond exhibitions, the site offers
            educational content such as art history articles, technique
            tutorials, and interviews with established artists. These resources
            are designed to inspire and educate both emerging artists and
            seasoned professionals.
          </li>
          <li>
            Online Events: Regularly scheduled events, including virtual artist
            talks, live art demonstrations, and panel discussions, provide
            opportunities for real-time engagement and learning. These events
            are often recorded and archived for later viewing.
          </li>
          <li>
            Art Market: For those interested in acquiring art, the platform
            includes a marketplace where original artworks, prints, and digital
            creations are available for purchase. The marketplace is designed
            with transparency in mind, offering detailed information about each
            piece and its creator.
          </li>
          <li>
            Customizable Experience: Users can personalize their experience on
            the Site of Arts by following specific artists, saving favorite
            works, and curating their own collections within their profile.
          </li>
        </ol>
      </div>
      <div className="user_about_social">
        <h3>External connections</h3>
        <div className="user_about_social_icons">
          <img src={sc} alt="" />
          <img src={sc2} alt="" />
          <img src={sc3} alt="" />
          <img src={sc4} alt="" />
          <img src={sc5} alt="" />
          <img src={sc6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserNcAbout;
