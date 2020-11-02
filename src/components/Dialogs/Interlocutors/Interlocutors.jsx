import React from 'react';
import classes from './Interlocutors.module.css' ;
import Interlocutor from './Interlocutor/Interlocutor';

const Interlocutors = (props) => {
    return (
      <div className={classes.interlocutors} name={props.name}>   
          <Interlocutor name='Lubov Glukhova'/>
          <Interlocutor name='Shamil Abdulkerimov'/>
          <Interlocutor name='Vlad Maximov'/>
          <Interlocutor name='Georgy Shoronov'/>
          <Interlocutor name='Alexey Kobelev'/>
          <Interlocutor name='Andrey Pavlenko'/>
      </div>
    );
  }

export default Interlocutors ;  
