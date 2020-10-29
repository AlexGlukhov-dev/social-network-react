import React from 'react';
import classes from './Like.module.css' ;



const Like = (props) => {
    return (
      <div className={classes.like}> 
        <img className={classes.like__img} src='https://icon-icons.com/icons2/2073/PNG/32/heart_like_love_twitter_icon_127132.png' /> 
        <span className={classes.like__props}>{props.like}</span>
      </div>
    );
  }

export default Like ;  
