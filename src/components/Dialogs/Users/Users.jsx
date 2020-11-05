import React from 'react';
import classes from './Users.module.css' ;
import User from './User/User';




const Users = props => {
  
  let UsersElements = props.usersData.map(user => <User key={user.id} name={user.name} id={user.id} img_id={user.img_id}/>) ;
  
    return (
      <div className={classes.User}>   
          {UsersElements}
      </div>
    );
  }

export default Users ;  
