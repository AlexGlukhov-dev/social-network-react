import React from 'react';
import classes from './Dialogs.module.css' ;

import DialogContainer from './Dialog/DialogContainer';
import UsersContainer from './Users/UsersContainer';

const Dialogs = () => {
  return (
    <div className={classes.dialogs_container}>
      <UsersContainer />
      <DialogContainer/>
    </div>
  );
}

export default Dialogs ;  
