import { baseUrl, get } from "../core/repository";

function getPosts() {
  const postsUrl = `${baseUrl}/posts`;
  return get(postsUrl);
}

export { getPosts };
