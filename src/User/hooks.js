import { useState, useEffect } from "react";
import { getUser } from "./repository";

function useUser(userId) {
  const [user, setUser] = useState({
    id: userId,
    name: "",
    username: "",
    email: ""
  });

  useEffect(
    () => {
      let didCancel = false;

      const setOrCancelUser = user =>
        didCancel ? console.log(`canceled user!`) : setUser(user);

      getUser(userId).then(setOrCancelUser);

      return () => {
        didCancel = true;
      };
    },
    [setUser, userId]
  );

  return user;
}

export { useUser };
