import React from 'react';
import classes from './Posts.module.css' ;
import Post from './Post/Post';
import Textarea from './Textarea/Textarea';


const Posts = () => {
    return (
      <div className={classes.posts}>
        <Textarea />
        <Post />      
      </div>
    
    );
  }

export default Posts ;  
