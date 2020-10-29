import React from 'react';
import classes from './Message.module.css' ;



const Message = (props) => {
    return (

      <div className={classes.message}>

        <p className={classes.message__text}> {props.message} </p>
      
      </div>

    );
  }

export default Message ;  
