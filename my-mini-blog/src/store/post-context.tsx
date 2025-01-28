import { createContext, ReactNode, useReducer } from "react";
import userPosts, { Post } from "../posts";

interface PostState {
  posts: Post[];
  showPostDetails: boolean;
  postDetail: Post | null;
}

interface PostContextProps extends PostState {
    handleShowPostDetail: (post: Post) => void;
    handleBackToPost: () => void;
}

const initialState: PostState = {
  posts: userPosts,
  showPostDetails: false,
  postDetail: null,
};

type Action = 
    | { type: "TOGGLE_SHOW_POST_DETAILS"; payload: { post: Post } }
    | { type: "GO_BACK_TO_POSTS" };

function postReducer(state: PostState, action: Action) {
  switch (action.type) {
    case "TOGGLE_SHOW_POST_DETAILS":
      const post = state.posts.find(
        (post) => post.id === action.payload.post.id
      );
      return {
        ...state,
        showPostDetails: true,
        postDetail: post || null,
      };

      case "GO_BACK_TO_POSTS":
          return {
            ...state,
            showPostDetails: false,
          };

    default:
      return state;
  }
}

export const PostContext = createContext<PostContextProps>({
  ...initialState,
    handleShowPostDetail: () => { },
  handleBackToPost: () => {}
});

export const PostContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  const handleShowPostDetail = (post: Post) => {
    dispatch({ type: "TOGGLE_SHOW_POST_DETAILS", payload: { post } });
  };
    
    const handleBackToPost = () => {
        dispatch({ type: "GO_BACK_TO_POSTS" });
    }
    
    const ctxValue = {
        ...state,
        handleShowPostDetail,
        handleBackToPost
    }

  return (
    <PostContext.Provider value={ctxValue}>
      {children}
    </PostContext.Provider>
  );
};
