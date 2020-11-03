import React from 'react';
import classes from './Intro.module.css' ;



const Intro = (props) => {
    return (
      <div className={classes.post__intro}>
          <img className={classes.intro__ava} src='https://i02.fotocdn.net/s103/c95421a86eb8f1a8/user_xl/2183448216.jpg' alt='images'/>
          <div className={classes.intro__text}>
            <span className={classes.intro__name}>{props.name} </span>
            <span className={classes.intro__data}>{props.data}</span> 
          </div> 
      </div> 
    );
  }

export default Intro ;  
