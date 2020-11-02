import React from 'react';
import Icon from './Icon/Icon';
import Intro from './Intro/Intro';
import Message from './Message/Message';
import classes from './Post.module.css' ;


const Post = (props) => {
    return (
      <div className={classes.post}>
        <Intro name={props.name} data={props.data}/>
        <Message message={props.message}/>
        <Icon like={props.like} comment={props.comment} repost={props.repost} view={props.view}/>
      </div>
    );
  }

export default Post ;  
