import { Post as IPost } from "./home";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface Props {
  post: IPost;
}

const Post = (props: Props) => {
  const { post } = props;
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const likesRef = collection(db, "likes");

  const addLike = async () => {
    await addDoc(likesRef, {
      postId: post.id,
      userId: user?.uid
    });
    navigate("/");
  };

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
        <button onClick={addLike}>&#128077;</button>
      </div>
    </div>
  );
};

export default Post;
