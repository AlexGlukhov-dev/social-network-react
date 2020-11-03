import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css' ;

const User = (props) => {
    return (
      <div className={classes.interlocutor}>   
          <NavLink to={`/message/${props.id}`} activeClassName={classes.selected}>
           <img src={props.img_id} className={classes.img} />
           <span className={classes.name}>{props.name}</span>
          </NavLink>
      </div>
    );
  }

export default User ;  
