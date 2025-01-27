import React from "react";
import PostCard from "./PostCard";
import postLists from "../posts"

const PostList: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
        {postLists.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

export default PostList;
