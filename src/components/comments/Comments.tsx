import React, { useState } from "react";
import "./comments.scss";
import avatar from "../../assets/av1.png";
import avatar2 from "../../assets/av2.png";
import avatar3 from "../../assets/av3.png";
import { CommentType } from "./type";
import Comment from "./Comment";

const Comments: React.FC = () => {
  const [updateHeight, setUpdateHeight] = React.useState<boolean>(false);
  const [comments, setComments] = useState<CommentType[]>([
    {
      id: 1,
      img: avatar,
      name: "stephen",
      time: "2 weeks ago",
      text: "Top Level Comment",
      likes: 3,
      dislikes: 1,
      level: 1,
      replies: [
        {
          id: 1,
          img: avatar2,
          name: "stephen",
          time: "2 weeks ago",
          text: "Reply 1 level",
          likes: 3,
          dislikes: 1,
          level: 2,
          replies: [
            {
              id: 1,
              img: avatar3,
              name: "stephen",
              time: "2 weeks ago",
              text: "Reply 2 level",
              likes: 3,
              dislikes: 1,
              level: 3,
              replies: [],
            },
          ],
        },
        {
          id: 1,
          img: avatar3,
          name: "stephen",
          time: "2 weeks ago",
          text: "Reply 1 level",
          likes: 3,
          dislikes: 1,
          level: 2,
          replies: [],
        },
      ],
    },
    {
      id: 2,
      img: avatar2,
      name: "stephen",
      time: "2 weeks ago",
      text: "Fusce egestas venenatis lorem. Nunc tristique, nisl at hendrerit sodales, justo",
      likes: 3,
      dislikes: 1,
      level: 1,
      replies: [],
    },
  ]);

  return (
    <div className="comments_container">
      <div className="comment_input">
        <img src={avatar} alt="" />
        <textarea name="" id="" placeholder="Add a comment..."></textarea>
      </div>
      <p className="comments_header">Comments 03</p>
      <div className="comments">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            updateHeight={updateHeight}
            setUpdateHeight={setUpdateHeight}
            comment={comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
