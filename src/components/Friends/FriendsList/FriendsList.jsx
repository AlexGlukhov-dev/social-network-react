import React from 'react';
import Friend from './Friend/Friend';
import classes from './FriendsList.module.css' ;

const FriendsList = (props) => {

  let FriendsElements = props.friendsData.map(friend => <Friend key={friend.id} name={friend.name} was_online={friend.was_online} place_of_work={friend.place_of_work} avaPost={friend.avaPost}/>);
  
  return (
    <div className={classes.FriendsList}> 
        {FriendsElements}
    </div>
  );
}

export default FriendsList ;  
