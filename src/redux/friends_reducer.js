const SEARCH = 'SEARCH';
const UPDATE_SEARCH_TEXT = 'UPDATE-SEARCH-TEXT';


let initialState = {
    friends: [
        {name : 'Lubov Glukhova', was_online: 'online', place_of_work : 'AKVELON', id : 1, avaPost : './lubaha.jpg'},
        {name : 'Shamil Abdulkerimov', was_online: 'online', place_of_work : 'Gazprom', id : 2, avaPost : './shamil.jpg'},
        {name : 'Vlad Maksimov', was_online: '6 Dec. 2020', place_of_work : 'HZ', id : 3, avaPost : './vlad.jpg'},
        {name : 'Georgy Shoronov', was_online: '6 Dec. 2020', place_of_work : 'Gazprom', id : 4, avaPost : './jora.jpg'},
        {name : 'Andrey Pavlenko', was_online: 'online', place_of_work : 'Magnite', id : 5, avaPost : './andrey.jpg'},
        {name : 'Alexey Kobelev', was_online: '03 Nov. 2020', place_of_work : 'In army', id : 6, avaPost : './leha.jpg'},
    ],
    friendsSearchText: ''
};

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH :
            if(state.friendsSearchText === state.friends.name){
                state.friends = {}
                return {
                    ...state,
                    friends: [...state.friends],
                    friendsSearchText: ''
                }
            }
            else{
                return {
                    ...state
                }
            } 
   
        case UPDATE_SEARCH_TEXT :
            return {
                ...state,
                friendsSearchText: action.newSearchText
            }; 
          
        default : 
            return state;  
    }
    
}

export const SearchActionCreater = () => ({
    type: SEARCH
});
  
export const updateSearchTextActionCreater = (text) => ({
    type: UPDATE_SEARCH_TEXT, 
    newSearchText: text
});

export default friendsReducer;