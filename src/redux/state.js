const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
            messages: [
                {id : 1, message : 'Hi'},
                {id : 2, message : 'Yo'},
                {id : 3, message : 'Lubashka'},
                {id : 4, message : 'Kolobashka'}
            ],
            newMessageText: '',
            users: [
                {id : 1, name : 'Lubov Glukhova', img_id : './lubaha.jpg'},
                {id : 2, name : 'Shamil Abdulkerimov', img_id : './shamil.jpg'},
                {id : 3, name : 'Vlad Maximov', img_id : './vlad.jpg'},
                {id : 4, name : 'Georgy Shoronov', img_id : './jora.jpg'},
                {id : 5, name : 'Alexey Kobelev', img_id : './leha.jpg'},
                {id : 6, name : 'Andrey Pavlenko', img_id : './andrey.jpg'}
            ]
        } 
    },
    _callSubscriber() {
        alert('!!!') ;
    },

    getState(){
        return this._state ;
    },
    subscribe(observer) {
        this._callSubscriber = observer ;
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                name : 'Alex Glukhov', 
                data : '12 Nov. 2020', 
                message : this.getState().profilePage.newPostText,
                like : 0,
                comment : 0, 
                repost : 0, 
                view : 0, 
                id : 7,
                avaPost : './alex.jpg'
            };
        
            this.getState().profilePage.posts.unshift(newPost);
            this.getState().profilePage.newPostText = '';
        
            this._callSubscriber(this.getState());
        } 
        else if(action.type === UPDATE_NEW_POST_TEXT) {
            this.getState().profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        }
        else if(action.type === ADD_MESSAGE) {
            let newMessage = {
                id : 5, 
                message : this.getState().messagesPage.newMessageText
            };
        
            this.getState().messagesPage.messages.push(newMessage);
            this.getState().messagesPage.newMessageText = '';
            this._callSubscriber(this.getState());
        }
        else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this.getState().messagesPage.newMessageText = action.newText;
            this._callSubscriber(this.getState());
        }
    }
}



export const addPostActionCreater = () => ({
    type: ADD_POST
});
  
export const updateNewPostTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
});

export const addMessageActionCreater = () => ({
    type: ADD_MESSAGE
});
  
export const updateNewMessageTextActionCreater = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, 
    newText: text
})



export default store ;


window.store = store ;













