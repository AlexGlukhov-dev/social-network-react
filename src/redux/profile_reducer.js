const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST : 
            let newPost = {
                name : 'Alex Glukhov', 
                data : '12 Nov. 2020', 
                message : state.newPostText,
                like : 0,
                comment : 0, 
                repost : 0, 
                view : 0, 
                id : 7,
                avaPost : './alex.jpg'
            };
    
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;   
            return state;   
            
        default : 
            return state;  
    }
    
}

export const addPostActionCreater = () => ({
    type: ADD_POST
});
  
export const updateNewPostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
});

export default profileReducer;