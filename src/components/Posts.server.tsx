import React, { FC, Suspense } from "react";
import useData from "../lib/useData";
import fetchData from "../lib/fetchData";
import { Spinner } from "./spinner";
import { Post, User } from "../types";

interface PostWithData {
  post: Post;
}

const PostWithUsers: FC<PostWithData> = ({ post }) => {
  // Demo Users for each post.
  const postUsers = useData<User[]>(`pu-${post.id}`, () =>
    fetchData(`https://jsonplaceholder.typicode.com/users`),
  );
  return <div className="Users">{`${postUsers.length} Users`}</div>;
};

const PostWithComments: FC<PostWithData> = ({ post }) => {
  const postComments = useData<Comment[]>(`pc-${post.id}`, () =>
    fetchData(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`),
  );
  return <div className="Comments">{`${postComments.length} Comments`}</div>;
};

const PostWithData: FC<PostWithData> = ({ post }) => {
  return (
    <div className="Post">
      <div className="Post__container">
        <h4 className="Post__title">{post.title}</h4>
        <p className="Post__body">{post.body}</p>
      </div>
      <div className="Post__footer">
        <Suspense fallback={<Spinner />}>
          <PostWithComments post={post} />
        </Suspense>

        <Suspense fallback={<Spinner />}>
          <PostWithUsers post={post} />
        </Suspense>
      </div>
    </div>
  );
};

export default function Posts() {
  const posts = useData<Post[]>("posts", () =>
    fetchData("https://jsonplaceholder.typicode.com/posts"),
  );

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div className="Posts">
          {posts.map((item) => {
            return (
              <Suspense key={item.id} fallback={<Spinner />}>
                <PostWithData key={item.id} post={item} />
              </Suspense>
            );
          })}
        </div>
      </Suspense>
    </>
  );
}
