import React from "react";
import PostContext from "./Context";
import { usePosts } from "./hooks";

function Post({ post }) {
  const { id, title } = post;
  const postContext = React.useContext(PostContext);

  return (
    <li className="post" onClick={e => postContext.onPostSelect(id)}>
      <h2>{title}</h2>
    </li>
  );
}

function Posts() {
  const posts = usePosts();

  return (
    <ol>
      {posts
        .filter((_, i) => i < 10)
        .map(post => (
          <Post key={post.id} post={post} />
        ))}
    </ol>
  );
}

export default Posts;
