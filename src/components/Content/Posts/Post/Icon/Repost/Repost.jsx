import React from 'react';
import classes from './Repost.module.css' ;



const Repost = (props) => {
    return (
      <div className={classes.repost}> 
        <img className={classes.repost__img} src='./repost.png' /> 
        <span className={classes.repost__props}>{props.repost}</span>
      </div>
    );
  }

export default Repost ;  
