import React from 'react';
import classes from './Interlocutors.module.css' ;
import Interlocutor from './Interlocutor/Interlocutor';


const Interlocutors = (props) => {
    return (
      <div className={classes.interlocutors}>   
          <Interlocutor name='Lubov Glukhova' id='1'/>
          <Interlocutor name='Shamil Abdulkerimov' id='2'/>
          <Interlocutor name='Vlad Maximov' id='3'/>
          <Interlocutor name='Georgy Shoronov' id='4'/>
          <Interlocutor name='Alexey Kobelev' id='5'/>
          <Interlocutor name='Andrey Pavlenko' id='6'/>
      </div>
    );
  }

export default Interlocutors ;  
