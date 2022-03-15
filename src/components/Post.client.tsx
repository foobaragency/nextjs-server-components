import React from "react";
import { Post as PostType, User } from "../types";

interface PostItem {
  data: PostType;
  comments: Comment[];
  users: User[];
}

export default function Post({ data, comments, users }: PostItem) {
  return (
    <>
      <div className="Post">
        <div className="Post__container">
          <h4 className="Post__title">{data.title}</h4>
          <p className="Post__body">{data.body}</p>
        </div>
        <div className="Post__footer">
          <div className="Comments">{`${comments.length} Comments`}</div>
          <div className="Users">{`${users.length} Users`}</div>
        </div>
      </div>

      <style jsx>{`
        .Post {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-basis: 25%;
          background: #f6f6f6;
          padding: 2rem;
        }

        .Post__container {
          display: flex;
          flex-direction: column;
        }

        .Post__title {
          font-size: 18px;
          text-transform: uppercase;
          margin: 0;
          margin-bottom: 3px;
          line-height: 24px;
        }

        .Post__body {
          font-size: 15px;
        }

        .Post__footer {
          display: flex;
          gap: 1rem;
        }
      `}</style>
    </>
  );
}
