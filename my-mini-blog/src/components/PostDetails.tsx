import { Post } from "../posts"

interface PostDetailsProps {
    post: Post
}

const PostDetails: React.FC<PostDetailsProps> = ({post}) => {
    return (
        <>
            <h2>{ post.title }</h2>
        </>
    )
}

export default PostDetails;