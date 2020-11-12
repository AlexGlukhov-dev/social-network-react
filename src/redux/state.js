


let rerenderEntireTree = () => {
    console.log('added chenges');
}

let state = {
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
        newMessageText: 'hello gays',
        users: [
            {id : 1, name : 'Lubov Glukhova', img_id : './lubaha.jpg'},
            {id : 2, name : 'Shamil Abdulkerimov', img_id : './shamil.jpg'},
            {id : 3, name : 'Vlad Maximov', img_id : './vlad.jpg'},
            {id : 4, name : 'Georgy Shoronov', img_id : './jora.jpg'},
            {id : 5, name : 'Alexey Kobelev', img_id : './leha.jpg'},
            {id : 6, name : 'Andrey Pavlenko', img_id : './andrey.jpg'}
        ]
    } 
}
 



export const addPost = () => {
    let newPost = {
        name : 'Alex Glukhov', 
        data : '12 Nov. 2020', 
        message : state.profilePage.newPostText,
        like : 0,
        comment : 0, 
        repost : 0, 
        view : 0, 
        id : 7,
        avaPost : './alex.jpg'
    };

    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state);
} ;

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}





export const addMessage = () => {
    let newMessage = {
        id : 5, 
        message : state.messagesPage.newMessageText
    };

    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
}






export const subscribe = (observer) => {
    rerenderEntireTree = observer ;
}






export default state ;


window.state = state ;