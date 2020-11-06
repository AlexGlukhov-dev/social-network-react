import React from 'react';
import classes from './UserProfile.module.css' ;
import Profile from './Profile/Profile';
import Friend from './Friend/Friend';


const UserProfile = (props) => {
  


    return (
      <div className={classes.user}>
          <Profile />
          <Friend friendsData={props.friends} />
      </div>
    );
  }

export default UserProfile ;  
