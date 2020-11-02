import React from 'react';
import classes from './Interlocutors.module.css' ;
import Interlocutor from './Interlocutor/Interlocutor';


const Interlocutors = (props) => {
    return (
      <div className={classes.interlocutors}>   
          <Interlocutor name='Lubov Glukhova' id='1' img_id=''/>
          <Interlocutor name='Shamil Abdulkerimov' id='2' img_id=''/>
          <Interlocutor name='Vlad Maximov' id='3' img_id=''/>
          <Interlocutor name='Georgy Shoronov' id='4' img_id=''/>
          <Interlocutor name='Alexey Kobelev' id='5' img_id=''/>
          <Interlocutor name='Andrey Pavlenko' id='6' img_id=''/>
      </div>
    );
  }

export default Interlocutors ;  
