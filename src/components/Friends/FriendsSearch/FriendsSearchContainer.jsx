import { connect } from 'react-redux';
import { SearchActionCreater, updateSearchTextActionCreater } from '../../../redux/friends_reducer';
import FriendsSearch from './FriendsSearch';




let mapStateToProps = (state) => {
  return {
    friendsSearchText : state.friendsPage.friendsSearchText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateSearchText : (text) => {
      dispatch(updateSearchTextActionCreater(text))
    },
    search : () => {
      dispatch(SearchActionCreater());
    }
  }
}

const FriendsSearchContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsSearch);

export default FriendsSearchContainer ;  
