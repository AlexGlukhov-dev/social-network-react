import React from 'react';
import classes from './Textarea.module.css' ;



const Textarea = () => {
    return (
      <div className={classes.form}>
          <div>
            <textarea  cols='50' placeholder='write what you have new....' className={classes.new_feed}></textarea>
          </div>
          <div className={classes.btns}>
            <div>
              <button className={classes.btn}>Submit</button>
            </div>
          </div>
          
      </div>
    );
  }

export default Textarea ;  
