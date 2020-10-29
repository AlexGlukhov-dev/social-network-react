import React from 'react';
import classes from './Repost.module.css' ;



const Repost = (props) => {
    return (
      <div className={classes.repost}> 
        <img className={classes.repost__img} src='https://icon-icons.com/icons2/1875/PNG/32/share_120219.png' /> 
        <span className={classes.repost__props}>{props.repost}</span>
      </div>
    );
  }

export default Repost ;  
