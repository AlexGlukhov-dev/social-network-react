import React from 'react';
import classes from './Like.module.css' ;



const Like = (props) => {
    return (
      <div className={classes.like}> 
        <img className={classes.like__img} src='./like.png' /> 
        <span className={classes.like__props}>{props.like}</span>
      </div>
    );
  }

export default Like ;  
