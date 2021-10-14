
import { createContext, useReducer } from "react";
import PostReducer from "./PostReducer";

const INITIAL_STATE =  {
    post: [],
    friends: []
}

export const PostContext = createContext(INITIAL_STATE);

export const PostContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

    return (
        <PostContext.Provider
        value = {{
            post: state.post,
            friends: state.friends,
            dispatch
        }}
        >{children}</PostContext.Provider>
    );
};