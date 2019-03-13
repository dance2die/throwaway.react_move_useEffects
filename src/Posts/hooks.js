import { useState, useEffect } from "react";
import { getPosts } from "./repository";

function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      getPosts().then(setPosts);
    },
    [setPosts]
  );

  return posts;
}

export { usePosts };
