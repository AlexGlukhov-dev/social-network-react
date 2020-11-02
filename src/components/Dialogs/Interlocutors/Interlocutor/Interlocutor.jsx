import React from 'react';
import classes from './Interlocutor.module.css' ;

const Interlocutor = (props) => {
    return (
      <div className={classes.interlocutor}>   
          <a href='/message/alex'>{props.name}</a>
      </div>
    );
  }

export default Interlocutor ;  
