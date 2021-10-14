const PostReducer = (state, action) => {
    switch(action.type){
        case "UPDATE_POST":
            return {
                post: action.payload,
                friends: state.friends
            };
        case "UPDATE_FRIENDS":
            return {
                post: state.post,
                friends: action.payload
            };
        
        default: 
            return state;
    }
}

export default PostReducer;