import React from 'react';
import classes from './Intro.module.css' ;



const Intro = (props) => {
    return (
      <div className={classes.post__intro}>
          <img className={classes.intro__ava} src={props.avaPost} alt='images'/>
          <div className={classes.intro__text}>
            <span className={classes.intro__name}>{props.name} </span>
            <span className={classes.intro__data}>{props.data}</span> 
          </div> 
      </div> 
    );
  }

export default Intro ;  
