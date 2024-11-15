// Comment.tsx
import React, { useRef, useEffect, useState } from "react";
import { CommentType, CommentProps } from "./type";
import tips from "../../assets/buy-crypto.svg";
import rep from "../../assets/rep.svg";
import cLike from "../../assets/cLike.svg";
import cDislike from "../../assets/cDislike.svg";
import remove from "../../assets/remove.svg";
import "./comments.scss";
const Comment: React.FC<CommentProps> = ({
  comment,
  updateHeight,
  setUpdateHeight,
}) => {
  const [openReply, setOpenReply] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const divRef2 = useRef<HTMLDivElement | null>(null);
  const [divHeight, setDivHeight] = useState<number>(0);
  const [divHeight2, setDivHeight2] = useState<number>(0);

  useEffect(() => {
    const updateDivHeight = () => {
      if (divRef.current) {
        setDivHeight(divRef.current.offsetHeight - divHeight2 - 30);
      }
    };

    updateDivHeight();
  }, [updateHeight]);
  useEffect(() => {
    const updateDivHeight = () => {
      if (divRef2.current) {
        setDivHeight2(divRef2.current.offsetHeight);
      }
    };

    updateDivHeight();
  }, []);
  const handleOpen = () => {
    if (comment.replies.length > 0) {
      setOpenReply(!openReply);
      setUpdateHeight(!updateHeight);
    }
  };

  return (
    <div
      className="sc_container"
      style={{ marginLeft: `${comment.level === 1 ? "0px" : "30px"}` }}
      ref={divRef}
    >
      <div className="single_comment_container" ref={divRef2}>
        <div className="s_comment_left">
          <div className="s_comment_content">
            <img src={comment.img} alt="" />
            <div className="s_comment_info">
              <div className="s_comment_names">
                <h3>@{comment.name}</h3>
                <p>{comment.time}</p>
              </div>
              <p className="comment_text">{comment.text}</p>
            </div>
          </div>
          <div className="s_comment_btns">
            <div className="s_comment_btn" onClick={handleOpen}>
              <img src={rep} alt="" />
              <p>Reply ({comment.replies.length})</p>
            </div>
            <div className="s_comment_btn">
              <img src={cLike} alt="" />
              <p>{comment.likes}</p>
            </div>
            <div className="s_comment_btn">
              <img src={cDislike} alt="" />
              <p>{comment.dislikes}</p>
            </div>
          </div>
        </div>
        <div className="s_comment_right">
          <img src={tips} alt="" />
          <p>Tip</p>
        </div>
        {openReply && (
          <div
            className="comment_bar"
            style={{ height: divHeight }}
            onClick={handleOpen}
          >
            <button>
              <img src={remove} alt="" />
            </button>
          </div>
        )}
      </div>

      {openReply &&
        comment.replies.map((reply) => (
          <Comment
            key={reply.id}
            comment={reply}
            updateHeight={updateHeight}
            setUpdateHeight={setUpdateHeight}
          />
        ))}
    </div>
  );
};

export default Comment;
