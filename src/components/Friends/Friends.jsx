import React from 'react';
import classes from './Friends.module.css' ;
import FriendsSearchContainer from './FriendsSearch/FriendsSearchContainer';
import FriendsListContainer from './FriendsList/FriendsListContainer';


const Friends = () => {
    return (
      <div className={classes.container_friends}>
        <FriendsSearchContainer />
        <FriendsListContainer />
      </div>    
    );
  }

export default Friends ;  
