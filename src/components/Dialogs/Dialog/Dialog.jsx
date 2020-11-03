import React from 'react';
import classes from './Dialog.module.css' ;
import Item from './Item/Item';

let DialogData = [
  {id : 1, message : 'Hi'},
  {id : 2, message : 'Yo'},
  {id : 3, message : 'Lubashka'},
  {id : 4, message : 'Kolobashka'},

] ;

let DialogElemets = DialogData.map(dialog => <Item key={dialog.id} message={dialog.message} id={dialog.id}/>)

const Dialog = (props) => {
    return (
      <div className={classes.dialog}>
        {DialogElemets}
      </div>
    );
  }

export default Dialog ;  
