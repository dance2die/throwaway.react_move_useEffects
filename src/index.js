import React, { useState, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";

import Posts from "./Posts";
import User from "./User";

import "./styles.css";

function App() {
  const [userId, setUserId] = useState(-1);

  // const setUserIdCache = useCallback(id => setUserId(id), [userId]);
  // const userIdCache = useMemo(() => userId, [userId]);

  return (
    <div className="container">
      <article className="posts">
        <h1>Posts</h1>
        <Posts setUserId={setUserId} />
      </article>
      <article className="user">
        <User userId={userId} />
      </article>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
