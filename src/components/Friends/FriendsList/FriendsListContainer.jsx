
import { connect } from 'react-redux';
import FriendsList from './FriendsList';




let mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friends,
  }
}

const FriendsListContainer = connect(mapStateToProps)(FriendsList)

export default FriendsListContainer ;  


