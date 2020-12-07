import React from 'react';
import classes from './UserProfile.module.css' ;
import Profile from './Profile/Profile';
import Friend from './Friend/Friend';


const UserProfile = () => {
  


    return (
      <div className={classes.user}>
          <Profile />
          <Friend/>
      </div>
    );
  }

export default UserProfile ;  
