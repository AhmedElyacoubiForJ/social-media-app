import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";

interface Post {
  id: string;
  title: string;
  description: string;
  userId: string;
  username: string;
}

const Home = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const querySnapshot = await getDocs(postsRef);
    setPostsList(
      querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      }) as Post[]
    );
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
  <div>
    <h1>Home Page</h1>
    {postsList &&
      postsList.map((post) => (
        <div key={post.id}>
          <h2>Title: {post.title}</h2>
          <p>Post ID: {post.id}</p>
          <p>Description: {post.description}</p>
          <p>User Name: {post.username}</p>
          <p>User ID: {post.userId}</p>
        </div>
      ))}
  </div>
);
};

export default Home;
