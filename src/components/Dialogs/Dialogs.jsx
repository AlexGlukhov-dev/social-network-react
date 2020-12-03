import React from 'react';
import classes from './Dialogs.module.css' ;
import Users from './Users/Users';
import DialogContainer from './Dialog/DialogContainer';

const Dialogs = props => {

  let state = props.store.getState();
    return (
      <div className={classes.dialogs_container}>
          <Users usersData={state.messagesPage.users}/>
          <DialogContainer store={props.store}/>
      </div>
    );
  }

export default Dialogs ;  
