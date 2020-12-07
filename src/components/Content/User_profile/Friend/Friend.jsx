import React from 'react';
import classes from './Friend.module.css' ;
import FriendLink from './FriendLink/FriendLink';
import FriendRowContainer from './FriendRow/FriendRowContainer';



const Friend = () => {
    return (
      <div className={classes.container}>
        <FriendLink />
        <FriendRowContainer/>
      </div>
    );
  }

export default Friend ;  
