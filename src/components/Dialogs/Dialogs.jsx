import React from 'react';
import classes from './Dialogs.module.css' ;
import Users from './Users/Users';
import Dialog from './Dialog/Dialog';

const Dialogs = props => {
    return (
      <div className={classes.dialogs_container}>
          <Users usersData={props.messagesPage.users}/>
          <Dialog messages={props.messagesPage.messages}
                  addMessage={props.addMessage}
                  newMessageText={props.messagesPage.newMessageText}
                  updateNewMessageText={props.updateNewMessageText}
          />
      </div>
    );
  }

export default Dialogs ;  
