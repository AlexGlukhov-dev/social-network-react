import React from 'react';
import classes from './Dialogs.module.css' ;
import Users from './Users/Users';
import Dialog from './Dialog/Dialog';

const Dialogs = props => {
    return (
      <div className={classes.dialogs_container}>
          <Users UsersData={props.UsersData}/>
          <Dialog DialogData={props.DialogData}/>
      </div>
    );
  }

export default Dialogs ;  
