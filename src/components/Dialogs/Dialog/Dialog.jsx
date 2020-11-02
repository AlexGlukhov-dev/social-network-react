import React from 'react';
import classes from './Dialog.module.css' ;
import Item from './Item/Item';

let DialogData = [
  {id : 1, message : 'Hi'},
  {id : 2, message : 'Yo'},
  {id : 3, message : 'Lubashka'},
  {id : 4, message : 'Kolobashka'},

] ;



const Dialog = (props) => {
    return (
      <div className={classes.dialog}>
        <Item message={DialogData[0].message} id={DialogData[0].id}/>
        <Item message={DialogData[1].message} id={DialogData[1].id}/>
        <Item message={DialogData[2].message} id={DialogData[2].id}/>
        <Item message={DialogData[3].message} id={DialogData[3].id}/>
      </div>
    );
  }

export default Dialog ;  
