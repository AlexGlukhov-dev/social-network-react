import React from 'react';
import classes from './Comment.module.css' ;



const Comment = (props) => {
    return (
      <div className={classes.comment}> 
        <img className={classes.comment__img} alt='images' src='./comment.png' /> 
        <span className={classes.comment__props}>{props.comment}</span>
      </div>
    );
  }

export default Comment ;  
