import React from 'react';
import classes from './Content.module.css' ;
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';


const Content = (props) => {
  


    return (
      <div className={classes.container}>
        <Profile />
        <Posts PostsData={props.PostsData} />
      </div>
    );
  }

export default Content ;  
