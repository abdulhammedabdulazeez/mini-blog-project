import { useContext } from "react";
import { PostContext } from "../store/post-context";
import PostList from "./PostList";
import PostDetails from "./PostDetails";

const MainContent: React.FC = () => {
  const { showPostDetails, postDetail } = useContext(PostContext);

  return (
    <>
      {!showPostDetails ? (
        <PostList />
      ) : (
        postDetail && <PostDetails post={postDetail} />
      )}
    </>
  );
};

export default MainContent;