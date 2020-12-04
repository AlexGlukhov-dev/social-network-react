import { connect } from 'react-redux';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile_reducer';
import Posts from './Posts';





let mapStateToProps = (state) => {
  return {
    postsData : state.profilePage.posts,
    newPostText : state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText : (text) => {
      dispatch(updateNewPostTextActionCreater(text))
    },
    addPost : () => {
      dispatch(addPostActionCreater());
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer ;  

