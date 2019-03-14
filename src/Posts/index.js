import React from "react";
import { usePosts } from "./hooks";

function Post({ post, setUserId }) {
  const { title } = post;
  const setUserIdCache = React.useCallback(() => setUserId(post.id), [
    post.id,
    setUserId
  ]);

  return (
    <li className="post" onClick={setUserIdCache}>
      <h2>{title}</h2>
    </li>
  );
}

function Posts({ setUserId }) {
  const posts = usePosts();

  const postsCache = React.useMemo(
    () =>
      posts
        .filter((_, i) => i < 10)
        .map(post => <Post key={post.id} post={post} setUserId={setUserId} />),
    [posts, setUserId]
  );

  return <ol>{postsCache}</ol>;
}

export default React.memo(Posts);
