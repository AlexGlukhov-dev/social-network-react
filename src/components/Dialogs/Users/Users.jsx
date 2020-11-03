import React from 'react';
import classes from './Users.module.css' ;
import Interlocutor from './User/User';


let UsersData = [
  {id : 1, name : 'Lubov Glukhova', img_id : ''},
  {id : 2, name : 'Shamil Abdulkerimov', img_id : ''},
  {id : 3, name : 'Vlad Maximov', img_id : ''},
  {id : 4, name : 'Georgy Shoronov', img_id : ''},
  {id : 5, name : 'Alexey Kobelev', img_id : ''},
  {id : 6, name : 'Andrey Pavlenko', img_id : ''}
];

let UsersElements = UsersData.map(user => <Interlocutor name={user.name} id={user.id} img_id={user.img_id}/>) ;


const Users = (props) => {
    return (
      <div className={classes.interlocutors}>   
          {UsersElements}
      </div>
    );
  }

export default Users ;  
