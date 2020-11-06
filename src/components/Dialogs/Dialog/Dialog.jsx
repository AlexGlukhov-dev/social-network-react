import React from 'react';
import classes from './Dialog.module.css' ;
import Dialogarea from './Dialogarea/Dialogarea';
import Textarea from './Textarea/Textarea';



const Dialog = props => {
    return (
      <div className={classes.dialog}>
        <Dialogarea dialogsData={props.dialogs} />
        <Textarea />
      </div>
    );
  }

export default Dialog ;  
