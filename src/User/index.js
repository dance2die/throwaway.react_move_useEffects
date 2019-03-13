import React from "react";
import { useUser } from "./hooks";

function User({ userId }) {
  const { id, name, username, email } = useUser(userId);

  return (
    <>
      <h2>id: {id}</h2>
      <ul>
        <li>name: {name}</li>
        <li>username: {username}</li>
        <li>email: {email}</li>
      </ul>
    </>
  );
}

export default User;
