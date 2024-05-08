import { Post as IPost } from "./home";

interface Props {
  post: IPost;
}

const Post = (props: Props) => {
  const { post } = props;
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
      </div>
    </div>
  );
};

export default Post;
