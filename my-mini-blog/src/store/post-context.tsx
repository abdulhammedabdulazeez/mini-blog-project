import { createContext, ReactNode, useReducer } from "react";
import { Post } from "../posts";

interface PostState {
  posts: Post[];
    showPostDetails: boolean;
    postDetail: Post | null
}

interface PostContextProps extends PostState {
  handleShowPostDetail: (post: Post) => void;
}

const initialState: PostState = {
    posts: [],
    showPostDetails: false,
    postDetail: null,
};

type Action = 
    | { type: "TOGGLE_SHOW_POST_DETAILS"; payload: { post: Post } };

function postReducer(state: PostState, action: Action) {
  switch (action.type) {
    case "TOGGLE_SHOW_POST_DETAILS":
      return {
        ...state,
          showPostDetails: !state.showPostDetails,
      };

    default:
      return state;
  }
}

export const PostContext = createContext<PostContextProps>({
  ...initialState,
  handleShowPostDetail: () => {},
});

export const PostContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [state, dispatch] = useReducer(postReducer, initialState);

    const handleShowPostDetail = (post: Post) => {
        dispatch({type: "TOGGLE_SHOW_POST_DETAILS", payload: { post }})
    }

    return (
        <PostContext.Provider value={{...state, handleShowPostDetail}}>
            {children}
        </PostContext.Provider>
    )
}
