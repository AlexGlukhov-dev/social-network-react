import React from 'react';
import classes from './Coordinats.module.css' ;


const Coordinats = () => {
    return (
      <div className={classes.profile} >
        <p>Alex Glukhov</p>
        <ul> 
          <li>Date of birth : 06 may 1993</li>
            <li>City : Ivanovo</li>
            <li>Education : <span>«Ivanovo State Power Engineering University»</span></li>
            <li>web-site : <a href='https://github.com/Alexander-Sergeevich-Glukhov' target='_blank' rel='noopener noreferrer'>my GitHub</a></li>
          </ul>
      </div>  
    );
  }

export default Coordinats ;  
