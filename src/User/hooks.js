import { useState, useEffect } from "react";

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

      const getUserUrl = () =>
        `https://jsonplaceholder.typicode.com/users/${userId}`;

      async function getUser() {
        const user = await fetch(getUserUrl()).then(_ => _.json());

        console.log(`didCancel`, didCancel);
        if (didCancel) {
          console.log(`canceled user!`);
        } else {
          setUser(user);
        }
      }

      getUser();

      return () => {
        didCancel = true;
      };
    },
    [userId]
  );

  return user;
}

export { useUser };
