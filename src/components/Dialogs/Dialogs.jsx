import React from 'react';
import classes from './Dialogs.module.css' ;
import Users from './Users/Users';
import Dialog from './Dialog/Dialog';

const Dialogs = props => {
    return (
      <div className={classes.dialogs_container}>
          <Users usersData={props.messagesPage.users}/>
          <Dialog messages={props.messagesPage.messages}
                  newMessageText={props.messagesPage.newMessageText}
                  dispatch={props.dispatch}
          />
      </div>
    );
  }

export default Dialogs ;  
