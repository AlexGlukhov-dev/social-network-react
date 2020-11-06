import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FriendLink.module.css' ;




const FriendLink= (props) => {
  
    return (
    
      <div className={classes.friendLink}>
        <NavLink to='/friends'>Friends</NavLink>
        <span className={classes.friends_caunt}> : 6</span>
      </div>
    );
  }

export default FriendLink ;  
