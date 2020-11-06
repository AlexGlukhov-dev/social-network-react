import React from 'react';
import classes from './Dialogarea.module.css' ;
import Item from './Item/Item';



const Dialogarea = props => {
  
  let DialogElemets = props.dialogsData.map(dialog => <Item key={dialog.id} message={dialog.message} id={dialog.id}/>);
    return (
      <div className={classes.dialogarea}>
        {DialogElemets}
      </div>
    );
  }

export default Dialogarea ; 