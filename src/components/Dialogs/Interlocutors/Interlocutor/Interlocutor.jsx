import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Interlocutor.module.css' ;

const Interlocutor = (props) => {
    return (
      <div className={classes.interlocutor}>   
          <NavLink to={`/message/${props.id}`} activeClassName={classes.selected}>
            {props.name}
          </NavLink>
      </div>
    );
  }

export default Interlocutor ;  
