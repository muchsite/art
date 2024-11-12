import React, { Dispatch, SetStateAction } from "react";
export interface CommentType {
  id: number;
  text: string;
  img: string;
  name: string;
  time: string;
  likes: number;
  dislikes: number;
  replies: CommentType[];
  level: number;
}

export interface CommentProps {
  comment: CommentType;
  updateHeight: boolean;
  setUpdateHeight: Dispatch<SetStateAction<boolean>>;
}
