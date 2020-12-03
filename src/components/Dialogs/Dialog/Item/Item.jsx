import React from 'react';
import classes from './Item.module.css' ;

const Item = (props) => {
    return (
      <div className={classes.item}>
        {props.message}
      </div>
    );
  }

export default Item ;  
