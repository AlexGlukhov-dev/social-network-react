import React from 'react';
import classes from './FriendComp.module.css' ;



const FriendComp = (props) => {
  
    return (
      <div className={classes.container}>
        <img className={classes.img} src={props.imgUrl} alt="images"/>
        <p className={classes.friends_name}>{props.name}</p>  
      </div>
    );
  }

export default FriendComp ;  
