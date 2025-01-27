import { Post } from '../posts';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {

    return (
      <div className="p-5 border-1 border-gray-200 rounded mb-5 hover:shadow">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">
            {post.title}
          </h3>
          <p className="text-gray-400">{post.author}</p>
        </div>

        <p className="mb-2 text-base">
          {post.preview}
        </p>
            <p className="text-xs text-gray-400">{ post.date }</p>
      </div>
    );
};

export default PostCard;