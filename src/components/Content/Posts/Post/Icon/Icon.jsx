import React from 'react';
import classes from './Icon.module.css' ;
import Like from './Like/Like';
import Comment from './Comment/Comment';
import Repost from './Repost/Repost';
import View from './View/View';



const Icon = (props) => {
    return (
      <div className={classes.icon}>
        <Like like={props.like} />
        <Comment comment={props.comment} />
        <Repost repost={props.repost} />
        <View view={props.view} />
      </div>
    );
  }

export default Icon ;  
