import { useContext } from "react";
import { Post } from "../posts";

import { IoChevronBackCircleOutline } from "react-icons/io5";
import { PostContext } from "../store/post-context";

interface PostDetailsProps {
  post: Post;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
    const { handleBackToPost } = useContext(PostContext)

  return (
    <section className="max-w-3xl mx-auto mt-20">
      <div className="">
        <div onClick={handleBackToPost} className="p-3 inline-flex items-center gap-3 text-sm font-bold mb-8 rounded-lg hover:bg-gray-100">
          <IoChevronBackCircleOutline className="text-xl" />
          <span>Back to Posts</span>
        </div>
        <article className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
          <p className="text-gray-400 mb-5">{post.author}</p>
          <p className="mb-5 text-base/7">{post.content}</p>
          <span className="text-xs text-gray-400">{post.date}</span>
        </article>
      </div>
    </section>
  );
};

export default PostDetails;
