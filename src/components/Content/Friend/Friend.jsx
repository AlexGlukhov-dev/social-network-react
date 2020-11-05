import React from 'react';
import classes from './Friend.module.css' ;

import FriendRow from './FriendRow/FriendRow';



const Friend = (props) => {
  
    return (
      <div className={classes.container}>
        <div className={classes.friendLink}>
          <a href='/friends'>Friends</a>
          <span className={classes.friends_caunt}> : 6{props.all_count}</span>
        </div>
        <div className={classes.all_friends}>
          <FriendRow />
        </div>
      </div>
    );
  }

export default Friend ;  
