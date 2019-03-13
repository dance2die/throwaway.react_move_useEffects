import { useState, useEffect } from "react";

function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      async function getPosts() {
        const posts = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        ).then(_ => _.json());
        setPosts(posts);
      }

      getPosts();
    },
    [posts]
  );

  return posts;
}

export { usePosts };
