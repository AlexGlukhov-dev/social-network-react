import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile_reducer';
import Posts from './Posts';






const PostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    let action = addPostActionCreater();
    props.store.dispatch(action);
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreater(text);
    props.store.dispatch(action);
  }

  return (<Posts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>);

}

export default PostsContainer ;  

