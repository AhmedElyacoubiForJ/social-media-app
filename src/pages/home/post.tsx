import { Post as IPost } from "./home";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  post: IPost;
}

interface Like {
  userId: string;
}

const Post = (props: Props) => {
  const { post } = props;
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [likes, setLikes] = useState<Like[] | null>(null);

  const likesRef = collection(db, "likes");

  // query for likes
  const likesQuery = query(likesRef, where("postId", "==", post.id));

  // get likes docs
  const getLikes = async () => {
    const data = await getDocs(likesQuery);
    setLikes(
      data.docs.map((doc) => ({
        userId: doc.data().userId,
      }))
    );
    /* console.log(
      data.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      })
    ); */
  };

  const addLike = async () => {
    try {
      await addDoc(likesRef, { postId: post.id, userId: user?.uid });
      if (user) {
        setLikes((prev) =>
          prev ? [...prev, { userId: user.uid }] : [{ userId: user.uid }]
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // remove like
  

  // has user like for this post
  const hasUserLiked = likes?.some((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p>@{post.username}</p>
        <button onClick={addLike}>
          {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
        </button>
        {likes && <p>Likes: {likes?.length} </p>}
      </div>
    </div>
  );
};

export default Post;
