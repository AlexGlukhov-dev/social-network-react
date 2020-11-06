import React from 'react';
import Avatar from './Avatar/Avatar';
import classes from './Profile.module.css' ;
import Coordinats from './Info_user/Coordinats';


const Profile = () => {
    return (
      <div className={classes.content}>
        <Avatar />
        <Coordinats />
      </div>
    );
  }

export default Profile ;  
