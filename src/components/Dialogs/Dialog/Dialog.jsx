import React from 'react';
import classes from './Dialog.module.css' ;
import Dialogarea from './Dialogarea/Dialogarea';
import Textarea from './Textarea/Textarea';



const Dialog = props => {
    return (
      <div className={classes.dialog}>
        <Dialogarea messagesData={props.messages} />
        <Textarea addMessage={props.addMessage}
                  newMessageText={props.newMessageText}
                  updateNewMessageText={props.updateNewMessageText}
        />
      </div>
    );
  }

export default Dialog ;  
