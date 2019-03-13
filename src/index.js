import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const PostContext = React.createContext();

function Post({ post }) {
  const { id, userId, title, body } = post;
  const postContext = React.useContext(PostContext);

  return (
    <li className="post" onClick={e => postContext.onPostSelect(id)}>
      <h2>{title}</h2>
    </li>
  );
}

function User({ userId }) {
  const [user, setUser] = React.useState({
    id: -1,
    name: "",
    username: "",
    email: ""
  });

  React.useEffect(
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

function App() {
  const [posts, setPosts] = React.useState([]);
  const [userId, setUserId] = React.useState(-1);

  React.useEffect(
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
          <ol>
            {posts
              .filter((_, i) => i < 10)
              .map(post => (
                <Post key={post.id} post={post} />
              ))}
          </ol>
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
