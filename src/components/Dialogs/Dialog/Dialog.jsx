import React from 'react';
import classes from './Dialog.module.css' ;
import Item from './Item/Item';


const Dialog = (props) => {
    return (
      <div className={classes.dialog}>
        <Item message='Hi'/>
        <Item message='Yo'/>
        <Item message='Lubashka'/>
        <Item message='Kolobashka'/>
      </div>
    );
  }

export default Dialog ;  
