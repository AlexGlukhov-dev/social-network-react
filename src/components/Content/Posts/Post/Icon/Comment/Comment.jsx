import React from 'react';
import classes from './Comment.module.css' ;



const Comment = (props) => {
    return (
      <div className={classes.comment}> 
        <img className={classes.comment__img} src='https://icon-icons.com/icons2/1946/PNG/32/1904663-bubble-chat-comment-communication-message-talk-text_122514.png' /> 
        <span className={classes.comment__props}>{props.comment}</span>
      </div>
    );
  }

export default Comment ;  
