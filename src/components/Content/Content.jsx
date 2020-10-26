import React from 'react';
import classes from './Content.module.css' ;
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';


const Content = () => {
    return (
      <div className={classes.container}>
        <Profile />
        <Posts />
      </div>
    );
  }

export default Content ;  
