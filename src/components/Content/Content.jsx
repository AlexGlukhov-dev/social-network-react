import React from 'react';
import classes from './Content.module.css' ;
import Posts from './Posts/Posts';

import UserProfile from './User_profile/UserProfile';


const Content = (props) => {
  


    return (
      <div className={classes.container}>
        <UserProfile friends={props.profilePage.friends} />
        <Posts 
              postsData={props.profilePage.posts} 
              newPostText={props.profilePage.newPostText} 
              dispatch={props.dispatch}
        />
      </div>
    );
  }

export default Content ;  
