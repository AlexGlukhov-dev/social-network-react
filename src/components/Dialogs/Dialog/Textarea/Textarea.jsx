import React from 'react';
import classes from './Textarea.module.css' ;



const Textarea = () => {
    return (
      <div className={classes.textarea}>
        <textarea  cols='10' placeholder='write what you have new...' className={classes.new_feed}></textarea>
        <span className={classes.btns}><button className={classes.btn}>Submit</button></span>   
      </div>
    );
  }

export default Textarea ; 