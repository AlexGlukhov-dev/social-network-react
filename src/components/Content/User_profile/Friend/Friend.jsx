import React from 'react';
import classes from './Friend.module.css' ;
import FriendLink from './FriendLink/FriendLink';
import FriendRow from './FriendRow/FriendRow';



const Friend = (props) => {
  
    return (
      <div className={classes.container}>
        <FriendLink />
        <FriendRow friends={props.friendsData}/>
      </div>
    );
  }

export default Friend ;  
