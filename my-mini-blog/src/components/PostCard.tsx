import { Post } from '../posts';

interface PostCardProps {
    post: Post;
    onClick: () => void
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
    const isName = post.author === 'John Doe'

    return (
      <div
        onClick={onClick}
        className={`p-5 border-1 border-gray-200 rounded mb-5 hover:shadow ${isName && 'bg-blue-100'}`}
      >
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-400">{post.author}</p>
        </div>

        <p className="mb-2 text-base">{post.preview}</p>
        <p className="text-xs text-gray-400">{post.date}</p>
      </div>
    );
};

export default PostCard;