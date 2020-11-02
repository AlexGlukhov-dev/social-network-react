import React from 'react';
import classes from './Interlocutors.module.css' ;
import Interlocutor from './Interlocutor/Interlocutor';


let interlocutorsData = [
  {id : 1, name : 'Lubov Glukhova', img_id : ''},
  {id : 2, name : 'Shamil Abdulkerimov', img_id : ''},
  {id : 3, name : 'Vlad Maximov', img_id : ''},
  {id : 4, name : 'Georgy Shoronov', img_id : ''},
  {id : 5, name : 'Alexey Kobelev', img_id : ''},
  {id : 6, name : 'Andrey Pavlenko', img_id : ''}
];




const Interlocutors = (props) => {
    return (
      <div className={classes.interlocutors}>   
          <Interlocutor name={interlocutorsData[0].name} id={interlocutorsData[0].id} img_id={interlocutorsData[0].img_id}/>
          <Interlocutor name={interlocutorsData[1].name} id={interlocutorsData[1].id} img_id={interlocutorsData[1].img_id}/>
          <Interlocutor name={interlocutorsData[2].name} id={interlocutorsData[2].id} img_id={interlocutorsData[2].img_id}/>
          <Interlocutor name={interlocutorsData[3].name} id={interlocutorsData[3].id} img_id={interlocutorsData[3].img_id}/>
          <Interlocutor name={interlocutorsData[4].name} id={interlocutorsData[4].id} img_id={interlocutorsData[4].img_id}/>
          <Interlocutor name={interlocutorsData[5].name} id={interlocutorsData[5].id} img_id={interlocutorsData[5].img_id}/>
      </div>
    );
  }

export default Interlocutors ;  
