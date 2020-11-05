import React from 'react';
import classes from './Dialog.module.css' ;
import Item from './Item/Item';



const Dialog = props => {
  
  let DialogElemets = props.dialogsData.map(dialog => <Item key={dialog.id} message={dialog.message} id={dialog.id}/>);

    return (
      <div className={classes.dialog}>
        {DialogElemets}
      </div>
    );
  }

export default Dialog ;  
