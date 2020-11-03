import React from 'react';
import classes from './View.module.css' ;



const View = (props) => {
    return (
      <div className={classes.view}> 
        <img className={classes.view__img} src='./view.png' /> 
        <span className={classes.view__props}>{props.view}</span>
      </div>
    );
  }

export default View ;  
