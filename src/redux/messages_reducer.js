const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_MESSAGE : {
            let newMessage = {
                id : 5, 
                message : state.newMessageText
            };
        
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT : {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }

        default : 
            return state;
    }
   
}


export const addMessageActionCreater = () => ({
    type: ADD_MESSAGE
});
  
export const updateNewMessageTextActionCreater = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, 
    newText: text
});

export default messagesReducer;