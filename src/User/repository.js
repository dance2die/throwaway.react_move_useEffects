import { baseUrl, get } from "../core/repository";

function getUser(userId) {
  const usersUrl = `${baseUrl}/users/${userId}`;
  return get(usersUrl);
}

export { getUser };
