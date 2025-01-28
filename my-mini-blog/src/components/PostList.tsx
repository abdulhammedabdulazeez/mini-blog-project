import React, { useContext } from "react";
import PostCard from "./PostCard";
import postLists from "../posts"
import { PostContext } from "../store/post-context";

const PostList: React.FC = () => {
  const { handleShowPostDetail } =  useContext(PostContext)
  return (
    <section>
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
        {postLists.map((post, index) => (
          <PostCard key={index} post={post} onClick={() => handleShowPostDetail(post)} />
        ))}
      </div>
    </section>
  );
};

export default PostList;
