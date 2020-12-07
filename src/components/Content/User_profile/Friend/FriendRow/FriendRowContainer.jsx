import { connect } from 'react-redux';
import FriendRow from './FriendRow';

let mapStateToProps = (state) => {
  return{
    friends: state.profilePage.friends
  }
}

const FriendRowContainer = connect(mapStateToProps)(FriendRow)

export default FriendRowContainer ;  
