import { connect } from 'react-redux';
import Users from './Users';


let mapStateToProps = (state) => {
  return {
    usersData : state.messagesPage.users
  }
}

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer ;  
