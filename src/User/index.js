import React from "react";
import { useUser } from "./hooks";

function User({ userId }) {
  const user = useUser(userId);

  return (
    <>
      <h2>id: {user.id}</h2>
      <ul>
        <li>name: {user.name}</li>
        <li>username: {user.username}</li>
        <li>email: {user.username}</li>
      </ul>
    </>
  );
}

export default User;
