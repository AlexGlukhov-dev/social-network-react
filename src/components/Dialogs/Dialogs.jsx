import React from 'react';
import classes from './Dialogs.module.css' ;
import Dialog from './Dialog/Dialog';
import Interlocutors from './Interlocutors/Interlocutors';

const Dialogs = (props) => {
    return (
      <div className={classes.dialogs_container}>
          <Interlocutors />
          <Dialog />
      </div>
    );
  }

export default Dialogs ;  
