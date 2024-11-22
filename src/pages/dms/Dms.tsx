import React from "react";
import "./dm.scss";
import d1 from "../../assets/dm1.svg";
import d2 from "../../assets/dm2.svg";
import d3 from "../../assets/dm3.svg";
import d4 from "../../assets/dm4.svg";
import d5 from "../../assets/dm5.svg";
import s1 from "../../assets/Status (1).svg";
import s2 from "../../assets/Status (2).svg";
import s3 from "../../assets/Status (3).svg";
import s4 from "../../assets/Status (4).svg";
import s5 from "../../assets/Status (5).svg";
import dmMan from "../../assets/dmm.svg";
import dmHelp from "../../assets/dmHelp.svg";
import dmNew from "../../assets/dmNew.svg";
import inbox from "../../assets/Inbox.svg";
import plus from "../../assets/Plus.svg";
import profilePicture from "../../assets/ProfilePicture.svg";
import mute from "../../assets/Mute.svg";
import deafen from "../../assets/Deafen.svg";
import settings from "../../assets/Settings.svg";

const Dms = () => {
  const dmArr = [
    {
      img: d1,
      status: s1,
      name: "Nelly",
      desc: "Listening to Spotify",
    },
    {
      img: d2,
      status: s2,
      name: "Clyde",
      desc: "Playing Among Us",
    },
    {
      img: d3,
      status: s3,
      name: "Locke",
      desc: "I’m on a hike trip today!",
    },
    {
      img: d4,
      status: s4,
      name: "Phibi",
      desc: "Playing GTA",
    },
    {
      img: d5,
      status: s5,
      name: "Wumpus",
      desc: "Streaming Minecraft",
    },
  ];
  return (
    <div className="dm_container">
      <div className="dm_head">
        <div className="dm_head_btn">
          <button>Find or start a conversation</button>
        </div>
        <div className="dm_right_head">
          <div className="dm_man">
            <img src={dmMan} alt="" />
            <p>Messages</p>
          </div>
          <div className="dm_btns">
            <img src={dmNew} alt="" />
            <div className="dm_line">|</div>
            <img src={inbox} alt="" />
            <img src={dmHelp} alt="" />
          </div>
        </div>
      </div>
      <div className="dm_body_continer">
        <div className="dm_left">
          <div className="dm_left_top">
            <div className="dm_left_title">
              <img src={dmMan} alt="" />
              <h2>Friends</h2>
            </div>
            <div className="d_messages_container">
              <p>DIRECT MESSAGES</p>
              <img src={plus} alt="" />
            </div>
            <div className="dm_left_items">
              {dmArr.map((item, index) => {
                return (
                  <div className="dm_left_item" key={index}>
                    <div className="dm_left_avatar_container">
                      <img src={item.img} alt="" className="dm_left_avatar" />
                      <img
                        src={item.status}
                        alt=""
                        className="dm_left_status"
                      />
                    </div>

                    <div className="dm_left_item_text">
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="dm_left_bottom">
            <div className="dm_user_profile_container">
              <div className="dm_user_avatar_container">
                <img src={profilePicture} alt="" className="dm_left_avatar" />
                <img src={s5} alt="" className="dm_left_status" />
              </div>
              <div className="dm_user_item_text">
                <h3>bawwub</h3>
                <p>#0001</p>
              </div>
            </div>
            <div className="dm_user_buttons">
              <img src={mute} alt="" />
              <img src={deafen} alt="" />
              <img src={settings} alt="" />
            </div>
          </div>
        </div>
        <div className="dm_right">
          <p className="dm_right_title">ONLINE - {dmArr.length}</p>
          <div className="dm_right_items">
            {dmArr.map((item, index) => {
              return (
                <div className="dm_right_item" key={index}>
                  <div className="dm_right_avatar_container">
                    <img src={item.img} alt="" className="dm_right_avatar" />
                    <img src={item.status} alt="" className="dm_right_status" />
                  </div>
                  <div className="dm_right_item_text">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dms;
