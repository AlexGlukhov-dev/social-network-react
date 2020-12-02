import React from 'react';
import classes from './Content.module.css' ;
import PostsContainer from './Posts/PostsContainer';

import UserProfile from './User_profile/UserProfile';


const Content = (props) => {

  let state = props.store.getState();
  
    return (
      <div className={classes.container}>
        <UserProfile friends={state.profilePage.friends} />
        <PostsContainer store={props.store}/>
      </div>
    );
  }

export default Content ;  
