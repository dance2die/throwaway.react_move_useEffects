import React from "react";
import ReactDOM from "react-dom";

import PostContext from "./Posts/Context";
import Posts from "./Posts";
import User from "./User";

import "./styles.css";

function App() {
  const [userId, setUserId] = React.useState(-1);

  const postValue = {
    onPostSelect: userId => {
      console.log(`userId`, userId);
      setUserId(userId);
    }
  };

  return (
    <PostContext.Provider value={postValue}>
      <div className="container">
        <article className="posts">
          <h1>Posts</h1>
          <Posts />
        </article>
        <article className="user">
          <User userId={userId} />
        </article>
      </div>
    </PostContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
