const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {name : 'Alex Glukhov', data : '28 Okt. 2020', message : 'My first post', like : 20, comment : 2, repost : 1, view : 40, id : 1, avaPost : './alex.jpg'},
        {name : 'Alex Glukhov', data : '28 Okt. 2020', message : 'Hello world', like : 35, comment : 5, repost : 2, view : 61, id : 2, avaPost : './alex.jpg'},
        {name : 'Lubov Glukhova', data : '28 Okt. 2020', message : 'Lubashka kalabashka', like : 4, comment : 2, repost : 1, view : 43, id : 3, avaPost : './lubaha.jpg'},
        {name : 'Alex Glukhov', data : '29 Okt. 2020', message : 'I learn react', like : 17, comment : 4, repost : 1, view : 20, id : 4, avaPost : './alex.jpg'},
        {name : 'Alex Glukhov', data : '29 Okt. 2020', message : 'I know, i will reach the end', like : 6002, comment : 3, repost : 9, view : 84, id : 5, avaPost : './alex.jpg'},
        {name : 'Shamil Abdulkerimov', data : '03 Nov. 2020', message : 'I robocop', like : 62, comment : 3, repost : 9, view : 84, id : 6, avaPost : './shamil.jpg'},
        {name : 'Lubov Glukhova', data : '03 Nov. 2020', message : 'I reactive', like : 16, comment : 1, repost : 1, view : 23, id : 7, avaPost : './lubaha.jpg'},
    ],
    newPostText: '',

    friends: [
        {imgUrl: './lubaha.jpg', name: 'Lubaha', id: 1},
        {imgUrl: './shamil.jpg', name: 'Shamil', id: 2},
        {imgUrl: './jora.jpg', name: 'Georgy', id: 3},
        {imgUrl: './leha.jpg', name: 'Alexey', id: 4},
        {imgUrl: './vlad.jpg', name: 'Vladislav', id: 5},
        {imgUrl: './andrey.jpg', name: 'Andrey', id: 6}
        ] 
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST : {
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
            
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.unshift(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }    
        case UPDATE_NEW_POST_TEXT : {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;   
            return stateCopy;   
        }   
        default : 
            return state;  
    }
    
}

export const addPostActionCreater = () => ({
    type: ADD_POST
});
  
export const updateNewPostTextActionCreater =   (text) => ({
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
});

export default profileReducer;