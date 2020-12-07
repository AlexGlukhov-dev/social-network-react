import React from 'react';
import classes from './Content.module.css' ;
import PostsContainer from './Posts/PostsContainer';

import UserProfile from './User_profile/UserProfile';


const Content = () => {
  return (
    <div className={classes.container}>
      <UserProfile />
      <PostsContainer />
    </div>
  );
}

export default Content ;  
